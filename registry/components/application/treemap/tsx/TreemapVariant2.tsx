import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TreemapVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TreemapVariant2({
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
}: TreemapVariant2Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900">Revenue by segment</h3>
            <div className="mt-3 grid h-48 grid-cols-5 grid-rows-3 gap-1">
              <div className="col-span-3 row-span-2 flex flex-col justify-between rounded-md bg-emerald-500 p-3">
                <span className="text-sm font-semibold text-white">Enterprise</span>
                <span className="text-xs text-emerald-50">$4.2M</span>
              </div>
              <div className="col-span-2 row-span-1 flex flex-col justify-between rounded-md bg-sky-500 p-2.5">
                <span className="text-xs font-semibold text-white">Mid-market</span>
                <span className="text-[11px] text-sky-50">$1.8M</span>
              </div>
              <div className="col-span-2 row-span-1 flex flex-col justify-between rounded-md bg-amber-500 p-2.5">
                <span className="text-xs font-semibold text-white">SMB</span>
                <span className="text-[11px] text-amber-50">$980K</span>
              </div>
              <div className="col-span-3 row-span-1 flex items-center gap-3 rounded-md bg-fuchsia-500 p-2.5">
                <span className="text-xs font-semibold text-white">Self-serve</span>
                <span className="text-[11px] text-fuchsia-50">$620K</span>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-gray-100 pt-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-600"><span className="size-2 rounded-full bg-emerald-500"></span>Enterprise</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-600"><span className="size-2 rounded-full bg-sky-500"></span>Mid-market</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-600"><span className="size-2 rounded-full bg-amber-500"></span>SMB</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-600"><span className="size-2 rounded-full bg-fuchsia-500"></span>Self-serve</span>
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
