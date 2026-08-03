// Shared token vocabulary for the Tessera UI theme system.
//
// Tokens are grouped by kind. The scanner, the design.md importer, and the CLI all speak
// this shape so they can be merged and compared without special-casing each source.

/**
 * The canonical CSS variables that themeable components read. `eject` renders these into
 * a `@theme` block; components reference them with fallbacks so untouched source still
 * renders today's defaults, e.g. `bg-[var(--color-brand,#4f46e5)]`.
 */
export const cssVariableMap = {
  'colors.brand': '--color-brand',
  'colors.brand-fg': '--color-brand-fg',
  'colors.surface': '--color-surface',
  'colors.surface-fg': '--color-surface-fg',
  'colors.muted': '--color-muted',
  'colors.border': '--color-border',
  'radius.DEFAULT': '--radius',
  'radius.sm': '--radius-sm',
  'radius.lg': '--radius-lg',
  'fontFamily.sans': '--font-sans',
  'fontFamily.mono': '--font-mono',
  'shadow.DEFAULT': '--shadow',
}

export const tokenGroups = ['colors', 'radius', 'fontFamily', 'shadow', 'spacing']

/** An empty token document. */
export function emptyTokens() {
  return { colors: {}, radius: {}, fontFamily: {}, shadow: {}, spacing: {} }
}

/**
 * Merge token documents left-to-right; later sources win per individual token (not per
 * group), so a Tailwind config brand color survives even if a lower-priority source only
 * contributes a radius.
 */
export function mergeTokens(...documents) {
  const merged = emptyTokens()
  for (const document of documents) {
    if (!document) {
      continue
    }
    for (const group of tokenGroups) {
      Object.assign(merged[group], document[group] ?? {})
    }
  }
  return merged
}

/** Drop empty groups so serialized output stays tidy. */
export function pruneTokens(tokens) {
  const pruned = {}
  for (const group of tokenGroups) {
    if (tokens[group] && Object.keys(tokens[group]).length > 0) {
      pruned[group] = tokens[group]
    }
  }
  return pruned
}

/** Flatten `{colors:{brand:"#..."}}` into `{"colors.brand":"#..."}` for evidence keying. */
export function flattenTokens(tokens) {
  const flat = {}
  for (const group of tokenGroups) {
    for (const [name, value] of Object.entries(tokens[group] ?? {})) {
      flat[`${group}.${name}`] = value
    }
  }
  return flat
}

const HEX = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i
const LENGTH = /^-?[\d.]+(?:px|rem|em|%|vh|vw)$/i

/** Accept only values that look like the kind of token their group expects. */
export function isPlausibleTokenValue(group, value) {
  if (typeof value !== 'string' || value.trim() === '') {
    return false
  }
  const trimmed = value.trim()
  switch (group) {
    case 'colors':
      return (
        HEX.test(trimmed) ||
        /^(rgb|rgba|hsl|hsla|oklch|color)\(/i.test(trimmed) ||
        /^var\(--/.test(trimmed)
      )
    case 'radius':
    case 'spacing':
      return LENGTH.test(trimmed) || trimmed === '0' || /^var\(--/.test(trimmed)
    case 'fontFamily':
      return /[a-z]/i.test(trimmed)
    case 'shadow':
      return /\d/.test(trimmed) || trimmed === 'none'
    default:
      return false
  }
}
