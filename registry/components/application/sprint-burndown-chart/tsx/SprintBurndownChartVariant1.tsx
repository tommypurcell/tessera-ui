import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SprintBurndownChartVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SprintBurndownChartVariant1({
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
}: SprintBurndownChartVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">Sprint 24 burndown</p>
          <p className="text-xs text-gray-500">44 points remaining &middot; 4 days left</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><span className="h-0.5 w-3 rounded-full" style={{backgroundColor: '#d1d5db'}}></span>Ideal</span>
          <span className="flex items-center gap-1.5"><span className="h-0.5 w-3 rounded-full" style={{backgroundColor: '#3b82f6'}}></span>Actual</span>
        </div>
      </div>

      <svg viewBox="0 0 480 200" className="mt-4 w-full">
          <line x1="0" y1="0.0" x2="480" y2="0.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="50.0" x2="480" y2="50.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="100.0" x2="480" y2="100.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="150.0" x2="480" y2="150.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="200.0" x2="480" y2="200.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="288.0" y1="0" x2="288.0" y2="200" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M0.0,0.0 L48.0,20.0 L96.0,40.0 L144.0,60.0 L192.0,80.0 L240.0,100.0 L288.0,120.0 L336.0,140.0 L384.0,160.0 L432.0,180.0 L480.0,200.0" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 4" />
          <path d="M0.0,0.0 L48.0,15.0 L96.0,30.0 L144.0,37.5 L192.0,55.0 L240.0,75.0 L288.0,90.0" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="288.0" cy="90.0" r="4" fill="#3b82f6" stroke="white" strokeWidth="2" />
      </svg>

      <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
        <span>Day 0</span>
        <span className="font-medium" style={{color: '#ef4444'}}>Today</span>
        <span>Day 10</span>
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
