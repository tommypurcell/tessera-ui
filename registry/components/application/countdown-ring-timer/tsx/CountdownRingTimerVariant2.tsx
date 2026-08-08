import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CountdownRingTimerVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CountdownRingTimerVariant2({
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
}: CountdownRingTimerVariant2Props) {
  const defaultContent = (
    <>
      <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3">
            <div id="ring-2" className="relative flex size-10 shrink-0 items-center justify-center">
              <svg className="size-10 -rotate-90" viewBox="0 0 40 40" aria-hidden="true">
                <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-gray-100" />
                <circle
                  className="js-ring text-orange-500 transition-[stroke-dashoffset] duration-1000 ease-linear"
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke-dasharray="100.5"
                  stroke-dashoffset="20.1"
                />
              </svg>
              <span className="js-time absolute text-[10px] font-semibold tabular-nums text-gray-900">12</span>
            </div>
      
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">Session expiring</p>
              <p className="text-xs text-gray-500">You'll be signed out automatically</p>
            </div>
      
            <button
              type="button"
              className="shrink-0 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-gray-700"
            >
              Stay signed in
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
