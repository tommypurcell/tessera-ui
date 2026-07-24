'use client'
import { useEffect, useState } from 'react'
import { loadConfig } from '../../../src/lib/dark-mode/config.js'
import { transformHtmlDom } from '../../../src/lib/dark-mode/transform-html.js'

const initialHtml = '<div class="bg-white p-6 text-gray-900">\n  <h2 class="text-xl font-semibold">Example card</h2>\n  <p class="mt-2 text-gray-600">Generate a starting dark-mode variant.</p>\n</div>'

export default function DarkModeGeneratorPage() {
  const [source, setSource] = useState(initialHtml)
  const [result, setResult] = useState('')
  const [configData, setConfigData] = useState(null)

  useEffect(() => {
    setConfigData(loadConfig())
  }, [])

  function generateVariant() {
    if (!configData) {
      return
    }

    setResult(transformHtmlDom(source, configData).darkHtml)
  }
  return <main id="main-content" className="mx-auto max-w-7xl px-4 py-10"><div className="max-w-3xl"><p className="text-sm font-medium text-gray-600">Component tool</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">Dark Mode Generator</h1><p className="mt-4 text-lg leading-8 text-gray-600">Paste Tailwind HTML and create a simple dark-mode starting point in the browser. Review the result before using it in production.</p></div><div className="mt-10 grid gap-6 lg:grid-cols-2"><label className="block"><span className="text-sm font-medium">Source HTML</span><textarea value={source} onChange={(event) => setSource(event.target.value)} className="mt-2 min-h-96 w-full rounded-lg border border-gray-300 p-4 font-mono text-sm leading-6" /></label><label className="block"><span className="text-sm font-medium">Generated HTML</span><textarea readOnly value={result} placeholder="Your generated dark-mode HTML will appear here." className="mt-2 min-h-96 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm leading-6" /></label></div><button onClick={generateVariant} className="mt-6 rounded-md bg-gray-950 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Generate dark-mode variant</button></main>
}
