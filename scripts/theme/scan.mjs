// Design-token scanner.
//
// Reads a project directory and infers its design tokens (colors, radius, fonts, shadows)
// from four sources, in descending priority:
//   1. Tailwind config (theme.extend.*)          — highest confidence
//   2. Tailwind v4 `@theme` / `:root { --… }` CSS — high confidence
//   3. Class-usage frequency in JSX/TSX/HTML      — medium/low, drives `questions`
//   4. Font imports (package.json / next/font)    — medium
//
// The scanner NEVER invents values: every emitted token carries at least one evidence
// entry. Ambiguity (two close candidates, or a missing required token) becomes a question
// for the user's agent to resolve, not a guess.

import fs from 'node:fs'
import path from 'node:path'

import { emptyTokens, isPlausibleTokenValue } from './tokens.mjs'

const IGNORED_DIRS = new Set([
  'node_modules',
  '.next',
  '.astro',
  'dist',
  'out',
  '.git',
  '.wrangler',
  'coverage',
  '.turbo',
])

const CONFIDENCE = { config: 0.95, cssVar: 0.9, fontImport: 0.7, usage: 0.45 }

// Tailwind's default palette → representative hex, so `bg-indigo-600` in usage scanning maps
// to a concrete brand color candidate. Kept intentionally small: the common shades.
const TAILWIND_PALETTE = {
  slate: { 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
  gray: { 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827' },
  zinc: { 800: '#27272a', 900: '#18181b' },
  red: { 500: '#ef4444', 600: '#dc2626' },
  orange: { 500: '#f97316', 600: '#ea580c' },
  amber: { 500: '#f59e0b' },
  green: { 500: '#22c55e', 600: '#16a34a' },
  emerald: { 500: '#10b981', 600: '#059669' },
  teal: { 500: '#14b8a6', 600: '#0d9488' },
  cyan: { 500: '#06b6d4', 600: '#0891b2' },
  sky: { 500: '#0ea5e9', 600: '#0284c7' },
  blue: { 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8' },
  indigo: { 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca' },
  violet: { 500: '#8b5cf6', 600: '#7c3aed' },
  purple: { 500: '#a855f7', 600: '#9333ea' },
  fuchsia: { 500: '#d946ef', 600: '#c026d3' },
  pink: { 500: '#ec4899', 600: '#db2777' },
  rose: { 500: '#f43f5e', 600: '#e11d48' },
}

const RADIUS_SCALE = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

/** Recursively collect files under `dir` matching `extensions`, skipping ignored dirs. */
function collectFiles(dir, extensions, found = [], depth = 0) {
  if (depth > 8) {
    return found
  }
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return found
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.') && entry.name !== '.') {
      if (IGNORED_DIRS.has(entry.name)) {
        continue
      }
    }
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) {
        continue
      }
      collectFiles(path.join(dir, entry.name), extensions, found, depth + 1)
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      found.push(path.join(dir, entry.name))
    }
  }
  return found
}

function readSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch {
    return ''
  }
}

// --- Source 1: Tailwind config ------------------------------------------------------------

function scanTailwindConfig(cwd, sink) {
  const configFile = [
    'tailwind.config.ts',
    'tailwind.config.js',
    'tailwind.config.mjs',
    'tailwind.config.cjs',
  ]
    .map((name) => path.join(cwd, name))
    .find((candidate) => fs.existsSync(candidate))
  if (!configFile) {
    return
  }
  const source = readSafe(configFile)
  const rel = path.relative(cwd, configFile)

  // A pragmatic extraction: pull the first hex under a `colors` block and any borderRadius
  // default. Full JS evaluation is intentionally avoided (untrusted config, ESM/CJS mix).
  const colorsBlock = source.match(/colors\s*:\s*\{([\s\S]*?)\n\s*\}/)
  if (colorsBlock) {
    const brandLine =
      colorsBlock[1].match(
        /\b(?:brand|primary|accent)\b[^:]*:\s*\{?\s*(?:['"]?(?:DEFAULT|500|600)['"]?\s*:\s*)?['"](#[0-9a-fA-F]{3,8})['"]/,
      ) || colorsBlock[1].match(/['"](#[0-9a-fA-F]{6})['"]/)
    if (brandLine) {
      sink('colors', 'brand', brandLine[1], CONFIDENCE.config, `${rel}:theme.colors`)
    }
  }
  const radius = source.match(/borderRadius\s*:\s*\{[\s\S]*?DEFAULT\s*:\s*['"]([^'"]+)['"]/)
  if (radius) {
    sink('radius', 'DEFAULT', radius[1], CONFIDENCE.config, `${rel}:theme.borderRadius`)
  }
  const font = source.match(/fontFamily\s*:\s*\{[\s\S]*?sans\s*:\s*\[?\s*['"]([^'"]+)['"]/)
  if (font) {
    sink('fontFamily', 'sans', font[1], CONFIDENCE.config, `${rel}:theme.fontFamily`)
  }
}

// --- Source 2: Tailwind v4 @theme / :root CSS custom properties ---------------------------

const CSS_VAR_TOKEN = [
  ['--color-brand', 'colors', 'brand'],
  ['--color-primary', 'colors', 'brand'],
  ['--color-surface', 'colors', 'surface'],
  ['--color-background', 'colors', 'surface'],
  ['--radius', 'radius', 'DEFAULT'],
  ['--radius-lg', 'radius', 'lg'],
  ['--font-sans', 'fontFamily', 'sans'],
  ['--font-mono', 'fontFamily', 'mono'],
  ['--shadow', 'shadow', 'DEFAULT'],
]

function scanCssVariables(cwd, sink) {
  for (const file of collectFiles(cwd, ['.css'])) {
    const source = readSafe(file)
    if (!/--(?:color|radius|font|shadow)/.test(source)) {
      continue
    }
    const rel = path.relative(cwd, file)
    for (const [varName, group, token] of CSS_VAR_TOKEN) {
      const match = source.match(new RegExp(`${varName}\\s*:\\s*([^;]+);`))
      if (match) {
        sink(group, token, match[1].trim(), CONFIDENCE.cssVar, `${rel}:${varName}`)
      }
    }
  }
}

// --- Source 3: class-usage frequency ------------------------------------------------------

function scanClassUsage(cwd, record) {
  const colorCounts = new Map() // "indigo-600" -> count
  const radiusCounts = new Map() // "lg" -> count
  const classPattern = /(?:className|class)\s*=\s*["'`]([^"'`]+)["'`]/g
  const bgPattern = /\bbg-([a-z]+)-(\d{2,3})\b/g
  const roundedPattern = /\brounded(?:-([a-z0-9]+))?\b/g

  for (const file of collectFiles(cwd, ['.tsx', '.jsx', '.html', '.astro', '.vue'])) {
    const source = readSafe(file)
    let attr
    while ((attr = classPattern.exec(source))) {
      const classes = attr[1]
      let bg
      while ((bg = bgPattern.exec(classes))) {
        const [, color, shade] = bg
        if (TAILWIND_PALETTE[color]) {
          const key = `${color}-${shade}`
          colorCounts.set(key, (colorCounts.get(key) ?? 0) + 1)
        }
      }
      let rounded
      while ((rounded = roundedPattern.exec(classes))) {
        const key = rounded[1] ?? 'DEFAULT'
        radiusCounts.set(key, (radiusCounts.get(key) ?? 0) + 1)
      }
    }
  }
  record.colorCounts = [...colorCounts.entries()].sort((a, b) => b[1] - a[1])
  record.radiusCounts = [...radiusCounts.entries()].sort((a, b) => b[1] - a[1])
}

// --- Source 4: font imports ---------------------------------------------------------------

const FONT_PACKAGES = {
  '@fontsource/inter': 'Inter, system-ui, sans-serif',
  '@fontsource-variable/inter': 'Inter, system-ui, sans-serif',
  '@fontsource/roboto': 'Roboto, system-ui, sans-serif',
  '@fontsource/poppins': 'Poppins, system-ui, sans-serif',
}

function scanFontImports(cwd, sink) {
  const pkgPath = path.join(cwd, 'package.json')
  if (fs.existsSync(pkgPath)) {
    let pkg
    try {
      pkg = JSON.parse(readSafe(pkgPath))
    } catch {
      pkg = null
    }
    const deps = { ...(pkg?.dependencies ?? {}), ...(pkg?.devDependencies ?? {}) }
    for (const [name, stack] of Object.entries(FONT_PACKAGES)) {
      if (deps[name]) {
        sink('fontFamily', 'sans', stack, CONFIDENCE.fontImport, `package.json:${name}`)
      }
    }
  }
  // next/font — `Inter(` etc. in any TS/JS file.
  for (const file of collectFiles(cwd, ['.ts', '.tsx', '.js', '.jsx']).slice(0, 200)) {
    const source = readSafe(file)
    const m = source.match(/from ['"]next\/font\/google['"][\s\S]{0,200}?\b([A-Z][a-zA-Z_]+)\s*\(/)
    if (m) {
      const family = m[1].replace(/_/g, ' ')
      sink(
        'fontFamily',
        'sans',
        `${family}, system-ui, sans-serif`,
        CONFIDENCE.fontImport,
        `${path.relative(cwd, file)}:next/font`,
      )
      break
    }
  }
}

/**
 * Scan a project directory for design tokens.
 * @param {string} cwd
 * @returns {{tokens:object, evidence:Record<string,string[]>, confidence:Record<string,number>, questions:string[], sources:string[]}}
 */
export function scanProject(cwd) {
  const tokens = emptyTokens()
  const evidence = {}
  const confidence = {}
  const questions = []
  const sources = new Set()

  // `sink` records a candidate token, keeping the highest-confidence value and appending
  // evidence. Implausible values are silently dropped (defense against bad regex hits).
  const sink = (group, name, value, conf, where) => {
    if (!isPlausibleTokenValue(group, value)) {
      return
    }
    const key = `${group}.${name}`
    sources.add(where.split(':')[0])
    ;(evidence[key] ??= []).push(where)
    if ((confidence[key] ?? 0) < conf) {
      tokens[group][name] = value.trim()
      confidence[key] = conf
    }
  }

  scanTailwindConfig(cwd, sink)
  scanCssVariables(cwd, sink)
  scanFontImports(cwd, sink)

  const usage = {}
  scanClassUsage(cwd, usage)

  // Promote usage frequency into a brand color only when config/CSS didn't already provide
  // one — and raise a question if the top two candidates are close.
  if (!tokens.colors.brand && usage.colorCounts?.length) {
    const [top, second] = usage.colorCounts
    const [color, shade] = top[0].split('-')
    const hex = TAILWIND_PALETTE[color]?.[shade]
    if (hex) {
      sink('colors', 'brand', hex, CONFIDENCE.usage, `class usage: ${top[1]}× bg-${top[0]}`)
      if (second && second[1] >= top[1] * 0.6) {
        questions.push(
          `Two candidate brand colors from class usage: bg-${top[0]} (${top[1]}×) and bg-${second[0]} (${second[1]}×). Which is primary?`,
        )
      }
    }
  }
  if (!tokens.radius.DEFAULT && usage.radiusCounts?.length) {
    const [key, count] = usage.radiusCounts[0]
    const value = RADIUS_SCALE[key]
    if (value) {
      sink('radius', 'DEFAULT', value, CONFIDENCE.usage, `class usage: ${count}× rounded-${key}`)
    }
  }

  // Questions for missing required tokens.
  if (!tokens.colors.brand) {
    questions.push('No brand/primary color detected. Set colors.brand before confirming.')
  }
  if (!tokens.fontFamily.sans) {
    questions.push(
      'No sans font detected. Set fontFamily.sans (or confirm the system default is fine).',
    )
  }

  return {
    tokens,
    evidence,
    confidence,
    questions,
    sources: [...sources],
  }
}
