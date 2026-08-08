import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MarkdownEditorVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Replaces the component's default content while preserving its outer container. */
  children?: ReactNode
  /** Transforms the default content without copying the component's internal markup. */
  renderContent?: (defaultContent: ReactNode) => ReactNode
  /** Renders immediately before the main content. */
  before?: ReactNode
  /** Renders immediately after the main content. */
  after?: ReactNode
  /** Selects an application state. The default state preserves the original component UI. */
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

/**
 * Copy-and-own Tailwind component with content slots and explicit application states.
 * Omitting the optional props preserves the original markup and visual design.
 */
export function MarkdownEditorVariant1({
  className,
  children,
  renderContent,
  before,
  after,
  state = 'default',
  loadingContent,
  emptyContent,
  errorContent,
  ...props
}: MarkdownEditorVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-1 border-b border-gray-200 px-2 py-1.5">
        <button type="button" className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Bold">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3.75h6a3.375 3.375 0 0 1 0 6.75h-6v-6.75Zm0 6.75h6.75a3.375 3.375 0 0 1 0 6.75h-6.75V10.5Z" />
          </svg>
        </button>
        <button type="button" className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Italic">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.75h6.5m-9.5 16.5h6.5M13 3.75l-3 16.5" />
          </svg>
        </button>
        <button type="button" className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Link">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
        </button>
        <button type="button" className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Bulleted list">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </button>
        <button type="button" className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Code">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.25 9-5.25 5.25M9 9l5.25 5.25M17.25 6.75 21 12l-3.75 5.25m-10.5 0L3 12l3.75-5.25" />
          </svg>
        </button>

        <div className="ml-auto flex items-center gap-1 rounded-md bg-gray-100 p-0.5 text-xs font-medium">
          <button type="button" aria-pressed="true" className="rounded px-2 py-1 bg-white text-gray-900 shadow-sm">Split</button>
          <button type="button" aria-pressed="false" className="rounded px-2 py-1 text-gray-500 hover:text-gray-700">Preview</button>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <textarea
          className="h-64 w-full resize-none border-0 bg-transparent p-3 font-mono text-sm text-gray-800 focus:outline-none focus:ring-0"
          spellCheck={false}
          defaultValue={`## Release notes

**v2.4.0** ships three changes:

- Faster cold start
- Fixed dark mode flicker
- New \`/export\` command

See the [migration guide](#) for details.`}
        />

        <div className="h-64 overflow-y-auto p-3 text-sm text-gray-800">
          <h2 className="text-base font-semibold text-gray-900">Release notes</h2>
          <p className="mt-2"><strong className="font-semibold text-gray-900">v2.4.0</strong> ships three changes:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Faster cold start</li>
            <li>Fixed dark mode flicker</li>
            <li>New <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800">/export</code> command</li>
          </ul>
          <p className="mt-2">See the <a href="#" className="text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500">migration guide</a> for details.</p>
        </div>
      </div>
    </div>
    </>
  )
  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? <span role="status">Loading…</span>)
      : state === 'empty'
        ? (emptyContent ?? <span>No content available.</span>)
        : state === 'error'
          ? (errorContent ?? <span role="alert">Something went wrong.</span>)
          : renderContent
            ? renderContent(defaultContent)
            : defaultContent)

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
