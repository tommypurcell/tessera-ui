import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'

import { chromium } from '@playwright/test'

const projectRoot = process.cwd()
const publicRoot = path.join(projectRoot, 'public')
const registryRoot = path.join(publicRoot, 'registry')
const outputRoot = path.join(publicRoot, 'screenshots', 'components')
const screenshotManifestPath = path.join(publicRoot, 'screenshots', 'manifest.json')
const viewport = { width: 1200, height: 800 }

function option(name, fallback) {
  const optionIndex = process.argv.indexOf(`--${name}`)
  return optionIndex === -1 ? fallback : process.argv[optionIndex + 1]
}

function contentType(filePath) {
  const extension = path.extname(filePath).toLowerCase()
  return (
    {
      '.css': 'text/css; charset=utf-8',
      '.html': 'text/html; charset=utf-8',
      '.js': 'text/javascript; charset=utf-8',
      '.jpg': 'image/jpeg',
      '.png': 'image/png',
      '.svg': 'image/svg+xml',
    }[extension] ?? 'application/octet-stream'
  )
}

function createPublicServer() {
  return http.createServer((request, response) => {
    const requestPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
    const filePath = path.resolve(publicRoot, `.${requestPath}`)

    if (!filePath.startsWith(`${publicRoot}${path.sep}`) || !fs.existsSync(filePath)) {
      response.writeHead(404).end('Not found')
      return
    }

    response.setHeader('Content-Type', contentType(filePath))
    response.end(fs.readFileSync(filePath))
  })
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

function sourceRegistry() {
  return new Map(
    findRegistryFiles(path.join(projectRoot, 'registry', 'components')).map((registryPath) => {
      const entry = JSON.parse(fs.readFileSync(registryPath, 'utf8'))
      return [entry.name, { entry, directory: path.dirname(registryPath) }]
    }),
  )
}

function screenshotTasks(selectedComponent) {
  const index = JSON.parse(fs.readFileSync(path.join(registryRoot, 'registry.json'), 'utf8'))
  const sources = sourceRegistry()
  return index.components.flatMap(({ id: componentId }) => {
    if (selectedComponent && componentId !== selectedComponent) {
      return []
    }

    const manifest = JSON.parse(
      fs.readFileSync(path.join(registryRoot, 'components', `${componentId}.json`), 'utf8'),
    )
    const sourceComponent = sources.get(componentId)
    if (!sourceComponent) {
      throw new Error(`Missing canonical registry source for ${componentId}.`)
    }
    return manifest.variants.map((variant) => {
      const htmlFile = variant.files.find((file) => file.format === 'html')
      if (!htmlFile) {
        throw new Error(`${componentId}/${variant.id} has no HTML source.`)
      }
      const sourceVariant = sourceComponent.entry.variants.find((entry) => entry.id === variant.id)
      const previewFile = path.resolve(sourceComponent.directory, sourceVariant?.source.html ?? '')
      if (!sourceVariant || !previewFile.startsWith(`${publicRoot}${path.sep}`)) {
        throw new Error(`Missing or unsafe canonical preview for ${componentId}/${variant.id}.`)
      }
      return {
        componentId,
        variantId: variant.id,
        appearance: variant.appearance,
        sourcePath: htmlFile.path,
        sourceSha256: htmlFile.sha256,
        previewPath: path.relative(publicRoot, previewFile).split(path.sep).join('/'),
        outputPath: path.join(outputRoot, componentId, `${variant.id}.jpg`),
        url: `/screenshots/components/${componentId}/${variant.id}.jpg`,
      }
    })
  })
}

async function settlePreview(page) {
  await page.evaluate(async () => {
    await document.fonts?.ready
    await Promise.allSettled(
      [...document.images]
        .filter((image) => !image.complete)
        .map(
          (image) =>
            new Promise((resolve) => {
              image.addEventListener('load', resolve, { once: true })
              image.addEventListener('error', resolve, { once: true })
              window.setTimeout(resolve, 2000)
            }),
        ),
    )
  })
  await page.waitForTimeout(100)
}

async function screenshotClip(page) {
  return page.evaluate(({ viewportWidth, viewportHeight }) => {
    const boxes = [...document.body.children]
      .map((element) => element.getBoundingClientRect())
      .filter((box) => box.width > 0 && box.height > 0)
    if (boxes.length === 0) {
      return null
    }

    const left = Math.min(...boxes.map((box) => box.left + window.scrollX))
    const top = Math.min(...boxes.map((box) => box.top + window.scrollY))
    const right = Math.max(...boxes.map((box) => box.right + window.scrollX))
    const bottom = Math.max(...boxes.map((box) => box.bottom + window.scrollY))
    const width = Math.min(viewportWidth, Math.max(600, Math.ceil(right - left + 96)))
    const height = Math.min(viewportHeight, Math.max(400, Math.ceil(bottom - top + 96)))

    return {
      x: Math.max(0, Math.min(viewportWidth - width, (left + right - width) / 2)),
      y: Math.max(0, Math.min(viewportHeight - height, (top + bottom - height) / 2)),
      width,
      height,
    }
  }, { viewportWidth: viewport.width, viewportHeight: viewport.height })
}

async function capture(workerId, browser, baseUrl, queue, completed, total) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    colorScheme: 'light',
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()

  while (queue.length > 0) {
    const task = queue.shift()
    const response = await page.goto(`${baseUrl}/${task.previewPath}`, {
      waitUntil: 'domcontentloaded',
      timeout: 15_000,
    })
    if (!response?.ok()) {
      throw new Error(`${task.componentId}/${task.variantId} returned ${response?.status()}.`)
    }
    await page.evaluate((appearance) => {
      document.documentElement.classList.toggle('dark', appearance === 'dark')
    }, task.appearance)
    await settlePreview(page)
    try {
      await page.waitForFunction(
        () =>
          [...document.body.children].some((element) => {
            const box = element.getBoundingClientRect()
            return box.width > 0 && box.height > 0
          }),
        undefined,
        { timeout: 5000 },
      )
    } catch (error) {
      throw new Error(`${task.componentId}/${task.variantId} never rendered visible content.`, {
        cause: error,
      })
    }
    const clip = await screenshotClip(page)
    if (!clip) {
      throw new Error(`${task.componentId}/${task.variantId} rendered an empty body.`)
    }

    fs.mkdirSync(path.dirname(task.outputPath), { recursive: true })
    await page.screenshot({
      path: task.outputPath,
      type: 'jpeg',
      quality: 86,
      animations: 'disabled',
      clip,
    })
    completed.push({ ...task, width: Math.round(clip.width), height: Math.round(clip.height) })

    if (completed.length % 25 === 0 || queue.length === 0) {
      console.log(`Captured ${completed.length}/${total} screenshots.`)
    }
  }

  await context.close()
  console.log(`Worker ${workerId} finished.`)
}

const selectedComponent = option('component', null)
const concurrency = Number(option('concurrency', '6'))
if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 12) {
  throw new Error('--concurrency must be an integer from 1 to 12.')
}

const tasks = screenshotTasks(selectedComponent)
if (tasks.length === 0) {
  throw new Error(selectedComponent ? `Unknown component '${selectedComponent}'.` : 'No variants found.')
}

const server = createPublicServer()
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const address = server.address()
const baseUrl = `http://127.0.0.1:${address.port}`
const browser = await chromium.launch({ headless: true })
const queue = [...tasks]
const completed = []

if (!selectedComponent) {
  fs.rmSync(outputRoot, { recursive: true, force: true })
}

try {
  await Promise.all(
    Array.from({ length: Math.min(concurrency, tasks.length) }, (_, index) =>
      capture(index + 1, browser, baseUrl, queue, completed, tasks.length),
    ),
  )
} finally {
  await browser.close()
  server.close()
}

const previousEntries =
  selectedComponent && fs.existsSync(screenshotManifestPath)
    ? JSON.parse(fs.readFileSync(screenshotManifestPath, 'utf8')).screenshots
    : []
const entriesByKey = new Map(
  previousEntries.map((entry) => [`${entry.componentId}/${entry.variantId}`, entry]),
)
for (const entry of completed) {
  entriesByKey.set(`${entry.componentId}/${entry.variantId}`, entry)
}
const entries = [...entriesByKey.values()]
  .sort((left, right) =>
    `${left.componentId}/${left.variantId}`.localeCompare(`${right.componentId}/${right.variantId}`),
  )
  .map((entry) => ({
    componentId: entry.componentId,
    variantId: entry.variantId,
    appearance: entry.appearance,
    sourcePath: entry.sourcePath,
    sourceSha256: entry.sourceSha256,
    url: entry.url,
    width: entry.width,
    height: entry.height,
  }))

fs.mkdirSync(path.dirname(screenshotManifestPath), { recursive: true })
fs.writeFileSync(
  screenshotManifestPath,
  `${JSON.stringify(
    {
      schemaVersion: 1,
      format: 'jpeg',
      viewport,
      screenshotCount: entries.length,
      screenshots: entries,
    },
    null,
    2,
  )}\n`,
)

console.log(`Wrote ${entries.length} screenshots and ${screenshotManifestPath}.`)
