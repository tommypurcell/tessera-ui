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

  // Re-running add on an existing, unmodified file is a silent no-op (nothing to reconcile).
  const rerun = await cli(
    ['add', 'application-buttons', '--variant', 'buttons-1', '--yes', '--registry', registryRoot],
    cwd,
  )
  assert.match(rerun.stdout, /already up to date/)
})

test('add on a conflicting file diffs and keeps the local copy by default (non-interactive)', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-local-'))
  await cli(['init'], cwd)
  await cli(
    ['add', 'application-buttons', '--variant', 'buttons-1', '--yes', '--registry', registryRoot],
    cwd,
  )
  const destination = path.join(cwd, 'components', 'ui', 'buttons-1.tsx')
  fs.writeFileSync(destination, '// locally edited\n')

  // Non-interactive (no TTY) + --yes: defaults to keeping the local copy, does not throw.
  const result = await cli(
    ['add', 'application-buttons', '--variant', 'buttons-1', '--yes', '--registry', registryRoot],
    cwd,
  )
  assert.match(result.stdout, /already exists and differs/)
  assert.match(result.stdout, /Kept .*buttons-1\.tsx unchanged/)
  assert.equal(fs.readFileSync(destination, 'utf8'), '// locally edited\n')

  // --overwrite still means "always overwrite, skip the diff/prompt entirely".
  await cli(
    [
      'add',
      'application-buttons',
      '--variant',
      'buttons-1',
      '--yes',
      '--overwrite',
      '--registry',
      registryRoot,
    ],
    cwd,
  )
  assert.match(fs.readFileSync(destination, 'utf8'), /export function ButtonsVariant1/)
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

test('preview --save fetches the screenshot and reports a local path', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-preview-save-'))
  const saved = await cli(
    [
      'preview',
      'application-buttons',
      '--variant',
      'buttons-1',
      '--save',
      '--json',
      '--registry',
      registryRoot,
    ],
    cwd,
  )
  const result = JSON.parse(saved.stdout)
  assert.equal(result.component, 'application-buttons')
  assert.equal(result.variant, 'buttons-1')
  assert.equal(typeof result.localPath, 'string')
  assert.equal(fs.existsSync(result.localPath), true)
  assert.ok(fs.statSync(result.localPath).size > 1000)

  const nonJson = await cli(
    ['preview', 'application-buttons', '--variant', 'buttons-1', '--save', 'mine.jpg', '--registry', registryRoot],
    cwd,
  )
  assert.match(nonJson.stdout, /Saved to .*mine\.jpg/)
  assert.equal(fs.existsSync(path.join(cwd, 'mine.jpg')), true)
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

test('add scans and confirms a theme automatically on the first install, then skips on the next', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-onadd-'))
  fs.writeFileSync(
    path.join(cwd, 'tailwind.config.ts'),
    `export default { theme: { extend: {
      colors: { brand: { DEFAULT: '#0d9488' } },
      borderRadius: { DEFAULT: '0.75rem' },
      fontFamily: { sans: ['Inter', 'system-ui'] },
    } } }\n`,
  )
  await cli(['init', '--cwd', cwd], cwd)

  const first = await cli(
    ['add', 'application-buttons', '--variant', 'buttons-1', '--yes', '--registry', registryRoot],
    cwd,
  )
  assert.match(first.stdout, /No theme configured yet/)
  assert.match(first.stdout, /Confirmed theme/)
  assert.equal(fs.existsSync(path.join(cwd, 'tessera-theme.proposed.json')), false)

  const config = JSON.parse(fs.readFileSync(path.join(cwd, 'tessera-ui.json'), 'utf8'))
  assert.equal(config.theme.tokens.colors.brand, '#0d9488')
  assert.equal(fs.existsSync(path.join(cwd, 'theme.css')), true)

  // Second install: theme already confirmed, no scan/prompt — just a silent CSS refresh.
  const second = await cli(
    ['add', 'application-buttons', '--variant', 'buttons-2', '--yes', '--registry', registryRoot],
    cwd,
  )
  assert.doesNotMatch(second.stdout, /No theme configured yet/)
  assert.match(second.stdout, /Refreshed theme\.css/)
})

test('add on an empty project leaves an unconfirmed proposal instead of failing', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-empty-'))
  await cli(['init', '--cwd', cwd], cwd)

  const result = await cli(
    ['add', 'application-buttons', '--variant', 'buttons-1', '--yes', '--registry', registryRoot],
    cwd,
  )
  assert.match(result.stdout, /No tokens detected yet/)
  assert.equal(fs.existsSync(path.join(cwd, 'components', 'ui', 'buttons-1.tsx')), true)
  assert.equal(fs.existsSync(path.join(cwd, 'tessera-theme.proposed.json')), true)
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

test('theme eject auto-imports theme.css into the global stylesheet, idempotently', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-link-'))
  fs.mkdirSync(path.join(cwd, 'app'))
  fs.writeFileSync(
    path.join(cwd, 'app', 'globals.css'),
    '@import "tailwindcss";\n\nbody { margin: 0; }\n',
  )
  fs.writeFileSync(
    path.join(cwd, 'tessera-ui.json'),
    JSON.stringify({
      schemaVersion: 2,
      componentDirectory: 'components/ui',
      theme: { source: 'scan', tokens: { colors: { brand: '#f87171' } } },
    }),
  )

  await cli(['theme', 'eject', '--cwd', cwd], cwd)
  const globals = fs.readFileSync(path.join(cwd, 'app', 'globals.css'), 'utf8')
  assert.match(globals, /@import '\.\.\/theme\.css';/)
  // Import goes right after the Tailwind import.
  assert.match(globals, /@import "tailwindcss";\n@import '\.\.\/theme\.css';/)

  // Idempotent: a second eject must not add a duplicate import.
  await cli(['theme', 'eject', '--cwd', cwd], cwd)
  const after = fs.readFileSync(path.join(cwd, 'app', 'globals.css'), 'utf8')
  assert.equal(after.match(/theme\.css/g).length, 1)
})

test('theme eject --no-link leaves the stylesheet untouched', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-nolink-'))
  fs.writeFileSync(path.join(cwd, 'globals.css'), '@import "tailwindcss";\n')
  fs.writeFileSync(
    path.join(cwd, 'tessera-ui.json'),
    JSON.stringify({
      schemaVersion: 2,
      componentDirectory: 'components/ui',
      theme: { source: 'scan', tokens: { colors: { brand: '#f87171' } } },
    }),
  )
  await cli(['theme', 'eject', '--cwd', cwd, '--no-link'], cwd)
  assert.doesNotMatch(fs.readFileSync(path.join(cwd, 'globals.css'), 'utf8'), /theme\.css/)
})

test('theme apply rewrites installed components to read CSS variables', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-apply-'))
  const componentDir = path.join(cwd, 'components', 'ui')
  fs.mkdirSync(componentDir, { recursive: true })
  fs.writeFileSync(
    path.join(componentDir, 'cta.tsx'),
    `export const Cta = () => <button className="rounded-lg bg-indigo-600 font-sans">Go</button>\n`,
  )
  fs.writeFileSync(
    path.join(cwd, 'tessera-ui.json'),
    JSON.stringify({
      schemaVersion: 2,
      componentDirectory: 'components/ui',
      theme: {
        source: 'scan',
        tokens: {
          colors: { brand: '#0d9488' },
          radius: { DEFAULT: '0.75rem' },
          fontFamily: { sans: 'Inter, system-ui, sans-serif' },
        },
      },
    }),
  )

  // Default apply variabilizes radius and font, but NOT color (color is opt-in).
  await cli(['theme', 'apply', '--cwd', cwd], cwd)
  let updated = fs.readFileSync(path.join(componentDir, 'cta.tsx'), 'utf8')
  assert.match(updated, /rounded-\[var\(--radius,0\.5rem\)\]/)
  // Tailwind arbitrary values require underscores in place of spaces.
  assert.match(updated, /font-\[var\(--font-sans,Inter,_system-ui,_sans-serif\)\]/)
  assert.match(updated, /\bbg-indigo-600\b/, 'color is not touched without --colors')

  // Opt-in color branding rewrites the requested color.
  await cli(['theme', 'apply', '--cwd', cwd, '--colors', 'indigo'], cwd)
  updated = fs.readFileSync(path.join(componentDir, 'cta.tsx'), 'utf8')
  assert.match(updated, /bg-\[var\(--color-brand,#4f46e5\)\]/)
  assert.doesNotMatch(updated, /\bbg-indigo-600\b/)
})

test('theme apply --dry-run reports changes without writing', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-dryrun-'))
  const componentDir = path.join(cwd, 'components', 'ui')
  fs.mkdirSync(componentDir, { recursive: true })
  const file = path.join(componentDir, 'cta.tsx')
  const before = `export const Cta = () => <button className="rounded-lg bg-rose-600">Go</button>\n`
  fs.writeFileSync(file, before)
  fs.writeFileSync(
    path.join(cwd, 'tessera-ui.json'),
    JSON.stringify({
      schemaVersion: 2,
      componentDirectory: 'components/ui',
      theme: {
        source: 'scan',
        tokens: { colors: { brand: '#0d9488' }, radius: { DEFAULT: '0.75rem' } },
      },
    }),
  )
  const result = await cli(['theme', 'apply', '--cwd', cwd, '--dry-run'], cwd)
  assert.match(result.stdout, /no files written/i)
  assert.equal(fs.readFileSync(file, 'utf8'), before, 'dry-run must not modify the file')
})

test('theme apply --json reports category counts and does not overstate color changes', async () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'tessera-ui-theme-cat-'))
  const componentDir = path.join(cwd, 'components', 'ui')
  fs.mkdirSync(componentDir, { recursive: true })
  fs.writeFileSync(
    path.join(componentDir, 'cta.tsx'),
    `export const Cta = () => <button className="rounded-lg bg-rose-600">Go</button>\n`,
  )
  fs.writeFileSync(
    path.join(cwd, 'tessera-ui.json'),
    JSON.stringify({
      schemaVersion: 2,
      componentDirectory: 'components/ui',
      theme: {
        source: 'scan',
        tokens: { colors: { brand: '#0d9488' }, radius: { DEFAULT: '0.75rem' } },
      },
    }),
  )
  const result = await cli(['theme', 'apply', '--cwd', cwd, '--json'], cwd)
  const report = JSON.parse(result.stdout)
  assert.equal(report.byCategory.radius, 1)
  assert.equal(report.byCategory.color, 0, 'color not rewritten by default')
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
