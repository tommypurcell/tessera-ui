'use client'

import { Check, Code2, Copy, Eye, Hash, Monitor, RotateCcw, Smartphone } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

const previewWidths = [
  { label: 'Mobile', width: '340px', icon: Smartphone },
  { label: 'Tablet', width: '768px', icon: Monitor },
  { label: 'Full', width: '100%', icon: Monitor },
]

const codeFormats = [
  { id: 'html', label: 'HTML' },
  { id: 'jsx', label: 'JSX' },
  { id: 'tsx', label: 'TSX' },
]

function convertHtmlToJsx(htmlMarkup) {
  return htmlMarkup
    .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/\btabindex=/gi, 'tabIndex=')
    .replace(/\bstroke-width=/g, 'strokeWidth=')
    .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
    .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/\bfill-rule=/g, 'fillRule=')
    .replace(/\bclip-rule=/g, 'clipRule=')
    .replace(
      /<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)([^>]*?)(?<!\/)>/gi,
      '<$1$2 />',
    )
}

function toPascalCase(value) {
  return value
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, character) => character.toUpperCase())
    .replace(/^[a-z]/, (character) => character.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '')
}

function indentMarkup(markup) {
  return markup
    .split('\n')
    .map((line) => `      ${line}`)
    .join('\n')
}

function createTsxComponent(markup, componentName) {
  const jsxMarkup = convertHtmlToJsx(markup)
  const componentTypeName = `${componentName}Props`

  return `import type { HTMLAttributes } from 'react'

export type ${componentTypeName} = HTMLAttributes<HTMLDivElement>

export function ${componentName}({ className, ...props }: ${componentTypeName}) {
  return (
    <div className={className} {...props}>
${indentMarkup(jsxMarkup)}
    </div>
  )
}`
}

export default function ComponentPreview({ component, markup, tsxMarkup, category, slug, themeVisibility }) {
  const [previewWidth, setPreviewWidth] = useState('100%')
  const [isPreviewVisible, setIsPreviewVisible] = useState(true)
  const [selectedCodeFormat, setSelectedCodeFormat] = useState('html')
  const [hasCopiedCode, setHasCopiedCode] = useState(false)
  const [previewHeight, setPreviewHeight] = useState(320)
  const [editableHtml, setEditableHtml] = useState(markup)
  const iframeReference = useRef(null)
  const src = `/examples/${category}/${slug}/${component.index}${component.dark ? '-dark' : ''}.html`
  const componentName = toPascalCase(`${slug}-${component.index}${component.dark ? '-dark' : ''}`)

  const formattedCode = useMemo(() => {
    if (selectedCodeFormat === 'jsx') {
      return convertHtmlToJsx(editableHtml)
    }

    if (selectedCodeFormat === 'tsx') {
      return editableHtml === markup
        ? (tsxMarkup ?? createTsxComponent(editableHtml, componentName))
        : createTsxComponent(editableHtml, componentName)
    }

    return editableHtml
  }, [componentName, editableHtml, markup, selectedCodeFormat, tsxMarkup])

  function resizePreviewFrame() {
    if (component.wrapper) {
      return
    }

    const previewDocument = iframeReference.current?.contentDocument
    if (!previewDocument) {
      return
    }

    // Original examples can include `dark` on the document element so their
    // dark utility classes are available. The light preview must explicitly
    // opt out; the paired dark variant keeps the class intact.
    if (!component.dark) {
      previewDocument.documentElement.classList.remove('dark')
    }

    const contentHeight = Math.max(
      previewDocument.body?.scrollHeight ?? 0,
      previewDocument.documentElement?.scrollHeight ?? 0,
    )

    if (contentHeight > 0) {
      setPreviewHeight(Math.max(256, contentHeight))
    }
  }

  useEffect(() => {
    if (!isPreviewVisible || component.wrapper) {
      return undefined
    }

    const timeoutId = window.setTimeout(resizePreviewFrame, 100)
    return () => window.clearTimeout(timeoutId)
  }, [component.wrapper, isPreviewVisible, previewWidth])

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(formattedCode)
      setHasCopiedCode(true)
      window.setTimeout(() => setHasCopiedCode(false), 1600)
    } catch {
      setHasCopiedCode(false)
    }
  }

  return (
    <section
      id={component.id}
      className={`overflow-hidden rounded-lg border border-gray-200 bg-gray-50 ${themeVisibility ?? ''}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-4">
        <a href={`#${component.id}`} className="group flex items-center gap-2">
          <h2 className="text-lg font-medium text-gray-950">{component.title}</h2>
          <Hash className="size-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>

        <div className="flex items-center gap-1">
          {previewWidths.map(({ label, width, icon: Icon }) => (
            <button
              type="button"
              title={label}
              aria-label={`${label} preview`}
              key={width}
              onClick={() => setPreviewWidth(width)}
              className={`rounded p-2 ${previewWidth === width ? 'bg-gray-200 text-gray-950' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Icon className="size-4" />
            </button>
          ))}
          <button
            type="button"
            onClick={() => setIsPreviewVisible(!isPreviewVisible)}
            className="ml-1 rounded p-2 text-gray-600 hover:bg-gray-100"
            aria-label="Toggle preview and code"
          >
            {isPreviewVisible ? <Code2 className="size-4" /> : <Eye className="size-4" />}
          </button>
          <button
            type="button"
            onClick={copyCode}
            className="rounded p-2 text-gray-600 hover:bg-gray-100"
            aria-label={`Copy ${selectedCodeFormat.toUpperCase()} code`}
          >
            {hasCopiedCode ? (
              <Check className="size-4 text-green-700" />
            ) : (
              <Copy className="size-4" />
            )}
          </button>
        </div>
      </div>

      {isPreviewVisible ? (
        <iframe
          ref={iframeReference}
          src={editableHtml === markup ? src : undefined}
          srcDoc={editableHtml === markup ? undefined : editableHtml}
          title={component.title}
          loading={component.index === 1 && !component.dark ? 'eager' : 'lazy'}
          onLoad={resizePreviewFrame}
          className={`mx-auto block w-full ring-1 ring-gray-200 transition-[max-width] duration-300 ${component.wrapper ?? ''} ${component.dark ? 'bg-gray-900' : 'preview-frame--light bg-white'}`}
          style={{
            maxWidth: previewWidth,
            ...(component.wrapper ? {} : { height: `${previewHeight}px` }),
          }}
        />
      ) : (
        <div>
          <div
            role="tablist"
            aria-label="Code format"
            className="flex gap-1 border-b border-gray-800 bg-gray-950 px-4 pt-3"
          >
            {codeFormats.map(({ id, label }) => (
              <button
                type="button"
                role="tab"
                id={`${component.id}-${id}-tab`}
                aria-selected={selectedCodeFormat === id}
                aria-controls={`${component.id}-code-panel`}
                key={id}
                onClick={() => setSelectedCodeFormat(id)}
                className={`rounded-t-md px-3 py-2 text-xs font-medium ${selectedCodeFormat === id ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'}`}
              >
                {label}
              </button>
            ))}
          </div>
          {selectedCodeFormat === 'html' && (
            <div className="flex items-center justify-between gap-4 border-b border-gray-800 bg-gray-950 px-4 py-2 text-xs text-gray-400">
              <span>Edit HTML, then select the eye icon to preview your changes.</span>
              <button
                type="button"
                onClick={() => setEditableHtml(markup)}
                disabled={editableHtml === markup}
                className="inline-flex items-center gap-1 rounded px-2 py-1 font-medium text-gray-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RotateCcw className="size-3.5" />
                Reset
              </button>
            </div>
          )}
          {selectedCodeFormat === 'html' ? (
            <textarea
              id={`${component.id}-code-panel`}
              aria-labelledby={`${component.id}-${selectedCodeFormat}-tab`}
              value={formattedCode}
              onChange={(event) => setEditableHtml(event.target.value)}
              spellCheck="false"
              className="block h-96 w-full resize-y bg-gray-950 p-5 font-mono text-sm leading-6 text-gray-100 outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400"
            />
          ) : (
          <pre
            id={`${component.id}-code-panel`}
            role="tabpanel"
            aria-labelledby={`${component.id}-${selectedCodeFormat}-tab`}
            className="max-h-[36rem] overflow-auto bg-gray-950 p-5 text-sm leading-6 text-gray-100"
          >
            <code>{formattedCode}</code>
          </pre>
          )}
        </div>
      )}

      {component.description && (
        <p className="border-t border-gray-200 bg-white px-4 py-3 text-sm text-gray-600">
          {component.description}
        </p>
      )}
    </section>
  )
}
