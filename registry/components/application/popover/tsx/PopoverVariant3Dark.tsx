import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PopoverVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PopoverVariant3Dark({
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
}: PopoverVariant3DarkProps) {
  const defaultContent = (
    <>
      <div className="relative inline-block">
            <button
              type="button"
              aria-expanded="true"
              aria-haspopup="dialog"
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-100 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
              </svg>
              Share
            </button>
      
            <div
              role="dialog"
              aria-label="Share this page"
              className="absolute left-1/2 top-full z-10 mt-2 w-80 -translate-x-1/2 rounded-lg border border-gray-700 bg-gray-900 p-4 text-left shadow-lg shadow-black/40"
            >
              <div className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-l border-t border-gray-700 bg-gray-900"></div>
              <div className="relative">
                <h3 className="text-sm font-semibold text-white">Share this page</h3>
                <p className="mt-1 text-sm text-gray-400">Anyone with the link can view.</p>
                <div className="mt-3 flex items-center gap-2">
                  <label htmlFor="popover-share-link-dark" className="sr-only">Page link</label>
                  <input
                    id="popover-share-link-dark"
                    type="text"
                    readonly
                    value="https://tessera.dev/s/9fk2p"
                    className="block w-full rounded-md border-gray-700 bg-gray-800 text-sm text-gray-200 shadow-sm focus:border-white focus:ring-white"
                  />
                  <button
                    type="button"
                    className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200"
                  >
                    Copy
                  </button>
                </div>
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
