import fs from 'node:fs'
import path from 'node:path'

import { getCollection, getCollectionNames } from '../src/lib/content.js'

const registryRoot = path.join(process.cwd(), 'registry', 'components')
const examplesRoot = path.join(process.cwd(), 'public', 'examples')
const selectedCategories = process.argv.slice(2)

function getSelectedCategories() {
  if (selectedCategories.length === 0) {
    return getCollectionNames()
  }

  const validCategories = getCollectionNames()
  const invalidCategories = selectedCategories.filter((category) => !validCategories.includes(category))

  if (invalidCategories.length > 0) {
    throw new Error(`Unknown categories: ${invalidCategories.join(', ')}`)
  }

  return selectedCategories
}

function toPascalCase(value) {
  return value
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, character) => character.toUpperCase())
    .replace(/^[a-z]/, (character) => character.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '')
}

function toCamelCase(value) {
  return value.replace(/-([a-z])/g, (_, character) => character.toUpperCase())
}

function convertInlineStyle(styleText) {
  const styleProperties = styleText
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .map((declaration) => {
      const [propertyName, ...valueParts] = declaration.split(':')
      return `${toCamelCase(propertyName.trim())}: '${valueParts.join(':').trim()}'`
    })

  return `{${styleProperties.join(', ')}}`
}

function convertHtmlToTsxMarkup(htmlMarkup) {
  return htmlMarkup
    .replace(/^[\s\S]*?<body[^>]*>/i, '')
    .replace(/<\/body>[\s\S]*$/i, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/\btabindex=/gi, 'tabIndex=')
    .replace(/\btabIndex="(-?\d+)"/g, 'tabIndex={$1}')
    .replace(/\bdatetime=/gi, 'dateTime=')
    .replace(/\bcolspan=/gi, 'colSpan=')
    .replace(/\browspan=/gi, 'rowSpan=')
    .replace(/\bstroke-width=/g, 'strokeWidth=')
    .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
    .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/\bfill-rule=/g, 'fillRule=')
    .replace(/\bclip-rule=/g, 'clipRule=')
    .replace(/\baria-value(now|min|max)="(\d+)"/g, 'aria-value$1={$2}')
    .replace(/\b(rows|cols|size|span|start)="(\d+)"/g, '$1={$2}')
    .replace(/\b(colSpan|rowSpan)="(\d+)"/g, '$1={$2}')
    .replace(/<datalist\s+name="[^"]*"/gi, '<datalist')
    .replace(/\bstyle="([^"]*)"/g, (_, styleText) => `style={${convertInlineStyle(styleText)}}`)
    .replace(
      /<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)([^>]*?)(?<!\/)>/gi,
      '<$1$2 />',
    )
    .trim()
}

function indentMarkup(markup) {
  return markup
    .split('\n')
    .map((line) => `      ${line}`)
    .join('\n')
}

function createTsxSource(componentName, markup, usesNativeDetails) {
  const interactionNote = usesNativeDetails
    ? 'Native details and summary elements preserve keyboard and disclosure behavior.'
    : 'Copy-and-own Tailwind component with content slots and explicit application states.'

  return `import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ${componentName}Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Replaces the component's default content while preserving its outer container. */
  children?: ReactNode
  /** Transforms the default content without copying the component's internal markup. */
  renderContent?: (defaultContent: ReactNode) => ReactNode
  /** Renders immediately before the main content. */
  before?: ReactNode
  /** Renders immediately after the main content. */
  after?: ReactNode
  /** Selects an application state. The default state preserves the original component UI. */
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

/**
 * ${interactionNote}
 * Omitting the optional props preserves the original markup and visual design.
 */
export function ${componentName}({
  className,
  children,
  renderContent,
  before,
  after,
  state = 'default',
  loadingContent,
  emptyContent,
  errorContent,
  ...props
}: ${componentName}Props) {
  const defaultContent = (
    <>
${indentMarkup(markup)}
    </>
  )
  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? <span role="status">Loading…</span>)
      : state === 'empty'
        ? (emptyContent ?? <span>No content available.</span>)
        : state === 'error'
          ? (errorContent ?? <span role="alert">Something went wrong.</span>)
          : renderContent
            ? renderContent(defaultContent)
            : defaultContent)

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
`
}

function getVariantAccessibility(markup, usesNativeDetails) {
  const accessibilityNotes = []

  if (usesNativeDetails) {
    accessibilityNotes.push(
      'Native details and summary elements provide keyboard-accessible disclosure behavior.',
    )
  }
  if (markup.includes('<img')) {
    accessibilityNotes.push(
      'Provide meaningful alternative text for informative images and empty alt text for decorative images.',
    )
  }
  if (markup.includes('<input') || markup.includes('<select') || markup.includes('<textarea')) {
    accessibilityNotes.push(
      'Associate each form field with a visible or programmatic label before production use.',
    )
  }
  if (accessibilityNotes.length === 0) {
    accessibilityNotes.push(
      'Keep semantic HTML structure and visible text labels when adapting this component.',
    )
  }

  return accessibilityNotes
}

function getPatternAccessibility(variants) {
  return [
    ...new Set([
      ...variants.flatMap(({ accessibility }) => accessibility),
      'Preserve the component’s semantic HTML when adapting its visual treatment.',
      'Do not use color, iconography, or position as the only way to communicate meaning or state.',
    ]),
  ].slice(0, 3)
}

function getDependencies(componentData, exampleMarkup) {
  const declaredPlugins = componentData.components.flatMap(({ plugins = [] }) => plugins)
  const detectedDependencies = exampleMarkup.includes('chart.js') ? ['chart.js'] : []
  return [...new Set([...declaredPlugins, ...detectedDependencies])]
}

function buildRegistryEntry(category, componentData) {
  const registryDirectory = path.join(registryRoot, category, componentData.slug)
  const registryFilePath = path.join(registryDirectory, 'registry.json')

  if (category === 'application' && componentData.slug === 'accordions') {
    return false
  }

  const variants = componentData.components.flatMap((componentVariant, variantIndex) => {
    const sourceIndex = variantIndex + 1
    const variantDefinitions = [
      { isDark: false, suffix: '', appearance: 'light' },
      ...(componentVariant.dark ? [{ isDark: true, suffix: '-dark', appearance: 'dark' }] : []),
    ]

    return variantDefinitions.map(({ isDark, suffix, appearance }) => {
      const sourceFilename = `${sourceIndex}${suffix}.html`
      const sourcePath = path.join(examplesRoot, category, componentData.slug, sourceFilename)
      const htmlMarkup = fs.readFileSync(sourcePath, 'utf8')
      const tsxMarkup = convertHtmlToTsxMarkup(htmlMarkup)
      const usesNativeDetails = tsxMarkup.includes('<details')
      const componentName = toPascalCase(`${componentData.slug}-variant-${sourceIndex}${suffix}`)
      const tsxFilename = `${componentName}.tsx`
      const tsxDirectory = path.join(registryDirectory, 'tsx')

      fs.mkdirSync(tsxDirectory, { recursive: true })
      fs.writeFileSync(
        path.join(tsxDirectory, tsxFilename),
        createTsxSource(componentName, tsxMarkup, usesNativeDetails),
      )

      return {
        id: `${componentData.slug}-${sourceIndex}${suffix}`,
        title: `${componentVariant.title}${isDark ? ' (Dark)' : ''}`,
        description:
          componentVariant.description ?? `${componentVariant.title} ${componentData.description}`,
        source: {
          html: `../../../../public/examples/${category}/${componentData.slug}/${sourceFilename}`,
          tsx: `tsx/${tsxFilename}`,
        },
        appearance,
        states: usesNativeDetails ? ['collapsed', 'expanded'] : ['default'],
        accessibility: getVariantAccessibility(tsxMarkup, usesNativeDetails),
      }
    })
  })

  const firstExampleMarkup = fs.readFileSync(
    path.join(examplesRoot, category, componentData.slug, '1.html'),
    'utf8',
  )
  const registryEntry = {
    schemaVersion: 1,
    name: `${category}-${componentData.slug}`,
    title: componentData.title,
    description: componentData.description,
    category: `${category}/${componentData.slug}`,
    frameworks: ['html', 'react'],
    styling: 'tailwind',
    tags: [...new Set([category, componentData.slug, ...componentData.terms])],
    useWhen: [componentData.description],
    avoidWhen: [
      `Avoid ${componentData.title.toLowerCase()} when a simpler pattern communicates the same content or action.`,
    ],
    dependencies: getDependencies(componentData, firstExampleMarkup),
    responsiveBehavior: `${componentData.title} uses responsive Tailwind utilities where present. Test its layout and interaction states at mobile, tablet, and desktop widths before shipping.`,
    accessibility: getPatternAccessibility(variants),
    compatibleWith: [],
    variants,
  }

  fs.mkdirSync(registryDirectory, { recursive: true })
  fs.writeFileSync(registryFilePath, `${JSON.stringify(registryEntry, null, 2)}\n`)
  return true
}

let createdCount = 0
const categories = getSelectedCategories()

for (const category of categories) {
  for (const componentData of getCollection(category)) {
    if (buildRegistryEntry(category, componentData)) {
      createdCount += 1
    }
  }
}

console.log(`Created ${createdCount} registry entries across ${categories.length} categories.`)
