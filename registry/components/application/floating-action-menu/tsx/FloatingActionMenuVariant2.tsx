import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FloatingActionMenuVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function FloatingActionMenuVariant2({
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
}: FloatingActionMenuVariant2Props) {
  const defaultContent = (
    <>
      <div className="group relative">
            <input type="checkbox" id="fab2-toggle" className="peer sr-only" checked />
      
            <div className="pointer-events-none absolute right-1.5 bottom-full mb-4 flex flex-col items-center gap-3 opacity-0 transition-all duration-150 peer-checked:pointer-events-auto peer-checked:opacity-100">
              <button
                type="button"
                aria-label="Share"
                className="flex size-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md ring-1 ring-gray-900/10 transition hover:bg-gray-50"
              >
                <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342a4.5 4.5 0 100-2.684m0 2.684a4.5 4.5 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a4.5 4.5 0 108.632-2.684 4.5 4.5 0 00-8.632 2.684zm0 9.632a4.5 4.5 0 108.632 2.684 4.5 4.5 0 00-8.632-2.684z" />
                </svg>
              </button>
      
              <button
                type="button"
                aria-label="Print"
                className="flex size-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md ring-1 ring-gray-900/10 transition hover:bg-gray-50"
              >
                <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659" />
                </svg>
              </button>
      
              <button
                type="button"
                aria-label="Comment"
                className="flex size-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md ring-1 ring-gray-900/10 transition hover:bg-gray-50"
              >
                <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.076-.163-3.02-.462L3 21l1.607-3.822C3.59 15.867 3 14.482 3 13c0-4.418 4.03-8 9-8s9 3.582 9 7z" />
                </svg>
              </button>
            </div>
      
            <label
              htmlFor="fab2-toggle"
              className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition hover:bg-gray-800 peer-checked:rotate-45"
            >
              <span className="sr-only">Toggle share options</span>
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
