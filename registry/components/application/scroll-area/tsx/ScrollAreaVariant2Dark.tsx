import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ScrollAreaVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ScrollAreaVariant2Dark({
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
}: ScrollAreaVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-md">
            <h3 className="mb-2 text-sm font-semibold text-white">Browse categories</h3>
            <div className="tessera-scroll-area-x flex gap-2 overflow-x-auto pb-3">
              <button type="button" className="shrink-0 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-gray-900">
                All
              </button>
              <button type="button" className="shrink-0 rounded-full border border-gray-700 bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800">
                Design
              </button>
              <button type="button" className="shrink-0 rounded-full border border-gray-700 bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800">
                Engineering
              </button>
              <button type="button" className="shrink-0 rounded-full border border-gray-700 bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800">
                Marketing
              </button>
              <button type="button" className="shrink-0 rounded-full border border-gray-700 bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800">
                Sales
              </button>
              <button type="button" className="shrink-0 rounded-full border border-gray-700 bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800">
                Support
              </button>
              <button type="button" className="shrink-0 rounded-full border border-gray-700 bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800">
                Finance
              </button>
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
