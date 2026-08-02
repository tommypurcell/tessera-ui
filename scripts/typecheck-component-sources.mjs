import fs from 'node:fs'
import path from 'node:path'

import ts from 'typescript'

const componentsRoot = path.join(process.cwd(), 'registry', 'components')

function findTsxFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      return findTsxFiles(entryPath)
    }
    return entry.isFile() && entry.name.endsWith('.tsx') ? [entryPath] : []
  })
}

const sourceFiles = findTsxFiles(componentsRoot)
const program = ts.createProgram(sourceFiles, {
  allowSyntheticDefaultImports: true,
  jsx: ts.JsxEmit.ReactJSX,
  lib: ['lib.es2022.d.ts', 'lib.dom.d.ts'],
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  noEmit: true,
  skipLibCheck: true,
  strict: true,
  target: ts.ScriptTarget.ES2022,
})
const diagnostics = ts.getPreEmitDiagnostics(program)

if (diagnostics.length > 0) {
  throw new Error(
    ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCanonicalFileName: (filename) => filename,
      getCurrentDirectory: () => process.cwd(),
      getNewLine: () => '\n',
    }),
  )
}

console.log(`Typechecked ${sourceFiles.length} component source files.`)
