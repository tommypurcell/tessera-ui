import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const registryRoot = path.join(process.cwd(), 'public', 'registry')
const indexPath = path.join(registryRoot, 'registry.json')

if (!fs.existsSync(indexPath)) {
  throw new Error('Generated registry index is missing.')
}

const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'))
if (index.componentCount !== index.components.length) {
  throw new Error(`Registry count mismatch: ${index.componentCount} != ${index.components.length}`)
}

const ids = new Set()
let fileCount = 0
for (const summary of index.components) {
  if (ids.has(summary.id)) {
    throw new Error(`Duplicate registry id: ${summary.id}`)
  }
  ids.add(summary.id)
  const manifestPath = path.join(registryRoot, 'components', `${summary.id}.json`)
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Missing manifest: ${summary.id}`)
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  for (const sourceFile of manifest.files) {
    const sourcePath = path.resolve(registryRoot, sourceFile.path)
    if (!sourcePath.startsWith(`${registryRoot}${path.sep}`) || !fs.existsSync(sourcePath)) {
      throw new Error(`Missing or unsafe source for ${summary.id}: ${sourceFile.path}`)
    }
    const hash = crypto.createHash('sha256').update(fs.readFileSync(sourcePath)).digest('hex')
    if (hash !== sourceFile.sha256) {
      throw new Error(`Checksum mismatch: ${sourceFile.path}`)
    }
    fileCount += 1
  }
}

console.log(`Verified ${index.componentCount} component manifests and ${fileCount} source files.`)
