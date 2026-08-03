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

/**
 * Build the list of literal→var-backed class rewrites implied by a theme's tokens.
 * Only tokens present in the theme produce rewrites, so an unthemed group is left untouched.
 */
export function buildRewrites(tokens) {
  const flat = flattenTokens(tokens)
  const rewrites = []

  if (flat['colors.brand']) {
    // Any `{prefix}-{brandShade}` for the palette colors becomes brand-var-backed.
    for (const [shadeKey, hex] of Object.entries(PALETTE_HEX)) {
      for (const prefix of [
        'bg',
        'text',
        'border',
        'ring',
        'fill',
        'stroke',
        'from',
        'to',
        'via',
      ]) {
        rewrites.push({
          pattern: new RegExp(`\\b${prefix}-${shadeKey}\\b`, 'g'),
          replacement: `${prefix}-[var(--color-brand,${hex})]`,
        })
      }
    }
  }

  if (flat['radius.DEFAULT']) {
    for (const [key, rem] of Object.entries(RADIUS_REM)) {
      rewrites.push({
        pattern: new RegExp(`\\brounded-${key}\\b`, 'g'),
        replacement: `rounded-[var(--radius,${rem})]`,
      })
    }
    rewrites.push({
      pattern: /\brounded\b(?!-)/g,
      replacement: `rounded-[var(--radius,0.25rem)]`,
    })
  }

  if (flat['fontFamily.sans']) {
    rewrites.push({
      pattern: /\bfont-sans\b/g,
      replacement: `font-[var(--font-sans,${flat['fontFamily.sans'].replace(/\s+/g, '_')})]`,
    })
  }

  return rewrites
}

/**
 * Apply theme rewrites to the component files in `componentDirectory`.
 * @returns {{files: {path:string, changes:number}[], total:number}}
 */
export function applyThemeToDirectory(cwd, componentDirectory, tokens) {
  const rewrites = buildRewrites(tokens)
  const root = path.resolve(cwd, componentDirectory)
  if (!fs.existsSync(root)) {
    throw new Error(`component directory not found: ${componentDirectory}`)
  }
  const files = []
  let total = 0
  for (const file of collectComponentFiles(root)) {
    const original = fs.readFileSync(file, 'utf8')
    let updated = original
    let changes = 0
    for (const { pattern, replacement } of rewrites) {
      updated = updated.replace(pattern, () => {
        changes += 1
        return replacement
      })
    }
    if (changes > 0 && updated !== original) {
      fs.writeFileSync(file, updated)
      files.push({ path: path.relative(cwd, file), changes })
      total += changes
    }
  }
  return { files, total }
}
