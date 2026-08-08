import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PdfPageThumbnailsVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PdfPageThumbnailsVariant1Dark({
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
}: PdfPageThumbnailsVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="flex w-full max-w-xl overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <nav aria-label="Page thumbnails" className="flex w-28 shrink-0 flex-col gap-2.5 overflow-y-auto border-r border-gray-700 bg-white/5 p-3">
        <button type="button" aria-current="true" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border-2 border-white bg-gray-800 shadow-sm">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-2/3 rounded-full bg-gray-500"></span>
              <span className="block h-1 w-full rounded-full bg-gray-600"></span>
              <span className="block h-1 w-full rounded-full bg-gray-600"></span>
              <span className="block h-1 w-1/2 rounded-full bg-gray-600"></span>
            </span>
          </span>
          <span className="text-xs font-semibold text-white">1</span>
        </button>

        <button type="button" aria-current="false" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-gray-700 bg-gray-800 shadow-sm transition-colors group-hover:border-gray-500">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-1/2 rounded-full bg-gray-600"></span>
              <span className="block h-1 w-full rounded-full bg-gray-700"></span>
              <span className="block h-1 w-full rounded-full bg-gray-700"></span>
            </span>
          </span>
          <span className="text-xs text-gray-400">2</span>
        </button>

        <button type="button" aria-current="false" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-gray-700 bg-gray-800 shadow-sm transition-colors group-hover:border-gray-500">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-full rounded-full bg-gray-700"></span>
              <span className="block h-1 w-2/3 rounded-full bg-gray-700"></span>
              <span className="block h-1 w-full rounded-full bg-gray-700"></span>
              <span className="block h-1 w-full rounded-full bg-gray-700"></span>
            </span>
          </span>
          <span className="text-xs text-gray-400">3</span>
        </button>

        <button type="button" aria-current="false" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-gray-700 bg-gray-800 shadow-sm transition-colors group-hover:border-gray-500">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-1/3 rounded-full bg-gray-600"></span>
              <span className="block h-1 w-full rounded-full bg-gray-700"></span>
            </span>
          </span>
          <span className="text-xs text-gray-400">4</span>
        </button>

        <button type="button" aria-current="false" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-gray-700 bg-gray-800 shadow-sm transition-colors group-hover:border-gray-500">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-2/3 rounded-full bg-gray-600"></span>
              <span className="block h-1 w-full rounded-full bg-gray-700"></span>
              <span className="block h-1 w-full rounded-full bg-gray-700"></span>
            </span>
          </span>
          <span className="text-xs text-gray-400">5</span>
        </button>
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6">
        <div className="flex aspect-[3/4] w-40 flex-col gap-2 rounded-md border border-gray-700 bg-gray-800 p-4 shadow-sm">
          <span className="block h-2 w-3/4 rounded-full bg-gray-500"></span>
          <span className="mt-2 block h-1.5 w-full rounded-full bg-gray-700"></span>
          <span className="block h-1.5 w-full rounded-full bg-gray-700"></span>
          <span className="block h-1.5 w-5/6 rounded-full bg-gray-700"></span>
        </div>
        <p className="text-xs text-gray-400">Page 1 of 5</p>
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
