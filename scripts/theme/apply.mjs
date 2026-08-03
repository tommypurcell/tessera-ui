// Rewrite installed component source to consume the theme's CSS variables.
//
// The registry ships components with literal Tailwind palette classes (e.g. `bg-indigo-600`) and
// their default JSX is hash-verified, so we never rewrite registry source. Instead, `theme apply`
// operates on the files already copied into the user's project: it swaps the brand/radius/font
// classes for arbitrary-value utilities backed by the canonical CSS variables, with the literal
// value kept as the fallback. That way a confirmed theme actually restyles installed components,
// and if a variable is unset the component still renders its original look.
//
//   bg-indigo-600  ->  bg-[var(--color-brand,#4f46e5)]
//   rounded-lg     ->  rounded-[var(--radius,0.5rem)]
//   font-sans      ->  font-[var(--font-sans,Inter,system-ui,sans-serif)]  (only if theme sets it)

import fs from 'node:fs'
import path from 'node:path'

import { flattenTokens } from './tokens.mjs'

// Tailwind palette shades we map back to a hex, so a class like `bg-indigo-600` can carry a
// sensible literal fallback alongside the brand variable.
const PALETTE_HEX = {
  'indigo-600': '#4f46e5',
  'indigo-500': '#6366f1',
  'blue-600': '#2563eb',
  'blue-500': '#3b82f6',
  'violet-600': '#7c3aed',
  'sky-600': '#0284c7',
  'emerald-600': '#059669',
  'teal-600': '#0d9488',
  'rose-600': '#e11d48',
  'pink-600': '#db2777',
  'purple-600': '#9333ea',
}

const RADIUS_REM = {
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

const COMPONENT_EXTENSIONS = ['.tsx', '.jsx', '.html', '.astro']

function collectComponentFiles(dir, found = []) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return found
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectComponentFiles(full, found)
    } else if (COMPONENT_EXTENSIONS.some((ext) => entry.name.endsWith(ext))) {
      found.push(full)
    }
  }
  return found
}

const COLOR_PREFIXES = ['bg', 'text', 'border', 'ring', 'fill', 'stroke', 'from', 'to', 'via']

/**
 * Build the list of literal→var-backed class rewrites implied by a theme's tokens.
 * Each rewrite carries a `category` (color|radius|font) so callers can report accurately what
 * changed rather than claiming everything was rebranded.
 *
 * Color rewriting is deliberately conservative and opt-in: mapping every palette color to the
 * brand variable would recolor semantic colors (a green success badge, a red error) as the brand.
 * By default only radius and font are variabilized. Pass `options.colors` — a list of literal
 * color roots to treat as brand, e.g. ['indigo', 'rose-600'] — to also variabilize those, or
 * `options.allColors` to map every known palette shade (aggressive; use with review).
 */
export function buildRewrites(tokens, options = {}) {
  const flat = flattenTokens(tokens)
  const rewrites = []

  if (flat['colors.brand'] && (options.allColors || (options.colors && options.colors.length))) {
    const brand = flat['colors.brand']
    const wanted = options.allColors
      ? Object.keys(PALETTE_HEX)
      : normalizeColorTargets(options.colors)
    // Also cover opacity modifiers like `bg-rose-600/10`.
    for (const shadeKey of wanted) {
      const hex = PALETTE_HEX[shadeKey] ?? brand
      for (const prefix of COLOR_PREFIXES) {
        rewrites.push({
          category: 'color',
          pattern: new RegExp(`\\b${prefix}-${shadeKey}(/\\d{1,3})?\\b`, 'g'),
          replacement: (_match, opacity = '') => `${prefix}-[var(--color-brand,${hex})]${opacity}`,
        })
      }
    }
  }

  if (flat['radius.DEFAULT']) {
    for (const [key, rem] of Object.entries(RADIUS_REM)) {
      rewrites.push({
        category: 'radius',
        pattern: new RegExp(`\\brounded-${key}\\b`, 'g'),
        replacement: `rounded-[var(--radius,${rem})]`,
      })
    }
    rewrites.push({
      category: 'radius',
      pattern: /\brounded\b(?!-)/g,
      replacement: `rounded-[var(--radius,0.25rem)]`,
    })
  }

  if (flat['fontFamily.sans']) {
    rewrites.push({
      category: 'font',
      pattern: /\bfont-sans\b/g,
      replacement: `font-[var(--font-sans,${flat['fontFamily.sans'].replace(/\s+/g, '_')})]`,
    })
  }

  return rewrites
}

// Expand a user color target like "indigo" into all known shades of that hue, or pass through
// an explicit "indigo-600".
function normalizeColorTargets(colors) {
  const targets = []
  for (const raw of colors) {
    const color = String(raw).trim()
    if (PALETTE_HEX[color]) {
      targets.push(color)
    } else {
      // A bare hue name: include every shade we know for it.
      const shades = Object.keys(PALETTE_HEX).filter((key) => key.startsWith(`${color}-`))
      targets.push(...shades)
    }
  }
  return targets
}

/**
 * Apply theme rewrites to the component files in `componentDirectory`.
 *
 * @param {object} [options]
 * @param {boolean} [options.dryRun]   compute changes without writing any files
 * @param {string[]} [options.colors]  literal color roots to treat as brand (e.g. ['indigo'])
 * @param {boolean} [options.allColors] variabilize every known palette color (aggressive)
 * @returns {{files: {path:string, changes:number}[], total:number, byCategory:{color:number,radius:number,font:number}, dryRun:boolean}}
 */
export function applyThemeToDirectory(cwd, componentDirectory, tokens, options = {}) {
  const rewrites = buildRewrites(tokens, options)
  const root = path.resolve(cwd, componentDirectory)
  if (!fs.existsSync(root)) {
    throw new Error(`component directory not found: ${componentDirectory}`)
  }
  const files = []
  const byCategory = { color: 0, radius: 0, font: 0 }
  let total = 0
  for (const file of collectComponentFiles(root)) {
    const original = fs.readFileSync(file, 'utf8')
    let updated = original
    let changes = 0
    for (const { pattern, replacement, category } of rewrites) {
      updated = updated.replace(pattern, (...args) => {
        changes += 1
        byCategory[category] += 1
        return typeof replacement === 'function' ? replacement(...args) : replacement
      })
    }
    if (changes > 0 && updated !== original) {
      if (!options.dryRun) {
        fs.writeFileSync(file, updated)
      }
      files.push({ path: path.relative(cwd, file), changes })
      total += changes
    }
  }
  return { files, total, byCategory, dryRun: Boolean(options.dryRun) }
}
