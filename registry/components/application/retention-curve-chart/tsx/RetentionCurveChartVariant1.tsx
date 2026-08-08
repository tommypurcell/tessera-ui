import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RetentionCurveChartVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RetentionCurveChartVariant1({
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
}: RetentionCurveChartVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">User retention</p>
          <p className="text-xs text-gray-500">% of cohort still active, by day since signup</p>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-gray-100 p-0.5 text-xs font-medium">
          <button type="button" aria-pressed="true" className="rounded px-2 py-1 bg-white text-gray-900 shadow-sm">Jun cohort</button>
          <button type="button" aria-pressed="false" className="rounded px-2 py-1 text-gray-500">May cohort</button>
          <button type="button" aria-pressed="false" className="rounded px-2 py-1 text-gray-500">Apr cohort</button>
        </div>
      </div>

      <svg viewBox="0 0 480 200" className="mt-4 w-full">
          <line x1="0" y1="0.0" x2="480" y2="0.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="50.0" x2="480" y2="50.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="100.0" x2="480" y2="100.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="150.0" x2="480" y2="150.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="200.0" x2="480" y2="200.0" stroke="#e5e7eb" strokeWidth="1" />
          <path d="M0.0,0.0 L80.0,17.6 L160.0,47.2 L240.0,88.7 L320.0,126.9 L400.0,143.4 L480.0,151.7 L480.0,200.0 L0.0,200.0 Z" fill="rgba(59,130,246,0.12)" stroke="none" />
          <path d="M0.0,0.0 L80.0,17.6 L160.0,47.2 L240.0,88.7 L320.0,126.9 L400.0,143.4 L480.0,151.7" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="0.0" cy="0.0" r="3" fill="#3b82f6" />
          <circle cx="80.0" cy="17.6" r="3" fill="#3b82f6" />
          <circle cx="160.0" cy="47.2" r="3" fill="#3b82f6" />
          <circle cx="240.0" cy="88.7" r="3" fill="#3b82f6" />
          <circle cx="320.0" cy="126.9" r="3" fill="#3b82f6" />
          <circle cx="400.0" cy="143.4" r="3" fill="#3b82f6" />
          <circle cx="480.0" cy="151.7" r="3" fill="#3b82f6" />
      </svg>

      <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
        <span>Day 0</span>
        <span>Day 1</span>
        <span>Day 3</span>
        <span>Day 7</span>
        <span>Day 14</span>
        <span>Day 21</span>
        <span>Day 30</span>
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
