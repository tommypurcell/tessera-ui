import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RateLimitNoticeVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RateLimitNoticeVariant2({
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
}: RateLimitNoticeVariant2Props) {
  const defaultContent = (
    <>
      <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900">API rate limit hit</p>
              <p id="rl-2-status" className="text-xs text-gray-500">Retry available in <span className="font-mono tabular-nums">10s</span></p>
            </div>
      
            <button
              id="rl-2-btn"
              type="button"
              disabled
              className="shrink-0 rounded-md bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-400 transition disabled:cursor-not-allowed"
            >
              Retry
            </button>
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
