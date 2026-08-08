import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OeeGaugeTrioVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function OeeGaugeTrioVariant2({
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
}: OeeGaugeTrioVariant2Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-100 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900">Overall OEE</p>
              <p className="font-mono text-lg font-bold text-gray-900">80%</p>
            </div>
      
            <div className="mt-3 flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <span className="w-24 text-xs font-medium text-gray-600">Availability</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-green-500" style={{width: '94%'}}></div>
                </div>
                <span className="w-9 text-right font-mono text-xs text-gray-500">94%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24 text-xs font-medium text-gray-600">Performance</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-amber-500" style={{width: '87%'}}></div>
                </div>
                <span className="w-9 text-right font-mono text-xs text-gray-500">87%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24 text-xs font-medium text-gray-600">Quality</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-blue-500" style={{width: '98%'}}></div>
                </div>
                <span className="w-9 text-right font-mono text-xs text-gray-500">98%</span>
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
