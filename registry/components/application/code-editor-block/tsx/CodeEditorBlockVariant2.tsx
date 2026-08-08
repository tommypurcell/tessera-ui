import { Fragment, type ReactNode } from 'react'

export type CodeEditorBlockLine = {
  /** Rendered line content — pass your own tokenized spans for syntax highlighting. */
  content: ReactNode
  /** Highlights the line's gutter and background, e.g. for the current line or a diagnostic. */
  active?: boolean
}

export type CodeEditorBlockVariant2Props = {
  fileName: string
  lines: CodeEditorBlockLine[]
  /** Accessible label describing the language and file, e.g. "Python code, seed_users.py". */
  ariaLabel: string
  onCopy?: () => void
}

/**
 * Copy-and-own Tailwind component. Code editor block with a file-name header
 * and a copy-to-clipboard action instead of a tab bar — wire onCopy to your
 * own clipboard call.
 */
export function CodeEditorBlock({ fileName, lines, ariaLabel, onCopy }: CodeEditorBlockVariant2Props) {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-gray-950">
      <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-2">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3.5 text-amber-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C9 2 8 3.5 8 5v2h4v1H6c-1.5 0-3 1-3 4s1.5 4 3 4h1v-2c0-1.5 1-3 3-3h4c1.5 0 3-1 3-3V5c0-1.5-1-3-3-3h-2zm-1.5 2a.75.75 0 110 1.5.75.75 0 010-1.5z" />
          </svg>
          <span className="text-xs font-medium text-gray-300">{fileName}</span>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Copy
        </button>
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
