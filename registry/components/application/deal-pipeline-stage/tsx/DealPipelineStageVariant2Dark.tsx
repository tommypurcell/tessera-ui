import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DealPipelineStageVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DealPipelineStageVariant2Dark({
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
}: DealPipelineStageVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="flex gap-3">
            <div className="w-56 rounded-lg border border-gray-700 bg-gray-900/60 p-2">
              <div className="flex items-center justify-between px-1.5 py-1">
                <h3 className="text-sm font-semibold text-white">Proposal <span className="text-xs font-normal text-gray-500">(2)</span></h3>
                <span className="text-xs font-semibold text-gray-300">$64K</span>
              </div>
              <div className="mt-1 space-y-2">
                <div className="rounded-md border border-gray-700 bg-gray-900 p-2.5 shadow-sm">
                  <p className="text-sm font-medium text-white">Fenwick Co</p>
                  <p className="mt-1 text-sm font-semibold text-white">$38,000</p>
                </div>
                <div className="rounded-md border border-gray-700 bg-gray-900 p-2.5 shadow-sm">
                  <p className="text-sm font-medium text-white">Harborlight</p>
                  <p className="mt-1 text-sm font-semibold text-white">$26,000</p>
                </div>
              </div>
            </div>
      
            <div className="w-56 rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-2">
              <div className="flex items-center justify-between px-1.5 py-1">
                <h3 className="text-sm font-semibold text-indigo-200">Closed Won <span className="text-xs font-normal text-indigo-400">(1)</span></h3>
                <span className="text-xs font-semibold text-indigo-300">$95K</span>
              </div>
              <div className="mt-1 space-y-2">
                <div className="rounded-md border border-indigo-500/30 bg-gray-900 p-2.5 shadow-sm">
                  <p className="text-sm font-medium text-white">Rendezvous Inc</p>
                  <p className="mt-1 text-sm font-semibold text-indigo-300">$95,000</p>
                </div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-1 rounded-md border border-dashed border-indigo-500/30 py-2 text-xs font-medium text-indigo-400 hover:border-indigo-400 hover:text-indigo-300"
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
