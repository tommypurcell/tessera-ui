import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const runFile = promisify(execFile)
const projectRoot = path.resolve(import.meta.dirname, '..')
const cliPath = path.join(projectRoot, 'bin', 'tessera-ui.js')
const registryRoot = path.join(projectRoot, 'public', 'registry')

async function cli(args, cwd) {
  return runFile(process.execPath, [cliPath, ...args], {
    cwd,
    env: { ...process.env, NO_COLOR: '1' },
  })
}

test('initializes a project and installs editable component source', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-local-'))
  await cli(['init'], cwd)
  await cli(
    ['add', 'application-buttons', '--variant', 'buttons-1', '--yes', '--registry', registryRoot],
    cwd,
  )

  const destination = path.join(cwd, 'components', 'ui', 'buttons-1.tsx')
  assert.equal(fs.existsSync(destination), true)
  assert.match(fs.readFileSync(destination, 'utf8'), /export function ButtonsVariant1/)

  await assert.rejects(
    cli(
      ['add', 'application-buttons', '--variant', 'buttons-1', '--yes', '--registry', registryRoot],
      cwd,
    ),
    /already exists/,
  )
})

test('downloads and verifies a component from a hosted registry', async (context) => {
  const server = http.createServer((request, response) => {
    const relativePath = decodeURIComponent(request.url.replace(/^\/registry\//, ''))
    const filePath = path.resolve(registryRoot, relativePath)
    if (!filePath.startsWith(`${registryRoot}${path.sep}`) || !fs.existsSync(filePath)) {
      response.writeHead(404).end('Not found')
      return
    }
    response.setHeader(
      'content-type',
      filePath.endsWith('.json') ? 'application/json' : 'text/plain',
    )
    response.end(fs.readFileSync(filePath))
  })
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  context.after(() => server.close())

  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-remote-'))
  const address = server.address()
  const registryUrl = `http://127.0.0.1:${address.port}/registry`
  const result = await cli(
    [
      'add',
      'application-buttons',
      '--variant',
      'buttons-2',
      '--yes',
      '--registry-url',
      registryUrl,
    ],
    cwd,
  )

  assert.match(result.stdout, /The component source is yours to edit/)
  assert.match(
    result.stdout,
    /Preview: https:\/\/www\.tessera-ui\.com\/screenshots\/components\/application-buttons\/buttons-2\.jpg/,
  )
  assert.equal(fs.existsSync(path.join(cwd, 'components', 'ui', 'buttons-2.tsx')), true)
})

test('supports machine-readable discovery and version output', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-discovery-'))
  const search = await cli(['search', 'button', '--json', '--registry', registryRoot], cwd)
  const results = JSON.parse(search.stdout)
  assert.equal(
    results.some((component) => component.id === 'application-buttons'),
    true,
  )
  assert.match(
    results.find((component) => component.id === 'application-buttons').screenshotUrl,
    /\/screenshots\/components\/application-buttons\/buttons-1\.jpg$/,
  )

  const info = await cli(['info', 'application-buttons', '--json', '--registry', registryRoot], cwd)
  const component = JSON.parse(info.stdout)
  assert.equal(
    component.variants.every((variant) => variant.screenshotUrl.startsWith('https://')),
    true,
  )
  assert.equal(
    component.variants.every((variant) => variant.props.length > 0),
    true,
  )
  assert.equal(
    component.variants.every((variant) =>
      variant.props.every(
        (prop) =>
          typeof prop.name === 'string' &&
          typeof prop.type === 'string' &&
          typeof prop.required === 'boolean' &&
          typeof prop.default === 'string' &&
          typeof prop.description === 'string' &&
          typeof prop.example === 'string',
      ),
    ),
    true,
  )
  assert.equal(
    component.inputs.props.some((prop) => prop.name === 'state'),
    true,
  )

  const preview = await cli(
    [
      'preview',
      'application-buttons',
      '--variant',
      'buttons-2',
      '--json',
      '--registry',
      registryRoot,
    ],
    cwd,
  )
  assert.deepEqual(JSON.parse(preview.stdout), {
    component: 'application-buttons',
    variant: 'buttons-2',
    screenshotUrl:
      'https://www.tessera-ui.com/screenshots/components/application-buttons/buttons-2.jpg',
  })

  const plan = await cli(
    ['plan', 'application-buttons', '--variant', 'buttons-1', '--json', '--registry', registryRoot],
    cwd,
  )
  assert.match(JSON.parse(plan.stdout).screenshotUrl, /application-buttons\/buttons-1\.jpg$/)

  const version = await cli(['--version'], cwd)
  assert.match(version.stdout, /^\d+\.\d+\.\d+\n$/)
})

test('theme scan infers tokens from a tailwind config at high confidence', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-config-'))
  fs.writeFileSync(
    path.join(cwd, 'tailwind.config.ts'),
    `export default { theme: { extend: {
      colors: { brand: { DEFAULT: '#0d9488' } },
      borderRadius: { DEFAULT: '0.75rem' },
      fontFamily: { sans: ['Inter', 'system-ui'] },
    } } }\n`,
  )
  const result = await cli(['theme', 'scan', '--cwd', cwd, '--json'], cwd)
  const proposed = JSON.parse(result.stdout)
  assert.equal(proposed.tokens.colors.brand, '#0d9488')
  assert.equal(proposed.tokens.radius.DEFAULT, '0.75rem')
  assert.equal(proposed.tokens.fontFamily.sans, 'Inter')
  assert.equal(proposed._review.confidence['colors.brand'], 0.95)
  assert.equal(fs.existsSync(path.join(cwd, 'tessera-theme.proposed.json')), true)
})

test('theme scan infers a brand color from class usage and raises questions', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-usage-'))
  fs.mkdirSync(path.join(cwd, 'src'))
  fs.writeFileSync(
    path.join(cwd, 'src', 'App.tsx'),
    `export default () => (<button className="bg-indigo-600 rounded-lg">x</button>)\n`.repeat(3),
  )
  const scan = await cli(['theme', 'scan', '--cwd', cwd, '--json'], cwd)
  const proposed = JSON.parse(scan.stdout)
  assert.equal(proposed.tokens.colors.brand, '#4f46e5')
  assert.equal(proposed._review.confidence['colors.brand'], 0.45)
  assert.equal(
    proposed._review.questions.some((question) => /sans font/i.test(question)),
    true,
  )
})

test('theme confirm promotes the proposal into config and eject renders @theme css', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-confirm-'))
  fs.writeFileSync(
    path.join(cwd, 'tessera-theme.proposed.json'),
    JSON.stringify({
      tokens: { colors: { brand: '#4f46e5' }, radius: { DEFAULT: '0.5rem' } },
      _review: { questions: [] },
    }),
  )
  await cli(['init', '--cwd', cwd], cwd)
  await cli(['theme', 'confirm', '--cwd', cwd], cwd)

  const config = JSON.parse(fs.readFileSync(path.join(cwd, 'tessera-ui.json'), 'utf8'))
  assert.equal(config.schemaVersion, 2)
  assert.equal(config.theme.source, 'scan')
  assert.equal(config.theme.tokens.colors.brand, '#4f46e5')
  assert.equal(fs.existsSync(path.join(cwd, 'tessera-theme.proposed.json')), false)

  await cli(['theme', 'eject', '--cwd', cwd], cwd)
  const css = fs.readFileSync(path.join(cwd, 'theme.css'), 'utf8')
  assert.match(css, /@theme\s*\{[\s\S]*--color-brand: #4f46e5;/)
  assert.match(css, /--radius: 0\.5rem;/)
})

test('theme treats a design.md as authoritative and skips the review file', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-design-'))
  fs.writeFileSync(
    path.join(cwd, 'design.md'),
    '# Brand\n\n| Token | Value |\n| - | - |\n| Brand color | #db2777 |\n| Radius | 1rem |\n',
  )
  await cli(['init', '--cwd', cwd], cwd)
  await cli(['theme', 'scan', '--cwd', cwd], cwd)

  const config = JSON.parse(fs.readFileSync(path.join(cwd, 'tessera-ui.json'), 'utf8'))
  assert.equal(config.theme.source, 'design.md')
  assert.equal(config.theme.tokens.colors.brand, '#db2777')
  assert.equal(config.theme.tokens.radius.DEFAULT, '1rem')
  assert.equal(fs.existsSync(path.join(cwd, 'tessera-theme.proposed.json')), false)
})

test('theme scan does not invent values on an empty project', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-empty-'))
  const scan = await cli(['theme', 'scan', '--cwd', cwd, '--json'], cwd)
  const proposed = JSON.parse(scan.stdout)
  assert.deepEqual(proposed.tokens, {})
  assert.equal(
    proposed._review.questions.some((question) => /brand.*color/i.test(question)),
    true,
  )
})
