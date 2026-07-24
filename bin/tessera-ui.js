#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function fail(message) {
  console.error(`tessera-ui: ${message}`)
  process.exitCode = 1
}

function parseArgs(args) {
  const options = {}
  const positionals = []
  for (let index = 0; index < args.length; index += 1) {
    const value = args[index]
    if (!value.startsWith('--')) {
      positionals.push(value)
      continue
    }
    const [key, inlineValue] = value.slice(2).split('=', 2)
    if (inlineValue !== undefined) {
      options[key] = inlineValue
    } else if (args[index + 1] && !args[index + 1].startsWith('--')) {
      options[key] = args[index + 1]
      index += 1
    } else {
      options[key] = true
    }
  }
  return { options, positionals }
}

function registryRoot(options) {
  const candidates = [
    options.registry,
    process.env.TESSERA_UI_REGISTRY,
    path.join(process.cwd(), 'public', 'registry'),
    path.join(packageRoot, 'public', 'registry'),
  ].filter(Boolean)
  return candidates.find((candidate) => fs.existsSync(path.join(candidate, 'registry.json')))
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function loadIndex(root) {
  if (!root) {
    throw new Error('registry artifacts are missing. Run `pnpm registry:build` or pass --registry <directory>.')
  }
  return readJson(path.join(root, 'registry.json'))
}

function loadComponent(root, id) {
  const filePath = path.join(root, 'components', `${id}.json`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`unknown component '${id}'`)
  }
  return readJson(filePath)
}

function scoreComponent(component, query) {
  const normalized = query.toLowerCase().trim()
  const tokens = normalized.split(/\s+/).filter(Boolean)
  const title = `${component.id} ${component.title}`.toLowerCase()
  const haystack = [component.summary, component.category, ...component.useFor, component.installCommand].join(' ').toLowerCase()
  const intent = component.useFor.join(' ').toLowerCase()
  return tokens.reduce((score, token) => score + (title.includes(token) ? 8 : 0) + (intent.includes(token) ? 4 : 0) + (haystack.includes(token) ? 1 : 0), 0)
}

function commandInit(options) {
  const cwd = path.resolve(options.cwd ?? process.cwd())
  const configPath = path.join(cwd, 'tessera-ui.json')
  if (fs.existsSync(configPath)) {
    throw new Error(`${configPath} already exists; refusing to overwrite it.`)
  }
  const config = {
    schemaVersion: 1,
    componentDirectory: options.directory ?? 'components/ui',
    typescript: options.typescript !== 'false',
    tailwind: options.tailwind !== 'false',
    aliases: { components: options.alias ?? '@/components' },
  }
  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`)
  console.log(`Created ${configPath}`)
}

function commandSearch(root, query, options) {
  if (!query) {
    throw new Error('provide a search query.')
  }
  const index = loadIndex(root)
  const results = index.components
    .map((component) => ({ ...component, score: scoreComponent(component, query) }))
    .filter((component) => component.score > 0)
    .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title))
    .slice(0, Number(options.limit ?? 8))
  if (options.json) {
    return console.log(JSON.stringify(results, null, 2))
  }
  if (!results.length) {
    return console.log('No matching components found.')
  }
  results.forEach((component, indexPosition) => {
    console.log(`${indexPosition + 1}. ${component.id}`)
    console.log(`   ${component.summary}`)
    console.log(`   Why: ${component.useFor[0]}`)
    console.log(`   Install: ${component.installCommand}`)
  })
}

function commandInfo(root, id, options) {
  const component = loadComponent(root, id)
  if (options.json) {
    return console.log(JSON.stringify(component, null, 2))
  }
  console.log(`${component.title} (${component.id})`)
  console.log(component.summary)
  console.log(`\nUse when:\n${component.intent.useFor.map((item) => `- ${item}`).join('\n')}`)
  console.log(`\nAvoid when:\n${component.intent.doNotUseFor.map((item) => `- ${item}`).join('\n')}`)
  console.log(`\nVariants:\n${component.variants.map((variant) => `- ${variant.id}: ${variant.summary}`).join('\n')}`)
  console.log(`\nInstall: ${component.installation.command}`)
}

function buildInstallPlan(root, id, options) {
  const component = loadComponent(root, id)
  const variant = component.variants.find((item) => item.id === options.variant) ?? (component.variants.length === 1 ? component.variants[0] : null)
  if (!variant) {
    throw new Error(`select a variant with --variant. Available: ${component.variants.map((item) => item.id).join(', ')}`)
  }
  const cwd = path.resolve(options.cwd ?? process.cwd())
  const configPath = path.join(cwd, 'tessera-ui.json')
  const config = fs.existsSync(configPath) ? readJson(configPath) : { componentDirectory: 'components/ui' }
  const format = options.format ?? (variant.files.some((file) => file.format === 'tsx') ? 'tsx' : 'html')
  const sourceFile = variant.files.find((file) => file.format === format)
  if (!sourceFile) {
    throw new Error(`${variant.id} does not provide ${format} source.`)
  }
  const destination = path.join(cwd, config.componentDirectory, `${component.id}-${variant.id}.${format}`)
  return { component, variant, sourceFile, sourcePath: path.join(root, sourceFile.path), destination, dependencies: component.dependencies.npm }
}

function commandPlan(root, id, options) {
  const plan = buildInstallPlan(root, id, options)
  const output = { component: plan.component.id, variant: plan.variant.id, source: plan.sourceFile, destination: plan.destination, dependencies: plan.dependencies, warnings: ['Review the source and dependency requirements before production use.'] }
  if (options.json) {
    return console.log(JSON.stringify(output, null, 2))
  }
  console.log(`Install plan for ${output.component}/${output.variant}`)
  console.log(`Copy: ${output.source.path} → ${output.destination}`)
  console.log(`Dependencies: ${output.dependencies.join(', ') || 'none declared'}`)
  console.log(`Run: tessera-ui add ${id} --variant ${plan.variant.id} --yes`)
}

function commandAdd(root, id, options) {
  const plan = buildInstallPlan(root, id, options)
  if (!options.yes) {
    commandPlan(root, id, options)
    return console.log('\nNo files were copied. Re-run with --yes after reviewing the plan.')
  }
  if (fs.existsSync(plan.destination)) {
    throw new Error(`${plan.destination} already exists; refusing to overwrite it.`)
  }
  fs.mkdirSync(path.dirname(plan.destination), { recursive: true })
  fs.copyFileSync(plan.sourcePath, plan.destination)
  console.log(`Installed ${plan.component.id}/${plan.variant.id} to ${plan.destination}`)
  if (plan.dependencies.length) {
    console.log(`Install declared dependencies: ${plan.dependencies.join(', ')}`)
  }
  console.log(`Then run: tessera-ui validate ${plan.component.id} --variant ${plan.variant.id}`)
}

function commandValidate(root, id, options) {
  const plan = buildInstallPlan(root, id, options)
  const checks = [
    { name: 'source artifact', pass: fs.existsSync(plan.sourcePath) },
    { name: 'project configuration', pass: fs.existsSync(path.join(path.resolve(options.cwd ?? process.cwd()), 'tessera-ui.json')) },
    { name: 'installed file', pass: fs.existsSync(plan.destination) },
  ]
  checks.forEach((check) => console.log(`${check.pass ? '✓' : '✗'} ${check.name}`))
  if (checks.some((check) => !check.pass)) {
    process.exitCode = 1
  }
}

const { options, positionals } = parseArgs(process.argv.slice(2))
const [command, id] = positionals
const root = registryRoot(options)

try {
  if (!command || command === 'help' || command === '--help') {
    console.log('Usage: tessera-ui <init|list|search|info|plan|add|validate> [component-id] [options]')
  } else if (command === 'init') {
    commandInit(options)
  } else if (command === 'list') {
    const index = loadIndex(root)
    console.log(index.components.map((component) => `${component.id}\t${component.title}`).join('\n'))
  } else if (command === 'search') {
    commandSearch(root, id, options)
  } else if (command === 'info') {
    commandInfo(root, id, options)
  } else if (command === 'plan') {
    commandPlan(root, id, options)
  } else if (command === 'add') {
    commandAdd(root, id, options)
  } else if (command === 'validate') {
    commandValidate(root, id, options)
  } else {
    throw new Error(`unknown command '${command}'`)
  }
} catch (error) {
  fail(error.message)
}
