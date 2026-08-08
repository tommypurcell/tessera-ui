#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import readline from 'node:readline/promises'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

import { scanProject } from '../scripts/theme/scan.mjs'
import { findDesignDoc, importDesignDoc } from '../scripts/theme/import-design.mjs'
import { renderThemeCss, linkThemeCss } from '../scripts/theme/eject.mjs'
import { applyThemeToDirectory } from '../scripts/theme/apply.mjs'
import { mergeTokens, pruneTokens, flattenTokens } from '../scripts/theme/tokens.mjs'

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'))
const configFilename = 'tessera-ui.json'
const proposedThemeFilename = 'tessera-theme.proposed.json'
const themeCssFilename = 'theme.css'
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

// Prompts for one of a fixed set of single-letter choices, returning `fallback` when not a TTY
// (non-interactive/agent runs must never block on a prompt) or when the answer doesn't match.
async function askChoice(question, choices, fallback) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return fallback
  }
  const terminal = readline.createInterface({ input: process.stdin, output: process.stdout })
  const answer = (await terminal.question(question)).trim().toLowerCase()
  terminal.close()
  return choices.includes(answer) ? answer : fallback
}

// Minimal line-based diff (no dependency): longest common subsequence over lines, then walk
// the LCS to emit `- `/`+ ` for removed/added lines and `  ` for unchanged context.
function diffLines(oldText, newText) {
  const oldLines = oldText.split('\n')
  const newLines = newText.split('\n')
  const oldLength = oldLines.length
  const newLength = newLines.length
  const lcs = Array.from({ length: oldLength + 1 }, () => new Array(newLength + 1).fill(0))
  for (let i = oldLength - 1; i >= 0; i -= 1) {
    for (let j = newLength - 1; j >= 0; j -= 1) {
      lcs[i][j] =
        oldLines[i] === newLines[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1])
    }
  }
  const out = []
  let i = 0
  let j = 0
  while (i < oldLength && j < newLength) {
    if (oldLines[i] === newLines[j]) {
      out.push(`  ${oldLines[i]}`)
      i += 1
      j += 1
    } else if (lcs[i + 1][j] >= lcs[i][j + 1]) {
      out.push(`- ${oldLines[i]}`)
      i += 1
    } else {
      out.push(`+ ${newLines[j]}`)
      j += 1
    }
  }
  while (i < oldLength) {
    out.push(`- ${oldLines[i]}`)
    i += 1
  }
  while (j < newLength) {
    out.push(`+ ${newLines[j]}`)
    j += 1
  }
  return out.join('\n')
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

  let localPath
  if (options.save !== undefined) {
    const { cwd } = projectContext(options)
    const defaultName = `tessera-preview-${component.id}-${variant.id}.jpg`
    const target = path.resolve(cwd, typeof options.save === 'string' ? options.save : defaultName)
    const bytes = Buffer.from(await (await fetchResponse(variant.screenshotUrl)).arrayBuffer())
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, bytes)
    localPath = target
  }

  if (options.json) {
    return console.log(
      JSON.stringify(
        {
          component: component.id,
          variant: variant.id,
          screenshotUrl: variant.screenshotUrl,
          ...(localPath ? { localPath } : {}),
        },
        null,
        2,
      ),
    )
  }
  console.log(variant.screenshotUrl)
  if (localPath) {
    console.log(`Saved to ${localPath} — open that file directly to view it.`)
  } else {
    console.log(
      'To view it: download the image and open it, e.g. ' +
        `\`curl -sL ${variant.screenshotUrl} -o preview.jpg\` then read preview.jpg, ` +
        'or re-run with --save to have this command fetch and save it for you. ' +
        'A raw image URL is not viewable inline; fetch the bytes first.',
    )
  }
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

  const downloaded = []
  for (const file of plan.files) {
    const content = await client.file(file.sourceFile.path)
    const actualHash = crypto.createHash('sha256').update(content).digest('hex')
    if (file.sourceFile.sha256 && actualHash !== file.sourceFile.sha256) {
      throw new Error(`checksum mismatch for ${file.sourceFile.path}`)
    }
    downloaded.push({ ...file, content })
  }

  // Conflicts: `--overwrite` always wins (explicit intent, skip diff/prompt entirely).
  // Otherwise show a diff and let the user choose per-file instead of hard-failing.
  const toWrite = []
  for (const file of downloaded) {
    const { destination, content } = file
    if (!fs.existsSync(destination) || options.overwrite) {
      toWrite.push({ destination, content })
      continue
    }
    const existing = fs.readFileSync(destination, 'utf8')
    const incoming = content.toString('utf8')
    if (existing === incoming) {
      console.log(`\n${path.relative(plan.cwd, destination)} is already up to date.`)
      continue
    }
    console.log(`\n${path.relative(plan.cwd, destination)} already exists and differs:\n`)
    console.log(diffLines(existing, incoming))
    const choice = options.yes
      ? 'k'
      : await askChoice(
          '\nKeep yours (k) / overwrite (o) / write alongside as .new (n) / abort (a)? [k] ',
          ['k', 'o', 'n', 'a'],
          'k',
        )
    if (choice === 'a') {
      return console.log('\nAborted. No files were written.')
    }
    if (choice === 'o') {
      toWrite.push({ destination, content })
    } else if (choice === 'n') {
      const sideBySide = `${destination}.new`
      toWrite.push({ destination: sideBySide, content })
    } else {
      console.log(`Kept ${path.relative(plan.cwd, destination)} unchanged.`)
    }
  }

  for (const { destination, content } of toWrite) {
    fs.mkdirSync(path.dirname(destination), { recursive: true })
    fs.writeFileSync(destination, content)
    console.log(`Installed ${path.relative(plan.cwd, destination)}`)
  }
  installDependencies(plan.cwd, plan.dependencies, options)
  console.log(`Done. The component source is yours to edit.`)
  await applyThemeAfterAdd(plan.cwd, options)
}

// After installing a component, keep the CSS-var theme layer in sync. Components read the
// canonical vars with fallbacks, so this is additive: without a theme they still render the
// library defaults.
//
// Three cases:
// - a confirmed theme already exists → just re-eject CSS (unchanged behavior).
// - a scan is already pending review (from a prior `theme scan`) → don't auto-confirm someone
//   else's unreviewed proposal, just nudge toward `theme confirm` (unchanged behavior).
// - neither exists → this is the project's first `add`. Run the scan now, show the proposed
//   tokens, and ask once. A design doc (if present) is imported directly with no prompt, same
//   as `theme scan` today. `--yes` accepts the proposal non-interactively so agent runs are not
//   blocked; declining leaves the proposal file in place without blocking the component install.
async function applyThemeAfterAdd(cwd, options) {
  const configPath = path.join(cwd, configFilename)
  const config = fs.existsSync(configPath) ? readJson(configPath) : null
  if (config?.theme) {
    const rel = ejectThemeCss(cwd, config.theme, options)
    console.log(`Refreshed ${rel} with your brand tokens.`)
    return
  }
  if (fs.existsSync(path.join(cwd, proposedThemeFilename))) {
    console.log(
      `Note: unconfirmed theme in ${proposedThemeFilename}. Run \`tessera-ui theme confirm\` to apply your brand.`,
    )
    return
  }

  console.log('\nNo theme configured yet — scanning your project once so components match your brand.')
  const scanResult = writeProposedTheme(cwd, configPath, config, options)

  if (scanResult.theme) {
    // Design doc found: already confirmed by writeProposedTheme, no prompt needed.
    const rel = ejectThemeCss(cwd, scanResult.theme, options)
    console.log(`Imported design tokens from ${scanResult.imported} and wrote ${rel}.`)
    return
  }

  const { proposed, result } = scanResult
  const tokens = proposed.tokens
  console.log(`Sources: ${result.sources.join(', ') || 'none (no config/CSS found)'}`)
  console.log(`Proposed tokens (${Object.keys(flattenTokens(tokens)).length}):`)
  for (const [key, value] of Object.entries(flattenTokens(tokens))) {
    const conf = result.confidence[key]
    console.log(`  ${key} = ${value}${conf ? `  (confidence ${conf})` : ''}`)
  }
  if (result.questions.length) {
    console.log('Questions for review:')
    result.questions.forEach((question) => console.log(`  - ${question}`))
  }

  // Nothing to confirm — an empty/unrecognized project scan found zero tokens. Leave the
  // proposal file (with its questions) for a human/agent to fill in later; don't block the
  // component install and don't prompt for a confirmation that would just fail.
  if (!Object.keys(flattenTokens(tokens)).length) {
    console.log(
      `\nNo tokens detected yet. Edit ${proposedThemeFilename} and run \`tessera-ui theme confirm\` when ready.`,
    )
    return
  }

  // Default-accept on plain Enter (prompt is phrased (Y/n)): only an explicit "n"/"no" declines.
  // Non-TTY runs without --yes also decline — safe, since declining just leaves the reviewable
  // proposal file in place rather than silently confirming an unreviewed theme.
  const reply = options.yes
    ? 'y'
    : await askChoice('\nUse these as your theme? (Y/n) ', ['', 'y', 'yes', 'n', 'no'], 'n')
  const accepted = reply !== 'n' && reply !== 'no'
  if (!accepted) {
    console.log(
      `Left the proposal in ${proposedThemeFilename} — edit it and run \`tessera-ui theme confirm\` when ready.`,
    )
    return
  }
  const { theme, rel } = confirmProposedTheme(cwd, configPath, config)
  const cssRel = ejectThemeCss(cwd, theme, options)
  console.log(`Confirmed theme → ${rel} and wrote ${cssRel}. Future installs will use it automatically.`)
}

// --- Theme commands -----------------------------------------------------------------------

function writeJsonFile(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`)
}

function updateConfigTheme(cwd, configPath, config, theme) {
  const next = { ...(config ?? {}), schemaVersion: 2, theme }
  writeJsonFile(configPath, next)
  return path.relative(cwd, configPath)
}

// Scans the project and writes a proposed theme file. Shared by `theme scan` and by `add`'s
// implicit first-run scan. Returns null when a design doc was imported directly instead
// (no proposal file — nothing to review, already confirmed).
function writeProposedTheme(cwd, configPath, config, options) {
  const designPath = findDesignDoc(cwd)

  // A design doc is authoritative: import straight to the config, no review file.
  if (designPath && !options['force-scan']) {
    const imported = importDesignDoc(designPath)
    const tokens = pruneTokens(imported.tokens)
    if (!Object.keys(tokens).length) {
      throw new Error(`found ${imported.source} but could not parse any tokens from it.`)
    }
    const theme = { source: imported.source, confirmedAt: new Date().toISOString(), tokens }
    const rel = updateConfigTheme(cwd, configPath, config, theme)
    return { imported: imported.source, theme, rel }
  }

  const result = scanProject(cwd)
  const tokens = pruneTokens(result.tokens)
  const proposed = {
    tokens,
    _review: {
      generatedAt: new Date().toISOString(),
      confidence: result.confidence,
      evidence: result.evidence,
      questions: result.questions,
      sources: result.sources,
      instructions:
        'Review and edit token values, resolve the questions above, then run `tessera-ui theme confirm`.',
    },
  }
  const proposedPath = path.join(cwd, proposedThemeFilename)
  writeJsonFile(proposedPath, proposed)
  return { proposed, result, proposedPath }
}

function themeScan(subcommand, options) {
  const { cwd, configPath, config } = projectContext(options)
  const scanResult = writeProposedTheme(cwd, configPath, config, options)

  if (scanResult.theme) {
    // Design doc path: already confirmed, nothing to review.
    if (options.json) {
      return console.log(JSON.stringify({ imported: scanResult.imported, theme: scanResult.theme }, null, 2))
    }
    console.log(`Imported design tokens from ${scanResult.imported} → ${scanResult.rel}`)
    console.log('Run `tessera-ui theme eject` to write theme.css into your project.')
    return
  }

  const { proposed, result, proposedPath } = scanResult
  const tokens = proposed.tokens

  if (options.json) {
    return console.log(JSON.stringify(proposed, null, 2))
  }

  console.log(`Scanned ${cwd}`)
  console.log(`Sources: ${result.sources.join(', ') || 'none (no config/CSS found)'}`)
  console.log(`\nProposed tokens (${Object.keys(flattenTokens(tokens)).length}):`)
  for (const [key, value] of Object.entries(flattenTokens(tokens))) {
    const conf = result.confidence[key]
    console.log(`  ${key} = ${value}${conf ? `  (confidence ${conf})` : ''}`)
  }
  if (result.questions.length) {
    console.log('\nQuestions for review:')
    result.questions.forEach((question) => console.log(`  - ${question}`))
  }
  console.log(`\nWrote ${path.relative(cwd, proposedPath)}.`)
  console.log('Have your agent review/edit it, then run `tessera-ui theme confirm`.')
}

function themeImport(filePathArg, options) {
  const { cwd, configPath, config } = projectContext(options)
  const target = filePathArg
    ? path.resolve(cwd, filePathArg)
    : (findDesignDoc(cwd) ?? throwMissingDesign())
  const imported = importDesignDoc(target)
  if (!imported) {
    throw new Error(`design document not found: ${filePathArg ?? '(auto)'}`)
  }
  const tokens = pruneTokens(imported.tokens)
  if (!Object.keys(tokens).length) {
    throw new Error(`could not parse any tokens from ${imported.source}.`)
  }
  const theme = { source: imported.source, confirmedAt: new Date().toISOString(), tokens }
  const rel = updateConfigTheme(cwd, configPath, config, theme)
  if (options.json) {
    return console.log(JSON.stringify(theme, null, 2))
  }
  console.log(
    `Imported ${Object.keys(flattenTokens(tokens)).length} tokens from ${imported.source} → ${rel}`,
  )
}

function throwMissingDesign() {
  throw new Error('no design.md/design.json found; pass a path: tessera-ui theme import <file>')
}

// Confirms whatever proposal is currently on disk. Shared by `theme confirm` and by `add`'s
// implicit first-run confirm prompt. Throws the same errors `theme confirm` always has.
function confirmProposedTheme(cwd, configPath, config) {
  const proposedPath = path.join(cwd, proposedThemeFilename)
  if (!fs.existsSync(proposedPath)) {
    throw new Error(`no ${proposedThemeFilename} found. Run \`tessera-ui theme scan\` first.`)
  }
  const proposed = readJson(proposedPath)
  const tokens = pruneTokens(mergeTokens(proposed.tokens))
  if (!Object.keys(tokens).length) {
    throw new Error('the proposed theme has no tokens; edit it before confirming.')
  }
  const theme = { source: 'scan', confirmedAt: new Date().toISOString(), tokens }
  const rel = updateConfigTheme(cwd, configPath, config, theme)
  fs.rmSync(proposedPath)
  return { theme, rel }
}

function themeConfirm(options) {
  const { cwd, configPath, config } = projectContext(options)
  const { theme, rel } = confirmProposedTheme(cwd, configPath, config)
  if (options.json) {
    return console.log(JSON.stringify(theme, null, 2))
  }
  console.log(`Confirmed theme → ${rel} (removed ${proposedThemeFilename}).`)
  console.log('Run `tessera-ui theme eject` to write theme.css into your project.')
}

function themeShow(options) {
  const { cwd, config } = projectContext(options)
  const proposedPath = path.join(cwd, proposedThemeFilename)
  const active = config?.theme ?? null
  const proposed = fs.existsSync(proposedPath) ? readJson(proposedPath) : null
  if (options.json) {
    return console.log(JSON.stringify({ active, proposed }, null, 2))
  }
  if (active) {
    console.log(`Active theme (source: ${active.source}, confirmed ${active.confirmedAt}):`)
    for (const [key, value] of Object.entries(flattenTokens(active.tokens))) {
      console.log(`  ${key} = ${value}`)
    }
  } else {
    console.log('No active theme. Run `tessera-ui theme scan` (or `import`) then `confirm`.')
  }
  if (proposed) {
    console.log(
      `\nUnconfirmed proposal in ${proposedThemeFilename}. Run \`tessera-ui theme confirm\`.`,
    )
  }
}

function ejectThemeCss(cwd, theme, options) {
  const outPath = path.resolve(cwd, options.out ?? themeCssFilename)
  const css = renderThemeCss(theme.tokens)
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, css)
  return path.relative(cwd, outPath)
}

function themeEject(options) {
  const { cwd, config } = projectContext(options)
  if (!config?.theme) {
    throw new Error('no active theme to eject. Confirm one with `tessera-ui theme confirm` first.')
  }
  const rel = ejectThemeCss(cwd, config.theme, options)
  console.log(`Wrote ${rel}.`)

  // Wire it into the app: without an import, the variables never load and nothing renders
  // differently. Auto-insert the import unless the user opted out with --no-link.
  if (options.link === false || options['no-link']) {
    console.log(`Import it in your global stylesheet: @import './${rel}';`)
    return
  }
  const link = linkThemeCss(cwd, options.out ?? themeCssFilename)
  if (link.status === 'added') {
    console.log(`Linked it into ${link.stylesheet} (added \`${link.importLine}\`).`)
  } else if (link.status === 'present') {
    console.log(`${link.stylesheet} already imports it.`)
  } else {
    console.log(
      `Could not find a global stylesheet to import it. Add \`${link.importLine}\` to your Tailwind entry CSS manually.`,
    )
  }
}

function themeApply(options) {
  const { cwd, config } = projectContext(options)
  if (!config?.theme) {
    throw new Error('no active theme to apply. Confirm one with `tessera-ui theme confirm` first.')
  }
  const componentDirectory = options.directory ?? config.componentDirectory ?? 'components/ui'
  const colors =
    typeof options.colors === 'string'
      ? options.colors
          .split(',')
          .map((value) => value.trim())
          .filter(Boolean)
      : undefined
  const result = applyThemeToDirectory(cwd, componentDirectory, config.theme.tokens, {
    dryRun: Boolean(options['dry-run']),
    colors,
    allColors: Boolean(options['all-colors']),
  })
  if (options.json) {
    return console.log(JSON.stringify(result, null, 2))
  }
  const verb = result.dryRun ? 'Would apply' : 'Applied'
  if (!result.total) {
    console.log(
      `No themeable classes found in ${componentDirectory}. Components may already be themed, or ` +
        'use classes outside what apply rewrites.',
    )
    return
  }
  console.log(
    `${verb} theme variables to ${result.files.length} file(s) in ${componentDirectory}` +
      `${result.dryRun ? ' (dry run — no files written)' : ''}:`,
  )
  result.files.forEach((file) => console.log(`  ${file.path} (${file.changes} change(s))`))
  // Report honestly, per category — only claim brand recoloring if colors were actually rewritten.
  const { color, radius, font } = result.byCategory
  const parts = []
  if (radius) {
    parts.push(`${radius} radius`)
  }
  if (font) {
    parts.push(`${font} font`)
  }
  if (color) {
    parts.push(`${color} color`)
  }
  console.log(`\nRewrote: ${parts.join(', ')}.`)
  if (!color) {
    console.log(
      'Note: color classes were NOT changed. `apply` variabilizes radius and font by default; ' +
        'color is opt-in because remapping every palette color would recolor semantic colors ' +
        '(success/error). To brand specific colors, pass e.g. `--colors indigo,blue` or ' +
        '`--all-colors` (review the diff).',
    )
  }
  if (!result.dryRun) {
    console.log('Ensure theme.css is imported (run `tessera-ui theme eject`).')
  }
}

function commandTheme(subcommand, arg, options) {
  switch (subcommand) {
    case undefined:
    case 'scan':
      return themeScan(subcommand, options)
    case 'import':
      return themeImport(arg, options)
    case 'confirm':
      return themeConfirm(options)
    case 'show':
      return themeShow(options)
    case 'eject':
      return themeEject(options)
    case 'apply':
      return themeApply(options)
    default:
      throw new Error(
        `unknown theme subcommand '${subcommand}'. Use scan|import|confirm|show|eject|apply.`,
      )
  }
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
  theme <subcommand>   Scan/import your design tokens and apply them to components
                         scan     Scan the project → tessera-theme.proposed.json for agent review
                         import   Import tokens from a design.md/design.json (authoritative)
                         confirm  Promote the proposed theme into tessera-ui.json
                         show     Print the active/proposed theme
                         eject    Write theme.css (@theme + :root vars) into the project
                         apply    Rewrite installed components to read your theme's CSS vars

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
  --out <path>         theme eject: output path (default theme.css)
  --no-link            theme eject: do not auto-import theme.css into the global stylesheet
  --dry-run            theme apply: show what would change without writing files
  --colors <list>      theme apply: comma-separated colors to brand (e.g. indigo,blue,rose-600)
  --all-colors         theme apply: variabilize every known palette color (review the diff)
  --force-scan         theme scan: scan even when a design.md is present
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
  } else if (command === 'theme') {
    commandTheme(positionals[1], positionals[2], options)
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
