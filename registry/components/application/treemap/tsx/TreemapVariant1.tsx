import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TreemapVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TreemapVariant1({
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
}: TreemapVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900">Storage by file type</h3>
            <div className="mt-3 grid h-56 grid-cols-6 grid-rows-4 gap-1">
              <div className="col-span-3 row-span-3 flex flex-col justify-between rounded-md bg-indigo-600 p-3">
                <span className="text-sm font-semibold text-white">Videos</span>
                <span className="text-xs text-indigo-100">18.4 GB</span>
              </div>
              <div className="col-span-3 row-span-2 flex flex-col justify-between rounded-md bg-indigo-400 p-3">
                <span className="text-sm font-semibold text-white">Images</span>
                <span className="text-xs text-indigo-50">9.1 GB</span>
              </div>
              <div className="col-span-2 row-span-1 flex flex-col justify-between rounded-md bg-indigo-300 p-2.5">
                <span className="text-xs font-semibold text-white">Documents</span>
                <span className="text-[11px] text-indigo-50">3.2 GB</span>
              </div>
              <div className="col-span-1 row-span-1 flex items-center justify-center rounded-md bg-indigo-200 p-1.5">
                <span className="text-[10px] font-medium text-indigo-900">Audio</span>
              </div>
              <div className="col-span-2 row-span-1 flex items-center gap-2 rounded-md bg-indigo-100 p-2">
                <span className="text-xs font-medium text-indigo-900">Other</span>
                <span className="text-[10px] text-indigo-700">1.4 GB</span>
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
