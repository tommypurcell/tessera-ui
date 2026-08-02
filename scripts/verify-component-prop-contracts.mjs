import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const registryRoot = path.join(projectRoot, 'registry', 'components')
const contractPath = path.join(projectRoot, 'registry', 'default-ui-contracts.json')
const defaultContentPrefix = '  const defaultContent = (\n    <>\n'
const defaultContentSuffix = '    </>\n  )\n  const content ='

function findFiles(directory, filename) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      return findFiles(entryPath, filename)
    }
    return entry.isFile() && entry.name === filename ? [entryPath] : []
  })
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex')
}

const contract = JSON.parse(fs.readFileSync(contractPath, 'utf8'))

if (contract.schemaVersion !== 1 || Object.keys(contract.files).length === 0) {
  throw new Error('The default UI contract is missing or empty.')
}

for (const [relativePath, expectedHash] of Object.entries(contract.files)) {
  const source = fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
  const markupStart = source.indexOf(defaultContentPrefix) + defaultContentPrefix.length
  const markupEnd = source.indexOf(defaultContentSuffix, markupStart)

  if (markupStart < defaultContentPrefix.length || markupEnd === -1) {
    throw new Error(`Missing default content boundary: ${relativePath}`)
  }

  const actualHash = sha256(source.slice(markupStart, markupEnd))

  if (actualHash !== expectedHash) {
    throw new Error(`Default UI changed in ${relativePath}`)
  }
}

const registryFiles = findFiles(registryRoot, 'registry.json')
const variantSources = new Set()

for (const registryFile of registryFiles) {
  const entry = JSON.parse(fs.readFileSync(registryFile, 'utf8'))

  for (const variant of entry.variants) {
    variantSources.add(path.resolve(path.dirname(registryFile), variant.source.tsx))
  }
}

const missingProps = []

for (const sourcePath of variantSources) {
  const relativePath = path.relative(projectRoot, sourcePath).split(path.sep).join('/')
  const source = fs.readFileSync(sourcePath, 'utf8')
  const hasUniversalContract = Object.hasOwn(contract.files, relativePath)
  const hasTypedProps = /(?:export\s+)?type\s+\w*Props\s*=|interface\s+\w*Props\s*/.test(source)

  if (!hasUniversalContract && !hasTypedProps) {
    missingProps.push(relativePath)
  }
}

if (missingProps.length > 0) {
  throw new Error(`Installable React sources without typed props:\n${missingProps.join('\n')}`)
}

console.log(
  `Verified ${Object.keys(contract.files).length} unchanged default UIs and typed props for ${variantSources.size} installable React sources.`,
)
