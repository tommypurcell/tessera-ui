import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FloatingActionMenuVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function FloatingActionMenuVariant1Dark({
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
}: FloatingActionMenuVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="group relative">
            <input type="checkbox" id="fab-toggle-dark" className="peer sr-only" checked />
      
            <div className="pointer-events-none absolute right-0 bottom-full mb-3 flex flex-col items-end gap-3 opacity-0 transition-all duration-150 peer-checked:pointer-events-auto peer-checked:opacity-100">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 shadow-sm">New document</span>
                <button
                  type="button"
                  aria-label="New document"
                  className="flex size-11 items-center justify-center rounded-full bg-gray-800 text-gray-200 shadow-md ring-1 ring-white/10 transition hover:bg-gray-700"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5.5 5H6.5A2.5 2.5 0 014 18.5v-13A2.5 2.5 0 016.5 3h7.379a1 1 0 01.707.293l4.121 4.121a1 1 0 01.293.707V18.5a2.5 2.5 0 01-2.5 2.5z" />
                  </svg>
                </button>
              </div>
      
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 shadow-sm">Upload file</span>
                <button
                  type="button"
                  aria-label="Upload file"
                  className="flex size-11 items-center justify-center rounded-full bg-gray-800 text-gray-200 shadow-md ring-1 ring-white/10 transition hover:bg-gray-700"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 7.5L12 3m0 0L7.5 7.5M12 3v13.5" />
                  </svg>
                </button>
              </div>
      
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 shadow-sm">New folder</span>
                <button
                  type="button"
                  aria-label="New folder"
                  className="flex size-11 items-center justify-center rounded-full bg-gray-800 text-gray-200 shadow-md ring-1 ring-white/10 transition hover:bg-gray-700"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                  </svg>
                </button>
              </div>
            </div>
      
            <label
              htmlFor="fab-toggle-dark"
              className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-400 peer-checked:rotate-45"
            >
              <span className="sr-only">Toggle quick actions</span>
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </label>
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
