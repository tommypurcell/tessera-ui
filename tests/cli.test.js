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
