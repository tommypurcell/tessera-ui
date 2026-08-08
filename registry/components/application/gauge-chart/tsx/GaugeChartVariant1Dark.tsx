import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type GaugeChartVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function GaugeChartVariant1Dark({
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
}: GaugeChartVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xs rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-white">Server load</h3>
      
            <div className="mt-2" role="img" aria-label="Gauge showing 72 percent, in the warning zone">
              <svg viewBox="0 0 200 100" className="w-full">
                <path d="M 20 100 A 80 80 0 0 1 82 22" fill="none" stroke="#22c55e" strokeWidth="16" strokeLinecap="round" />
                <path d="M 86 20 A 80 80 0 0 1 114 20" fill="none" stroke="#eab308" strokeWidth="16" strokeLinecap="round" />
                <path d="M 118 22 A 80 80 0 0 1 180 100" fill="none" stroke="#ef4444" strokeWidth="16" strokeLinecap="round" />
                <g transform="rotate(129.6 100 100)">
                  <line x1="100" y1="100" x2="100" y2="45" stroke="#f9fafb" strokeWidth="4" strokeLinecap="round" />
                </g>
                <circle cx="100" cy="100" r="7" fill="#f9fafb" />
              </svg>
            </div>
      
            <div className="mt-3 text-center">
              <span className="text-2xl font-bold text-white">72%</span>
            </div>
      
            <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
              <span>0</span>
              <span className="font-medium text-amber-400">Warning zone</span>
              <span>100</span>
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
