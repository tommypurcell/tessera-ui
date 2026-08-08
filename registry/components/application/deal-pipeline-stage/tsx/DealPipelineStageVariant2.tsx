import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DealPipelineStageVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DealPipelineStageVariant2({
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
}: DealPipelineStageVariant2Props) {
  const defaultContent = (
    <>
      <div className="flex gap-3">
            <div className="w-56 rounded-lg border border-gray-200 bg-gray-100 p-2">
              <div className="flex items-center justify-between px-1.5 py-1">
                <h3 className="text-sm font-semibold text-gray-900">Proposal <span className="text-xs font-normal text-gray-400">(2)</span></h3>
                <span className="text-xs font-semibold text-gray-600">$64K</span>
              </div>
              <div className="mt-1 space-y-2">
                <div className="rounded-md border border-gray-200 bg-white p-2.5 shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Fenwick Co</p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">$38,000</p>
                </div>
                <div className="rounded-md border border-gray-200 bg-white p-2.5 shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Harborlight</p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">$26,000</p>
                </div>
              </div>
            </div>
      
            <div className="w-56 rounded-lg border border-indigo-200 bg-indigo-50 p-2">
              <div className="flex items-center justify-between px-1.5 py-1">
                <h3 className="text-sm font-semibold text-indigo-900">Closed Won <span className="text-xs font-normal text-indigo-400">(1)</span></h3>
                <span className="text-xs font-semibold text-indigo-700">$95K</span>
              </div>
              <div className="mt-1 space-y-2">
                <div className="rounded-md border border-indigo-200 bg-white p-2.5 shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Rendezvous Inc</p>
                  <p className="mt-1 text-sm font-semibold text-indigo-700">$95,000</p>
                </div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-1 rounded-md border border-dashed border-indigo-200 py-2 text-xs font-medium text-indigo-400 hover:border-indigo-300 hover:text-indigo-600"
                >
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add deal
                </button>
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
