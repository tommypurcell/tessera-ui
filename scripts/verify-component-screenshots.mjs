import fs from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const registryRoot = path.join(projectRoot, 'public', 'registry')
const screenshotRoot = path.join(projectRoot, 'public', 'screenshots')
const screenshotManifestPath = path.join(screenshotRoot, 'manifest.json')

if (!fs.existsSync(screenshotManifestPath)) {
  throw new Error('Screenshot manifest is missing. Run pnpm screenshots:generate.')
}

const registryIndex = JSON.parse(
  fs.readFileSync(path.join(registryRoot, 'registry.json'), 'utf8'),
)
const screenshotManifest = JSON.parse(fs.readFileSync(screenshotManifestPath, 'utf8'))
const screenshots = new Map(
  screenshotManifest.screenshots.map((entry) => [
    `${entry.componentId}/${entry.variantId}`,
    entry,
  ]),
)
let expectedCount = 0

for (const { id: componentId } of registryIndex.components) {
  const component = JSON.parse(
    fs.readFileSync(path.join(registryRoot, 'components', `${componentId}.json`), 'utf8'),
  )
  for (const variant of component.variants) {
    expectedCount += 1
    const key = `${componentId}/${variant.id}`
    const screenshot = screenshots.get(key)
    if (!screenshot) {
      throw new Error(`Missing screenshot manifest entry for ${key}.`)
    }
    const htmlFile = variant.files.find((file) => file.format === 'html')
    if (screenshot.sourceSha256 !== htmlFile?.sha256) {
      throw new Error(`Stale screenshot for ${key}.`)
    }
    const screenshotPath = path.join(projectRoot, 'public', screenshot.url.replace(/^\//, ''))
    if (!fs.existsSync(screenshotPath) || fs.statSync(screenshotPath).size < 1000) {
      throw new Error(`Missing or empty screenshot file for ${key}.`)
    }
    const header = fs.readFileSync(screenshotPath).subarray(0, 3).toString('hex')
    if (header !== 'ffd8ff') {
      throw new Error(`Invalid JPEG screenshot for ${key}.`)
    }
  }
}

if (screenshots.size !== expectedCount || screenshotManifest.screenshotCount !== expectedCount) {
  throw new Error(
    `Screenshot count mismatch: expected ${expectedCount}, found ${screenshots.size}.`,
  )
}

console.log(`Verified ${expectedCount} component variant screenshots.`)
