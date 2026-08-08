import { Fragment, type ReactNode } from 'react'

export type CodeEditorBlockLine = {
  /** Rendered line content — pass your own tokenized spans for syntax highlighting. */
  content: ReactNode
  /** Highlights the line's gutter and background, e.g. for the current line or a diagnostic. */
  active?: boolean
}

export type CodeEditorBlockTab = {
  label: string
  active?: boolean
}

export type CodeEditorBlockVariant1DarkProps = {
  tabs: CodeEditorBlockTab[]
  lines: CodeEditorBlockLine[]
  /** Accessible label describing the language and file, e.g. "TypeScript code, use-debounce.ts". */
  ariaLabel: string
}

/**
 * Copy-and-own Tailwind component. Code editor chrome adapted for a dark
 * page surface — the editor itself is already dark, so this variant mainly
 * adjusts the surrounding border and card background.
 */
export function CodeEditorBlock({ tabs, lines, ariaLabel }: CodeEditorBlockVariant1DarkProps) {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-gray-800 bg-black">
      <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-2">
        {tabs.map((tab) =>
          tab.active ? (
            <span
              key={tab.label}
              className="rounded-t-md border-t-2 border-blue-500 bg-black px-3 py-1 text-xs font-medium text-gray-100"
            >
              {tab.label}
            </span>
          ) : (
            <span key={tab.label} className="px-3 py-1 text-xs font-medium text-gray-500">
              {tab.label}
            </span>
          ),
        )}
      </div>
      <pre className="overflow-x-auto p-0 font-mono text-sm leading-6" aria-label={ariaLabel}>
        <code className="grid grid-cols-[3rem_1fr]">
          {lines.map((line, index) => (
            <Fragment key={index}>
              <span
                className={`border-r border-gray-800 px-3 text-right text-gray-600 select-none ${line.active ? 'bg-gray-800/60 text-gray-300' : ''}`}
              >
                {index + 1}
              </span>
              <span className={`px-4 text-gray-200 ${line.active ? 'bg-gray-800/60' : ''}`}>
                {line.content}
              </span>
            </Fragment>
          ))}
        </code>
      </pre>
    </div>
  )
}
