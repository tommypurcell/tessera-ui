import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DealPipelineStageVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DealPipelineStageVariant1Dark({
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
}: DealPipelineStageVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-64 rounded-lg border border-gray-700 bg-gray-900/60 p-2">
            <div className="flex items-center justify-between px-1.5 py-1">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-amber-500"></span>
                <h3 className="text-sm font-semibold text-white">Negotiation</h3>
                <span className="text-xs text-gray-500">(4)</span>
              </div>
              <span className="text-xs font-semibold text-gray-300">$186K</span>
            </div>
      
            <div className="mt-1 space-y-2">
              <div className="rounded-md border border-gray-700 bg-gray-900 p-2.5 shadow-sm">
                <p className="text-sm font-medium text-white">Acme Corp</p>
                <p className="mt-0.5 text-xs text-gray-400">Renewal · closes Oct 20</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">$72,000</span>
                  <img src="https://i.pravatar.cc/48?img=12" alt="" className="size-5 rounded-full object-cover" />
                </div>
              </div>
      
              <div className="rounded-md border border-gray-700 bg-gray-900 p-2.5 shadow-sm">
                <p className="text-sm font-medium text-white">Nimbus Labs</p>
                <p className="mt-0.5 text-xs text-gray-400">New logo · closes Oct 28</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">$54,500</span>
                  <img src="https://i.pravatar.cc/48?img=32" alt="" className="size-5 rounded-full object-cover" />
                </div>
              </div>
      
              <div className="rounded-md border border-gray-700 bg-gray-900 p-2.5 shadow-sm">
                <p className="text-sm font-medium text-white">Vantage Retail</p>
                <p className="mt-0.5 text-xs text-gray-400">Upsell · closes Nov 4</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">$41,200</span>
                  <img src="https://i.pravatar.cc/48?img=5" alt="" className="size-5 rounded-full object-cover" />
                </div>
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
