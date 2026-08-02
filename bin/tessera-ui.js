#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import readline from 'node:readline/promises'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'))
const configFilename = 'tessera-ui.json'
const publicSiteUrl = 'https://www.tessera-ui.com'

function screenshotUrl(componentId, variantId) {
  return `${publicSiteUrl}/screenshots/components/${componentId}/${variantId}.jpg`
}

function componentWithScreenshots(component) {
  return {
    ...component,
    variants: component.variants.map((variant) => ({
      ...variant,
      screenshotUrl: variant.screenshotUrl ?? screenshotUrl(component.id, variant.id),
    })),
  }
}

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

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function projectContext(options) {
  const cwd = path.resolve(options.cwd ?? process.cwd())
  const configPath = path.join(cwd, configFilename)
  const config = fs.existsSync(configPath) ? readJson(configPath) : null
  return { cwd, configPath, config }
}

function localRegistryRoot(options, cwd) {
  const candidates = [
    options.registry,
    process.env.TESSERA_UI_REGISTRY,
    path.join(cwd, 'public', 'registry'),
    path.join(packageRoot, 'public', 'registry'),
  ].filter((candidate) => candidate && !/^https?:\/\//i.test(candidate))
  return candidates
    .map((candidate) => path.resolve(candidate))
    .find((candidate) => fs.existsSync(path.join(candidate, 'registry.json')))
}

function registryUrl(options, config) {
  const candidate =
    options['registry-url'] ??
    (/^https?:\/\//i.test(options.registry ?? '') ? options.registry : null) ??
    process.env.TESSERA_UI_REGISTRY_URL ??
    config?.registryUrl
  return candidate ? candidate.replace(/\/$/, '') : null
}

async function fetchResponse(url) {
  let response
  try {
    response = await fetch(url, { headers: { 'user-agent': `tessera-ui/${packageJson.version}` } })
  } catch (error) {
    throw new Error(`could not reach ${url}: ${error.message}`, { cause: error })
  }
  if (!response.ok) {
    throw new Error(`request failed (${response.status}) for ${url}`)
  }
  return response
}

function registryClient(options) {
  const { cwd, config } = projectContext(options)
  const baseUrl = registryUrl(options, config)
  if (baseUrl) {
    return {
      source: baseUrl,
      async index() {
        return (await fetchResponse(`${baseUrl}/registry.json`)).json()
      },
      async component(id) {
        return (await fetchResponse(`${baseUrl}/components/${encodeURIComponent(id)}.json`)).json()
      },
      async file(relativePath) {
        if (relativePath.startsWith('/') || relativePath.split('/').includes('..')) {
          throw new Error(`unsafe registry file path '${relativePath}'`)
        }
        return Buffer.from(await (await fetchResponse(`${baseUrl}/${relativePath}`)).arrayBuffer())
      },
    }
  }

  const root = localRegistryRoot(options, cwd)
  if (!root) {
    throw new Error(
      'registry artifacts are missing. Reinstall the package, set registryUrl in tessera-ui.json, or pass --registry-url <url>.',
    )
  }
  return {
    source: root,
    async index() {
      return readJson(path.join(root, 'registry.json'))
    },
    async component(id) {
      const filePath = path.join(root, 'components', `${id}.json`)
      if (!fs.existsSync(filePath)) {
        throw new Error(`unknown component '${id}'`)
      }
      return readJson(filePath)
    },
    async file(relativePath) {
      const absolutePath = path.resolve(root, relativePath)
      if (!absolutePath.startsWith(`${root}${path.sep}`) || !fs.existsSync(absolutePath)) {
        throw new Error(`registry source is missing or unsafe: ${relativePath}`)
      }
      return fs.readFileSync(absolutePath)
    },
  }
}

function scoreComponent(component, query) {
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  const title = `${component.id} ${component.title}`.toLowerCase()
  const intent = component.useFor.join(' ').toLowerCase()
  const haystack = [component.summary, component.category, intent].join(' ').toLowerCase()
  return tokens.reduce(
    (score, token) =>
      score +
      (title.includes(token) ? 8 : 0) +
      (intent.includes(token) ? 4 : 0) +
      (haystack.includes(token) ? 1 : 0),
    0,
  )
}

async function ask(question) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return false
  }
  const terminal = readline.createInterface({ input: process.stdin, output: process.stdout })
  const answer = await terminal.question(question)
  terminal.close()
  return /^y(es)?$/i.test(answer.trim())
}

async function chooseVariant(component, requestedVariant) {
  const selected = component.variants.find((item) => item.id === requestedVariant)
  if (requestedVariant && !selected) {
    throw new Error(
      `unknown variant '${requestedVariant}'. Available: ${component.variants.map((item) => item.id).join(', ')}`,
    )
  }
  if (selected || component.variants.length === 1) {
    return selected ?? component.variants[0]
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error(
      `select a variant with --variant. Available: ${component.variants.map((item) => item.id).join(', ')}`,
    )
  }
  console.log('Available variants:')
  component.variants.forEach((item, index) =>
    console.log(`  ${index + 1}. ${item.id} — ${item.summary}`),
  )
  const terminal = readline.createInterface({ input: process.stdin, output: process.stdout })
  const answer = await terminal.question('Select a variant number: ')
  terminal.close()
  const variant = component.variants[Number(answer) - 1]
  if (!variant) {
    throw new Error('invalid variant selection')
  }
  return variant
}

function safeDestination(cwd, directory, filename) {
  const destinationRoot = path.resolve(cwd, directory)
  const destination = path.resolve(destinationRoot, filename)
  if (destination !== destinationRoot && !destination.startsWith(`${destinationRoot}${path.sep}`)) {
    throw new Error(`unsafe destination path '${destination}'`)
  }
  return destination
}

function npmDependencies(component) {
  return component.dependencies.npm.filter(
    (dependency) => dependency && !/^no\s|^none\.?$/i.test(dependency),
  )
}

function packageManager(cwd, requested) {
  if (requested) {
    return requested
  }
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
    return 'pnpm'
  }
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) {
    return 'yarn'
  }
  if (fs.existsSync(path.join(cwd, 'bun.lock')) || fs.existsSync(path.join(cwd, 'bun.lockb'))) {
    return 'bun'
  }
  return 'npm'
}

function installDependencies(cwd, dependencies, options) {
  if (!dependencies.length || options['skip-deps']) {
    return
  }
  const manager = packageManager(cwd, options['package-manager'])
  if (!['npm', 'pnpm', 'yarn', 'bun'].includes(manager)) {
    throw new Error(`unsupported package manager '${manager}'`)
  }
  const args = manager === 'npm' ? ['install', ...dependencies] : ['add', ...dependencies]
  console.log(`Installing dependencies with ${manager}: ${dependencies.join(', ')}`)
  const result = spawnSync(manager, args, { cwd, stdio: 'inherit' })
  if (result.error) {
    throw new Error(`could not run ${manager}: ${result.error.message}`)
  }
  if (result.status !== 0) {
    throw new Error(`${manager} exited with status ${result.status}`)
  }
}

function commandInit(options) {
  const { configPath } = projectContext(options)
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
  if (options['registry-url']) {
    config.registryUrl = options['registry-url'].replace(/\/$/, '')
  }
  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`)
  console.log(`Created ${configPath}`)
}

async function commandSearch(client, query, options) {
  if (!query) {
    throw new Error('provide a search query.')
  }
  const index = await client.index()
  const limit = Number(options.limit ?? 8)
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error('--limit must be a positive integer')
  }
  const results = index.components
    .map((component) => ({ ...component, score: scoreComponent(component, query) }))
    .filter((component) => component.score > 0)
    .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title))
    .slice(0, limit)
  if (options.json) {
    return console.log(JSON.stringify(results, null, 2))
  }
  if (!results.length) {
    return console.log('No matching components found.')
  }
  results.forEach((component, indexPosition) => {
    console.log(`${indexPosition + 1}. ${component.id}`)
    console.log(`   ${component.summary}`)
    if (component.screenshotUrl) {
      console.log(`   Preview: ${component.screenshotUrl}`)
    }
    console.log(`   Install: npx tessera-ui@latest add ${component.id}`)
  })
}

async function commandInfo(client, id, options) {
  if (!id) {
    throw new Error('provide a component id.')
  }
  const component = componentWithScreenshots(await client.component(id))
  if (options.json) {
    return console.log(JSON.stringify(component, null, 2))
  }
  console.log(`${component.title} (${component.id})`)
  console.log(component.summary)
  console.log(`\nUse when:\n${component.intent.useFor.map((item) => `- ${item}`).join('\n')}`)
  console.log(
    `\nAvoid when:\n${component.intent.doNotUseFor.map((item) => `- ${item}`).join('\n')}`,
  )
  console.log(
    `\nVariants:\n${component.variants
      .map((variant) => `- ${variant.id}: ${variant.summary}\n  Preview: ${variant.screenshotUrl}`)
      .join('\n')}`,
  )
}

async function commandPreview(client, id, options) {
  if (!id) {
    throw new Error('provide a component id.')
  }
  const component = componentWithScreenshots(await client.component(id))
  const variant = await chooseVariant(component, options.variant)
  if (options.json) {
    return console.log(
      JSON.stringify(
        { component: component.id, variant: variant.id, screenshotUrl: variant.screenshotUrl },
        null,
        2,
      ),
    )
  }
  console.log(variant.screenshotUrl)
}

async function buildInstallPlan(client, id, options) {
  if (!id) {
    throw new Error('provide a component id.')
  }
  const component = componentWithScreenshots(await client.component(id))
  const variant = await chooseVariant(component, options.variant)
  const { cwd, config } = projectContext(options)
  const format =
    options.format ??
    (config?.typescript === false
      ? 'html'
      : variant.files.some((file) => file.format === 'tsx')
        ? 'tsx'
        : 'html')
  if (!['tsx', 'html'].includes(format)) {
    throw new Error('--format must be tsx or html')
  }
  const sourceFiles = variant.files.filter((file) => file.format === format)
  if (!sourceFiles.length) {
    throw new Error(`${variant.id} does not provide ${format} source.`)
  }
  const componentDirectory = options.directory ?? config?.componentDirectory ?? 'components/ui'
  const files = sourceFiles.map((sourceFile) => ({
    sourceFile,
    destination: safeDestination(cwd, componentDirectory, path.basename(sourceFile.path)),
  }))
  return { cwd, component, variant, files, dependencies: npmDependencies(component) }
}

function printPlan(plan) {
  console.log(`Install plan for ${plan.component.id}/${plan.variant.id}`)
  console.log(`Preview: ${plan.variant.screenshotUrl}`)
  plan.files.forEach(({ sourceFile, destination }) =>
    console.log(`Copy: ${sourceFile.path} → ${destination}`),
  )
  console.log(`Dependencies: ${plan.dependencies.join(', ') || 'none'}`)
}

async function commandPlan(client, id, options) {
  const plan = await buildInstallPlan(client, id, options)
  if (options.json) {
    return console.log(
      JSON.stringify(
        {
          component: plan.component.id,
          variant: plan.variant.id,
          screenshotUrl: plan.variant.screenshotUrl,
          files: plan.files.map(({ sourceFile, destination }) => ({
            source: sourceFile,
            destination,
          })),
          dependencies: plan.dependencies,
        },
        null,
        2,
      ),
    )
  }
  printPlan(plan)
}

async function commandAdd(client, id, options) {
  const plan = await buildInstallPlan(client, id, options)
  printPlan(plan)
  if (options['dry-run']) {
    return console.log('\nDry run complete. No files were written.')
  }
  if (!options.yes && !(await ask('\nInstall this component? (y/N) '))) {
    return console.log('\nNo files were written. Re-run with --yes to skip confirmation.')
  }
  for (const { destination } of plan.files) {
    if (fs.existsSync(destination) && !options.overwrite) {
      throw new Error(`${destination} already exists; use --overwrite to replace it.`)
    }
  }
  const downloaded = []
  for (const file of plan.files) {
    const content = await client.file(file.sourceFile.path)
    const actualHash = crypto.createHash('sha256').update(content).digest('hex')
    if (file.sourceFile.sha256 && actualHash !== file.sourceFile.sha256) {
      throw new Error(`checksum mismatch for ${file.sourceFile.path}`)
    }
    downloaded.push({ ...file, content })
  }
  for (const { destination, content } of downloaded) {
    fs.mkdirSync(path.dirname(destination), { recursive: true })
    fs.writeFileSync(destination, content)
    console.log(`Installed ${path.relative(plan.cwd, destination)}`)
  }
  installDependencies(plan.cwd, plan.dependencies, options)
  console.log(`Done. The component source is yours to edit.`)
}

async function commandValidate(client, id, options) {
  const plan = await buildInstallPlan(client, id, options)
  const checks = plan.files.map(({ destination }) => ({
    name: `installed file ${path.relative(plan.cwd, destination)}`,
    pass: fs.existsSync(destination),
  }))
  checks.forEach((check) => console.log(`${check.pass ? '✓' : '✗'} ${check.name}`))
  if (checks.some((check) => !check.pass)) {
    process.exitCode = 1
  }
}

function help() {
  console.log(`Tessera UI ${packageJson.version}

Usage: tessera-ui <command> [component-id] [options]

Commands:
  init                 Create tessera-ui.json
  list                 List available components
  search <query>       Search components by intent
  info <id>            Inspect a component and its variants
  preview <id>         Get the screenshot for a component variant
  plan <id>            Preview files and dependencies
  add <id>             Download component source into your project
  validate <id>        Check that a selected component is installed

Options:
  --variant <id>       Select a component variant
  --format <tsx|html>  Select the source format
  --directory <path>   Override the configured component directory
  --registry-url <url> Download from a hosted registry
  --yes                Skip installation confirmation
  --dry-run            Print the plan without writing files
  --overwrite          Replace existing component files
  --skip-deps          Do not install npm dependencies
  --package-manager    Select npm, pnpm, yarn, or bun
  --json               Print machine-readable output where supported
  --version            Print the installed CLI version`)
}

const { options, positionals } = parseArgs(process.argv.slice(2))
const [command, id] = positionals

try {
  if (options.version || command === 'version') {
    console.log(packageJson.version)
  } else if (!command || command === 'help' || options.help) {
    help()
  } else if (command === 'init') {
    commandInit(options)
  } else {
    const client = registryClient(options)
    if (command === 'list') {
      const index = await client.index()
      if (options.json) {
        console.log(JSON.stringify(index.components, null, 2))
      } else {
        console.log(
          index.components.map((component) => `${component.id}\t${component.title}`).join('\n'),
        )
      }
    } else if (command === 'search') {
      await commandSearch(client, id, options)
    } else if (command === 'info') {
      await commandInfo(client, id, options)
    } else if (command === 'preview') {
      await commandPreview(client, id, options)
    } else if (command === 'plan') {
      await commandPlan(client, id, options)
    } else if (command === 'add') {
      await commandAdd(client, id, options)
    } else if (command === 'validate') {
      await commandValidate(client, id, options)
    } else {
      throw new Error(`unknown command '${command}'`)
    }
  }
} catch (error) {
  fail(error.message)
}
