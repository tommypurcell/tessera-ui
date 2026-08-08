import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OeeGaugeTrioVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function OeeGaugeTrioVariant1({
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
}: OeeGaugeTrioVariant1Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-100 bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900">Line 3 · OEE</p>
              <p className="font-mono text-2xl font-bold text-gray-900">80%</p>
            </div>
      
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <svg className="h-14 w-24" viewBox="0 0 100 55" role="img" aria-label="Availability 94 percent">
                  <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-gray-100" />
                  <path
                    d="M10 50 A40 40 0 0 1 90 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke-dasharray="125.7"
                    stroke-dashoffset="7.5"
                    className="text-green-500"
                  />
                </svg>
                <p className="font-mono text-lg font-bold text-gray-900">94%</p>
                <p className="text-[11px] font-medium text-gray-500">Availability</p>
              </div>
      
              <div className="flex flex-col items-center gap-1.5">
                <svg className="h-14 w-24" viewBox="0 0 100 55" role="img" aria-label="Performance 87 percent">
                  <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-gray-100" />
                  <path
                    d="M10 50 A40 40 0 0 1 90 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke-dasharray="125.7"
                    stroke-dashoffset="16.3"
                    className="text-amber-500"
                  />
                </svg>
                <p className="font-mono text-lg font-bold text-gray-900">87%</p>
                <p className="text-[11px] font-medium text-gray-500">Performance</p>
              </div>
      
              <div className="flex flex-col items-center gap-1.5">
                <svg className="h-14 w-24" viewBox="0 0 100 55" role="img" aria-label="Quality 98 percent">
                  <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-gray-100" />
                  <path
                    d="M10 50 A40 40 0 0 1 90 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke-dasharray="125.7"
                    stroke-dashoffset="2.5"
                    className="text-blue-500"
                  />
                </svg>
                <p className="font-mono text-lg font-bold text-gray-900">98%</p>
                <p className="text-[11px] font-medium text-gray-500">Quality</p>
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
