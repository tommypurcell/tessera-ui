import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

import { componentRegistrySchema } from '../src/lib/registry-schema.js'

const projectRoot = process.cwd()
const registryRoot = path.join(projectRoot, 'registry', 'components')
const outputRoot = path.join(projectRoot, 'public', 'registry')
const selectedCategories = process.argv.slice(2)
const publicSiteUrl = 'https://www.tessera-ui.com'

const universalProps = [
  {
    name: 'className',
    type: 'string',
    required: false,
    default: 'undefined',
    description: 'Adds classes to the outer container.',
    example: '"my-component"',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: false,
    default: 'original component content',
    description: 'Replaces the default content while preserving the outer container.',
    example: '<CustomContent />',
  },
  {
    name: 'renderContent',
    type: '(defaultContent: ReactNode) => ReactNode',
    required: false,
    default: 'undefined',
    description: 'Transforms or wraps the original content without copying its internal markup.',
    example: '(content) => <section>{content}</section>',
  },
  {
    name: 'before',
    type: 'ReactNode',
    required: false,
    default: 'undefined',
    description: 'Renders immediately before the main content.',
    example: '<Announcement />',
  },
  {
    name: 'after',
    type: 'ReactNode',
    required: false,
    default: 'undefined',
    description: 'Renders immediately after the main content.',
    example: '<FooterNote />',
  },
  {
    name: 'state',
    type: "'default' | 'loading' | 'empty' | 'error'",
    required: false,
    default: "'default'",
    description: 'Selects an explicit application state.',
    example: '"loading"',
  },
  {
    name: 'loadingContent',
    type: 'ReactNode',
    required: false,
    default: 'accessible loading message',
    description: 'Overrides the content shown in the loading state.',
    example: '<Spinner />',
  },
  {
    name: 'emptyContent',
    type: 'ReactNode',
    required: false,
    default: 'empty-state message',
    description: 'Overrides the content shown in the empty state.',
    example: '<EmptyState />',
  },
  {
    name: 'errorContent',
    type: 'ReactNode',
    required: false,
    default: 'accessible error message',
    description: 'Overrides the content shown in the error state.',
    example: '<ErrorState />',
  },
]

const knownSemanticProps = [
  ['messages', 'ChatMessage[]', 'default conversation', 'Conversation messages to render.', 'messages'],
  ['items', 'NavigationItem[]', 'none', 'Navigation items to render.', 'items'],
  ['signals', 'Signal[]', 'default signals', 'Signals displayed by the marquee.', 'signals'],
  ['message', 'string', 'default message', 'Primary transcript message.', 'message'],
  [
    'supportingMessage',
    'string',
    'default supporting message',
    'Secondary transcript message.',
    'supportingMessage',
  ],
  ['brand', 'ReactNode', '"Workspace"', 'Brand content displayed above navigation.', '"Acme"'],
  [
    'searchLabel',
    'string',
    '"Search navigation"',
    'Accessible label for the navigation search field.',
    '"Search projects"',
  ],
  [
    'searchPlaceholder',
    'string',
    '"Search"',
    'Placeholder shown in the navigation search field.',
    '"Find a project"',
  ],
  [
    'navigationLabel',
    'string',
    '"Primary navigation"',
    'Accessible label for the navigation region.',
    '"Workspace navigation"',
  ],
]

function getSelectedCategories() {
  if (selectedCategories.length === 0) {
    return null
  }

  return new Set(selectedCategories)
}

function findRegistryFiles(directoryPath) {
  return fs.readdirSync(directoryPath, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directoryPath, entry.name)
    return entry.isDirectory()
      ? findRegistryFiles(entryPath)
      : entry.name === 'registry.json'
        ? [entryPath]
        : []
  })
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`)
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex')
}

function publicUrl(relativePath) {
  return `/${relativePath.split(path.sep).join('/')}`
}

function screenshotUrl(componentName, variantId) {
  return `${publicSiteUrl}/screenshots/components/${componentName}/${variantId}.jpg`
}

function inferVariantProps(registryDirectory, variant) {
  const source = fs.readFileSync(path.resolve(registryDirectory, variant.source.tsx), 'utf8')

  if (source.includes("export type TesseraComponentState = 'default'")) {
    return universalProps
  }

  const props = []

  if (source.includes('className')) {
    props.push(universalProps[0])
  }
  if (/\bchildren\??\s*[=:]/.test(source)) {
    props.push({
      ...universalProps[1],
      description: 'Supplies or replaces the component content supported by this variant.',
    })
  }

  for (const [name, type, defaultValue, description, example] of knownSemanticProps) {
    if (new RegExp(`\\b${name}\\??\\s*[:},]`).test(source)) {
      props.push({
        name,
        type,
        required: name === 'items' && !source.includes('items?'),
        default: defaultValue,
        description,
        example,
      })
    }
  }

  if (source.includes('HTMLAttributes<')) {
    props.push({
      name: 'htmlAttributes',
      type: 'HTMLAttributes<HTMLElement>',
      required: false,
      default: 'undefined',
      description: 'Standard attributes and event handlers accepted by the rendered root element.',
      example: '{ "aria-label": "Example" }',
    })
  }

  return props
}

function buildSourceArtifact(registryDirectory, componentName, variant) {
  const files = []

  for (const [format, sourcePath] of Object.entries(variant.source)) {
    const absoluteSourcePath = path.resolve(registryDirectory, sourcePath)
    const content = fs.readFileSync(absoluteSourcePath, 'utf8')
    const filename = `${variant.id}.${format}`
    const relativePath = path.join('registry', 'files', componentName, filename)
    const outputPath = path.join(projectRoot, 'public', relativePath)

    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, content)
    files.push({
      format,
      path: relativePath.replace(/^registry\//, ''),
      url: publicUrl(relativePath),
      sha256: sha256(content),
    })
  }

  return files
}

function toManifest(registryEntry, registryDirectory) {
  const variantFiles = registryEntry.variants.map((variant) => {
    const props = inferVariantProps(registryDirectory, variant)
    const supportsApplicationStates = props.some((prop) => prop.name === 'state')

    return {
      id: variant.id,
      title: variant.title,
      summary: variant.description,
      appearance: variant.appearance,
      states: supportsApplicationStates
        ? [...new Set([...variant.states, 'loading', 'empty', 'error'])]
        : variant.states,
      accessibility: variant.accessibility,
      props,
      screenshotUrl: screenshotUrl(registryEntry.name, variant.id),
      files: buildSourceArtifact(registryDirectory, registryEntry.name, variant),
    }
  })
  const files = variantFiles.flatMap((variant) =>
    variant.files.map((file) => ({ ...file, variant: variant.id })),
  )
  const states = [...new Set(variantFiles.flatMap((variant) => variant.states))]
  const collectionProps = new Map()

  for (const variant of variantFiles) {
    for (const prop of variant.props) {
      const existing = collectionProps.get(prop.name)

      if (existing) {
        existing.variants.push(variant.id)
      } else {
        collectionProps.set(prop.name, { ...prop, variants: [variant.id] })
      }
    }
  }

  return {
    $schema: '/registry/schema/component-v1.json',
    id: registryEntry.name,
    version: '1.0.0',
    title: registryEntry.title,
    summary: registryEntry.description,
    category: registryEntry.category,
    intent: {
      useFor: registryEntry.useWhen,
      doNotUseFor: registryEntry.avoidWhen,
    },
    requirements: {
      frameworks: registryEntry.frameworks,
      styling: registryEntry.styling,
      clientComponent: registryEntry.frameworks.includes('react'),
    },
    inputs: {
      props: [...collectionProps.values()],
      note: 'Each prop lists the variants that support it. Omitting optional props preserves the original component UI.',
    },
    behavior: {
      states,
      responsive: registryEntry.responsiveBehavior,
    },
    accessibility: {
      requirements: registryEntry.accessibility,
    },
    dependencies: {
      npm: registryEntry.dependencies,
      components: registryEntry.compatibleWith,
      conflicts: [],
    },
    variants: variantFiles,
    files,
    installation: {
      command: `npx tessera-ui add ${registryEntry.name}`,
      requiresVariantSelection: variantFiles.length > 1,
      steps: ['Select a source variant.', 'Copy source files into the configured component directory.', 'Install declared dependencies.', 'Run component validation.'],
    },
    validation: {
      command: `npx tessera-ui validate ${registryEntry.name}`,
      checks: ['source-files', 'destination-conflicts', 'dependencies', 'project-configuration'],
    },
    examples: variantFiles.map((variant) => ({
      name: variant.id,
      title: variant.title,
      sourceFiles: variant.files,
    })),
    provenance: registryEntry.source ?? {
      license: 'Project source',
      notice: 'Original component source is retained in this repository.',
    },
  }
}

function componentSchema() {
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: '/registry/schema/component-v1.json',
    title: 'Tessera UI Component Manifest',
    type: 'object',
    required: [
      'id',
      'version',
      'summary',
      'intent',
      'requirements',
      'inputs',
      'dependencies',
      'variants',
      'files',
      'installation',
      'validation',
    ],
    properties: {
      id: { type: 'string', pattern: '^[a-z0-9-]+$' },
      version: { type: 'string' },
      summary: { type: 'string' },
      intent: { type: 'object', required: ['useFor', 'doNotUseFor'] },
      requirements: { type: 'object', required: ['frameworks', 'styling'] },
      inputs: {
        type: 'object',
        required: ['props', 'note'],
        properties: {
          props: {
            type: 'array',
            items: {
              type: 'object',
              required: [
                'name',
                'type',
                'required',
                'default',
                'description',
                'example',
                'variants',
              ],
            },
          },
          note: { type: 'string' },
        },
      },
      dependencies: { type: 'object', required: ['npm', 'components', 'conflicts'] },
      variants: {
        type: 'array',
        minItems: 1,
        items: { type: 'object', required: ['id', 'props', 'files'] },
      },
      files: { type: 'array', minItems: 1 },
      installation: { type: 'object', required: ['command', 'steps'] },
      validation: { type: 'object', required: ['command', 'checks'] },
    },
  }
}

function buildInstructionFiles(manifests) {
  const index = manifests.map(
    ({ id, title, summary, category, intent, installation, variants }) => ({
      id,
      title,
      summary,
      category,
      useFor: intent.useFor,
      installCommand: installation.command,
      screenshotUrl: variants[0]?.screenshotUrl,
    }),
  )
  const shortInstructions = [
    '# Tessera UI',
    '',
    'Use the machine-readable registry instead of scraping the website.',
    '',
    '- Registry index: `/registry.json`',
    '- Component manifest: `/registry/components/{component-id}.json`',
    '- Source files: URLs listed in each manifest `files` field',
    '- Search locally: `npx tessera-ui search "your intent"`',
    '- Inspect: `npx tessera-ui info {component-id}`',
    '- Install: `npx tessera-ui add {component-id} --variant {variant-id} --yes`',
    '- Validate: `npx tessera-ui validate {component-id}`',
    '',
    `The registry currently contains ${manifests.length} component collections.`,
  ].join('\n')
  const fullInstructions = [
    shortInstructions,
    '',
    '## Decision policy',
    '',
    '1. Search by user intent, page type, responsive need, and accessibility requirement.',
    '2. Read the selected manifest before installation: especially `intent`, `dependencies`, `behavior`, and `accessibility`.',
    '3. Select an explicit variant when a component has multiple options.',
    '4. Run the install plan before writing files; do not overwrite a destination file automatically.',
    '5. Run validation after installation and resolve every reported requirement.',
    '',
    '## Current source model',
    '',
    'HTML source remains canonical for the original catalog. TSX files are supplied where available; a manifest explicitly reports source formats and dependencies so an agent never needs to guess.',
  ].join('\n')

  const indexManifest = {
    schemaVersion: 1,
    componentCount: manifests.length,
    components: index,
  }
  writeJson(path.join(outputRoot, 'registry.json'), indexManifest)
  writeJson(path.join(projectRoot, 'public', 'registry.json'), indexManifest)
  writeJson(path.join(projectRoot, 'public', '.well-known', 'tessera-ui.json'), {
    schemaVersion: 1,
    registry: '/registry.json',
    componentManifest: '/registry/components/{component-id}.json',
    componentSchema: '/registry/schema/component-v1.json',
    instructions: '/agent-instructions.md',
  })
  fs.writeFileSync(path.join(projectRoot, 'public', 'llms.txt'), `${shortInstructions}\n`)
  fs.writeFileSync(path.join(projectRoot, 'public', 'llms-full.txt'), `${fullInstructions}\n`)
  fs.writeFileSync(path.join(projectRoot, 'public', 'agent-instructions.md'), `${fullInstructions}\n`)
}

const categoryFilter = getSelectedCategories()
const registryFiles = findRegistryFiles(registryRoot).filter((registryFilePath) => {
  if (!categoryFilter) {
    return true
  }

  const relativeSegments = path.relative(registryRoot, registryFilePath).split(path.sep)
  return categoryFilter.has(relativeSegments[0])
})

// Validate every input before replacing the last complete generated registry.
for (const registryFilePath of registryFiles) {
  const registryDirectory = path.dirname(registryFilePath)
  const parsedRegistry = componentRegistrySchema.parse(JSON.parse(fs.readFileSync(registryFilePath, 'utf8')))
  for (const variant of parsedRegistry.variants) {
    for (const sourcePath of Object.values(variant.source)) {
      const absoluteSourcePath = path.resolve(registryDirectory, sourcePath)
      if (!fs.existsSync(absoluteSourcePath)) {
        throw new Error(`Missing source file for ${parsedRegistry.name}: ${sourcePath}`)
      }
    }
  }
}

if (!categoryFilter) {
  fs.rmSync(outputRoot, { recursive: true, force: true })
}

const manifests = registryFiles.map((registryFilePath) => {
  const registryDirectory = path.dirname(registryFilePath)
  const parsedRegistry = componentRegistrySchema.parse(
    JSON.parse(fs.readFileSync(registryFilePath, 'utf8')),
  )
  const manifest = toManifest(parsedRegistry, registryDirectory)
  writeJson(path.join(outputRoot, 'components', `${manifest.id}.json`), manifest)
  writeJson(path.join(outputRoot, `${manifest.id}.json`), manifest)
  return manifest
})

writeJson(path.join(outputRoot, 'schema', 'component-v1.json'), componentSchema())

if (!categoryFilter) {
  buildInstructionFiles(manifests)
}

console.log(`Built ${manifests.length} agent registry manifests.`)
