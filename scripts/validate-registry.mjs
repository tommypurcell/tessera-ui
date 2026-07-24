import fs from 'node:fs'
import path from 'node:path'

import { componentRegistrySchema } from '../src/lib/registry-schema.js'

const registryRoot = path.join(process.cwd(), 'registry', 'components')

function findRegistryFiles(directoryPath) {
  return fs.readdirSync(directoryPath, { withFileTypes: true }).flatMap((directoryEntry) => {
    const entryPath = path.join(directoryPath, directoryEntry.name)

    if (directoryEntry.isDirectory()) {
      return findRegistryFiles(entryPath)
    }

    return directoryEntry.name === 'registry.json' ? [entryPath] : []
  })
}

function validateRegistryFile(registryFilePath) {
  const registryDirectory = path.dirname(registryFilePath)
  const parsedRegistry = componentRegistrySchema.safeParse(
    JSON.parse(fs.readFileSync(registryFilePath, 'utf8')),
  )

  if (!parsedRegistry.success) {
    const formattedErrors = parsedRegistry.error.issues
      .map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`)
      .join('\n')
    throw new Error(`Invalid registry entry: ${registryFilePath}\n${formattedErrors}`)
  }

  for (const registryVariant of parsedRegistry.data.variants) {
    for (const sourcePath of Object.values(registryVariant.source)) {
      const absoluteSourcePath = path.resolve(registryDirectory, sourcePath)
      if (!fs.existsSync(absoluteSourcePath)) {
        throw new Error(`Missing source file for ${parsedRegistry.data.name}: ${sourcePath}`)
      }
    }
  }
}

const registryFiles = findRegistryFiles(registryRoot)
registryFiles.forEach(validateRegistryFile)
console.log(`Validated ${registryFiles.length} registry entries.`)
