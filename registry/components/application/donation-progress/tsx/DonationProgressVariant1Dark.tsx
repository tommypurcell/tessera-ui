import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DonationProgressVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DonationProgressVariant1Dark({
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
}: DonationProgressVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=160&fit=crop"
              alt=""
              className="h-28 w-full rounded-md object-cover"
            />
            <h3 className="mt-3 text-sm font-semibold text-white">Clean water for Kaya village</h3>
      
            <div className="mt-3">
              <div className="flex items-end justify-between">
                <span className="text-lg font-bold text-white">$18,420</span>
                <span className="text-xs text-gray-400">raised of $25,000 goal</span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-gray-800">
                <div className="h-full w-[74%] rounded-full bg-emerald-500"></div>
              </div>
            </div>
      
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <img src="https://i.pravatar.cc/48?img=12" alt="" className="size-6 rounded-full object-cover ring-2 ring-gray-900" />
                  <img src="https://i.pravatar.cc/48?img=32" alt="" className="size-6 rounded-full object-cover ring-2 ring-gray-900" />
                  <img src="https://i.pravatar.cc/48?img=5" alt="" className="size-6 rounded-full object-cover ring-2 ring-gray-900" />
                </div>
                <span className="text-xs text-gray-400">312 donors</span>
              </div>
              <button type="button" className="rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-400">
                Donate
              </button>
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
