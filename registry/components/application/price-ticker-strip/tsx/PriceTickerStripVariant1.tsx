import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PriceTickerStripVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PriceTickerStripVariant1({
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
}: PriceTickerStripVariant1Props) {
  const defaultContent = (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-100 bg-white py-3">
            <div className="ticker-track flex w-max items-center gap-8 px-4">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm font-semibold text-gray-900">BTC</span>
                <span className="font-mono text-sm text-gray-700">$67,214.50</span>
                <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                  <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4l8 10H4l8-10z" /></svg>
                  2.4%
                </span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm font-semibold text-gray-900">ETH</span>
                <span className="font-mono text-sm text-gray-700">$3,481.20</span>
                <span className="flex items-center gap-0.5 text-xs font-medium text-red-600">
                  <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 20L4 10h16l-8 10z" /></svg>
                  1.1%
                </span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm font-semibold text-gray-900">SOL</span>
                <span className="font-mono text-sm text-gray-700">$178.63</span>
                <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                  <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4l8 10H4l8-10z" /></svg>
                  5.7%
                </span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm font-semibold text-gray-900">AAPL</span>
                <span className="font-mono text-sm text-gray-700">$227.85</span>
                <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                  <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4l8 10H4l8-10z" /></svg>
                  0.6%
                </span>
              </div>
              <div aria-hidden="true" className="flex items-center gap-8">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-900">BTC</span>
                  <span className="font-mono text-sm text-gray-700">$67,214.50</span>
                  <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                    <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4l8 10H4l8-10z" /></svg>
                    2.4%
                  </span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-900">ETH</span>
                  <span className="font-mono text-sm text-gray-700">$3,481.20</span>
                  <span className="flex items-center gap-0.5 text-xs font-medium text-red-600">
                    <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 20L4 10h16l-8 10z" /></svg>
                    1.1%
                  </span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-900">SOL</span>
                  <span className="font-mono text-sm text-gray-700">$178.63</span>
                  <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                    <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4l8 10H4l8-10z" /></svg>
                    5.7%
                  </span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-900">AAPL</span>
                  <span className="font-mono text-sm text-gray-700">$227.85</span>
                  <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                    <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4l8 10H4l8-10z" /></svg>
                    0.6%
                  </span>
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
