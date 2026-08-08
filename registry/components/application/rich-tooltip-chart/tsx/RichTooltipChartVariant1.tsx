import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RichTooltipChartVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RichTooltipChartVariant1({
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
}: RichTooltipChartVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">Weekly active users</p>

      <div className="relative mt-24">
        <svg viewBox="0 0 320 120" className="w-full overflow-visible" aria-hidden="true">
          <line x1="0" y1="20" x2="320" y2="20" className="stroke-gray-100" strokeWidth="1" />
          <line x1="0" y1="60" x2="320" y2="60" className="stroke-gray-100" strokeWidth="1" />
          <line x1="0" y1="100" x2="320" y2="100" className="stroke-gray-100" strokeWidth="1" />

          <polyline
            points="0,90 53,70 107,75 160,40 213,50 267,15 320,25"
            fill="none"
            className="stroke-blue-500"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,100 53,95 107,80 160,85 213,65 267,60 320,45"
            fill="none"
            className="stroke-violet-400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <line x1="267" y1="0" x2="267" y2="120" className="stroke-gray-200" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="267" cy="15" r="4" className="fill-blue-500 stroke-white" strokeWidth="2" />
          <circle cx="267" cy="60" r="4" className="fill-violet-400 stroke-white" strokeWidth="2" />
        </svg>

        <div className="absolute left-[83.4375%] top-0 w-44 -translate-x-1/2 -translate-y-[calc(100%+12px)] rounded-lg border border-gray-200 bg-white p-3 text-left shadow-lg shadow-gray-900/5">
          <p className="text-xs font-medium text-gray-500">Thursday, Jun 12</p>
          <dl className="mt-2 space-y-1.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <span className="size-2 shrink-0 rounded-full bg-blue-500"></span>
                <dt className="text-xs text-gray-600">Desktop</dt>
              </div>
              <dd className="text-xs font-semibold text-gray-900">4,812</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <span className="size-2 shrink-0 rounded-full bg-violet-400"></span>
                <dt className="text-xs text-gray-600">Mobile</dt>
              </div>
              <dd className="text-xs font-semibold text-gray-900">3,204</dd>
            </div>
          </dl>
          <div className="mt-2 flex items-center gap-1 border-t border-gray-100 pt-2 text-xs font-medium text-emerald-600">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
            +12.4% vs. last week
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-blue-500"></span>Desktop</span>
        <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-violet-400"></span>Mobile</span>
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
