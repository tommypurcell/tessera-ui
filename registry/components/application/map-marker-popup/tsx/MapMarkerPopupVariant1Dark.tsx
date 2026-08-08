import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MapMarkerPopupVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MapMarkerPopupVariant1Dark({
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
}: MapMarkerPopupVariant1DarkProps) {
  const defaultContent = (
    <>
      <div
            className="relative flex h-64 w-full max-w-md items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-[radial-gradient(circle_at_1px_1px,#374151_1px,transparent_0)] [background-size:18px_18px]"
          >
            <div className="relative">
              <div className="absolute left-1/2 top-full flex -translate-x-1/2 flex-col items-center">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 -translate-y-1 text-white">
                  <path fillRule="evenodd" d="M11.54 22.351a.75.75 0 0 0 .92 0 21.3 21.3 0 0 0 3.463-3.618c1.087-1.483 2.077-3.29 2.077-5.483a8 8 0 1 0-16 0c0 2.192.99 4 2.077 5.483a21.3 21.3 0 0 0 3.463 3.618ZM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd" />
                </svg>
              </div>
      
              <div
                role="dialog"
                aria-label="Fern &amp; Ash Café"
                className="relative -translate-y-8 w-64 overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-lg shadow-black/40"
              >
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=140&fit=crop" alt="" className="h-24 w-full object-cover" />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-white">Fern &amp; Ash Café</h3>
                  <p className="mt-0.5 text-xs text-gray-400">4.8 ★ (320) · Coffee shop</p>
                  <p className="mt-1 text-xs text-gray-400">118 Elm Street, Austin, TX</p>
                  <a
                    href="#"
                    className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-white hover:underline"
                  >
                    Directions
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </a>
                </div>
                <div className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-b border-r border-gray-700 bg-gray-900"></div>
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
