import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MetricTrendGridVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MetricTrendGridVariant1Dark({
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
}: MetricTrendGridVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="grid w-full max-w-2xl grid-cols-3 gap-3">
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
          <p className="text-xs font-medium text-gray-400">Revenue</p>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div>
              <p className="text-xl font-semibold text-white">$48.2K</p>
              <p className="mt-0.5 text-xs font-medium text-emerald-400">+12.4%</p>
            </div>
            <svg viewBox="0 0 64 24" className="h-6 w-16 shrink-0"><polyline points="0.0,8.6 7.1,6.6 14.2,0.0 21.3,3.2 28.4,5.7 35.6,10.9 42.7,15.0 49.8,20.5 56.9,24.0 64.0,22.4" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
          <p className="text-xs font-medium text-gray-400">Active users</p>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div>
              <p className="text-xl font-semibold text-white">8,942</p>
              <p className="mt-0.5 text-xs font-medium text-emerald-400">+3.1%</p>
            </div>
            <svg viewBox="0 0 64 24" className="h-6 w-16 shrink-0"><polyline points="0.0,24.0 7.1,15.5 14.2,16.1 21.3,16.0 28.4,7.5 35.6,9.6 42.7,19.1 49.8,6.3 56.9,0.0 64.0,8.4" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
          <p className="text-xs font-medium text-gray-400">Churn rate</p>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div>
              <p className="text-xl font-semibold text-white">2.4%</p>
              <p className="mt-0.5 text-xs font-medium text-emerald-400">-0.8%</p>
            </div>
            <svg viewBox="0 0 64 24" className="h-6 w-16 shrink-0"><polyline points="0.0,18.3 7.1,24.0 14.2,13.5 21.3,19.0 28.4,14.8 35.6,4.0 42.7,10.9 49.8,11.2 56.9,9.7 64.0,0.0" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
          <p className="text-xs font-medium text-gray-400">Avg. session</p>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div>
              <p className="text-xl font-semibold text-white">4m 12s</p>
              <p className="mt-0.5 text-xs font-medium text-emerald-400">+18s</p>
            </div>
            <svg viewBox="0 0 64 24" className="h-6 w-16 shrink-0"><polyline points="0.0,8.8 7.1,12.1 14.2,15.7 21.3,24.0 28.4,17.5 35.6,7.7 42.7,6.8 49.8,15.4 56.9,8.0 64.0,0.0" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
          <p className="text-xs font-medium text-gray-400">Support tickets</p>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div>
              <p className="text-xl font-semibold text-white">142</p>
              <p className="mt-0.5 text-xs font-medium text-red-400">+22</p>
            </div>
            <svg viewBox="0 0 64 24" className="h-6 w-16 shrink-0"><polyline points="0.0,4.6 7.1,16.7 14.2,3.8 21.3,0.9 28.4,0.0 35.6,1.5 42.7,18.3 49.8,24.0 56.9,13.0 64.0,7.4" fill="none" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
          <p className="text-xs font-medium text-gray-400">Error rate</p>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div>
              <p className="text-xl font-semibold text-white">0.31%</p>
              <p className="mt-0.5 text-xs font-medium text-red-400">+0.06%</p>
            </div>
            <svg viewBox="0 0 64 24" className="h-6 w-16 shrink-0"><polyline points="0.0,6.7 7.1,3.5 14.2,0.0 21.3,6.9 28.4,12.2 35.6,16.8 42.7,24.0 49.8,21.6 56.9,20.7 64.0,21.0" fill="none" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
