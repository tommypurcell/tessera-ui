// design.md / design.json importer.
//
// When a project already documents its design, we treat that document as authoritative and
// skip the scan+review loop. Supported inputs:
//   - design.json                         → { colors, radius, fontFamily, shadow, spacing }
//   - design.md with a fenced ```json block using the same shape
//   - design.md with a fenced ```css block of custom properties (--color-brand: …)
//   - design.md with a simple Markdown table: | Brand color | #4f46e5 |

import fs from 'node:fs'
import path from 'node:path'

import { emptyTokens, isPlausibleTokenValue, pruneTokens } from './tokens.mjs'

const DEFAULT_CANDIDATES = ['design.json', 'design.md', 'DESIGN.md', 'docs/design.md']

/** Locate a design document in `cwd`, or null. */
export function findDesignDoc(cwd) {
  return (
    DEFAULT_CANDIDATES.map((name) => path.join(cwd, name)).find((candidate) =>
      fs.existsSync(candidate),
    ) ?? null
  )
}

// Map free-form table/CSS labels onto canonical tokens.
const LABEL_MAP = [
  [/brand|primary|accent/i, ['colors', 'brand']],
  [/brand.?(?:fg|foreground|text|on)/i, ['colors', 'brand-fg']],
  [/surface|background|\bbg\b/i, ['colors', 'surface']],
  [/border/i, ['colors', 'border']],
  [/muted|secondary/i, ['colors', 'muted']],
  [/radius|corner|rounded/i, ['radius', 'DEFAULT']],
  [/mono(?:space)?/i, ['fontFamily', 'mono']],
  [/font|typeface|sans/i, ['fontFamily', 'sans']],
  [/shadow|elevation/i, ['shadow', 'DEFAULT']],
]

function assign(tokens, group, name, value) {
  const trimmed = String(value).trim().replace(/^`|`$/g, '')
  if (isPlausibleTokenValue(group, trimmed)) {
    tokens[group][name] = trimmed
    return true
  }
  return false
}

function fromJsonShape(tokens, data) {
  for (const group of ['colors', 'radius', 'fontFamily', 'shadow', 'spacing']) {
    if (data[group] && typeof data[group] === 'object') {
      for (const [name, value] of Object.entries(data[group])) {
        assign(tokens, group, name, value)
      }
    }
  }
}

const CSS_VAR_TO_TOKEN = {
  '--color-brand': ['colors', 'brand'],
  '--color-primary': ['colors', 'brand'],
  '--color-brand-fg': ['colors', 'brand-fg'],
  '--color-surface': ['colors', 'surface'],
  '--color-border': ['colors', 'border'],
  '--radius': ['radius', 'DEFAULT'],
  '--font-sans': ['fontFamily', 'sans'],
  '--font-mono': ['fontFamily', 'mono'],
  '--shadow': ['shadow', 'DEFAULT'],
}

function fromCssBlock(tokens, css) {
  for (const [varName, [group, name]] of Object.entries(CSS_VAR_TO_TOKEN)) {
    const match = css.match(new RegExp(`${varName}\\s*:\\s*([^;\\n]+)`))
    if (match) {
      assign(tokens, group, name, match[1])
    }
  }
}

function fromLabel(tokens, label, value) {
  for (const [pattern, [group, name]] of LABEL_MAP) {
    if (pattern.test(label)) {
      return assign(tokens, group, name, value)
    }
  }
  return false
}

/**
 * Parse a design document's contents into tokens.
 * @param {string} contents
 * @param {string} [ext] file extension hint ('.json' | '.md')
 */
export function parseDesignDoc(contents, ext = '.md') {
  const tokens = emptyTokens()

  if (ext === '.json') {
    fromJsonShape(tokens, JSON.parse(contents))
    return pruneTokens(tokens)
  }

  // Markdown: fenced json wins, then css, then tables.
  const jsonBlock = contents.match(/```json\s*([\s\S]*?)```/i)
  if (jsonBlock) {
    try {
      fromJsonShape(tokens, JSON.parse(jsonBlock[1]))
    } catch {
      /* fall through to other parsers */
    }
  }
  const cssBlock = contents.match(/```css\s*([\s\S]*?)```/i)
  if (cssBlock) {
    fromCssBlock(tokens, cssBlock[1])
  }

  // Markdown tables: | Label | Value | (skip header/separator rows).
  for (const line of contents.split('\n')) {
    const cells = line.split('|').map((cell) => cell.trim())
    if (cells.length >= 4 && cells[0] === '' && cells[cells.length - 1] === '') {
      const [, label, value] = cells
      if (!label || /^-+$/.test(label) || /^label$|^token$/i.test(label)) {
        continue
      }
      fromLabel(tokens, label, value)
    }
  }

  return pruneTokens(tokens)
}

/**
 * Import tokens from a design document on disk.
 * @returns {{tokens:object, source:string}|null}
 */
export function importDesignDoc(filePath) {
  if (!filePath || !fs.existsSync(filePath)) {
    return null
  }
  const contents = fs.readFileSync(filePath, 'utf8')
  const tokens = parseDesignDoc(contents, path.extname(filePath).toLowerCase())
  return { tokens, source: path.basename(filePath) }
}
