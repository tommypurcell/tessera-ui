import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PdfPageThumbnailsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PdfPageThumbnailsVariant1({
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
}: PdfPageThumbnailsVariant1Props) {
  const defaultContent = (
    <>
<div className="flex w-full max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <nav aria-label="Page thumbnails" className="flex w-28 shrink-0 flex-col gap-2.5 overflow-y-auto border-r border-gray-200 bg-gray-50 p-3">
        <button type="button" aria-current="true" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border-2 border-gray-900 bg-white shadow-sm">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-2/3 rounded-full bg-gray-300"></span>
              <span className="block h-1 w-full rounded-full bg-gray-200"></span>
              <span className="block h-1 w-full rounded-full bg-gray-200"></span>
              <span className="block h-1 w-1/2 rounded-full bg-gray-200"></span>
            </span>
          </span>
          <span className="text-xs font-semibold text-gray-900">1</span>
        </button>

        <button type="button" aria-current="false" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-gray-200 bg-white shadow-sm transition-colors group-hover:border-gray-400">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-1/2 rounded-full bg-gray-200"></span>
              <span className="block h-1 w-full rounded-full bg-gray-100"></span>
              <span className="block h-1 w-full rounded-full bg-gray-100"></span>
            </span>
          </span>
          <span className="text-xs text-gray-500">2</span>
        </button>

        <button type="button" aria-current="false" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-gray-200 bg-white shadow-sm transition-colors group-hover:border-gray-400">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-full rounded-full bg-gray-100"></span>
              <span className="block h-1 w-2/3 rounded-full bg-gray-100"></span>
              <span className="block h-1 w-full rounded-full bg-gray-100"></span>
              <span className="block h-1 w-full rounded-full bg-gray-100"></span>
            </span>
          </span>
          <span className="text-xs text-gray-500">3</span>
        </button>

        <button type="button" aria-current="false" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-gray-200 bg-white shadow-sm transition-colors group-hover:border-gray-400">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-1/3 rounded-full bg-gray-200"></span>
              <span className="block h-1 w-full rounded-full bg-gray-100"></span>
            </span>
          </span>
          <span className="text-xs text-gray-500">4</span>
        </button>

        <button type="button" aria-current="false" className="group flex flex-col items-center gap-1">
          <span className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-gray-200 bg-white shadow-sm transition-colors group-hover:border-gray-400">
            <span className="w-3/4 space-y-1">
              <span className="block h-1 w-2/3 rounded-full bg-gray-200"></span>
              <span className="block h-1 w-full rounded-full bg-gray-100"></span>
              <span className="block h-1 w-full rounded-full bg-gray-100"></span>
            </span>
          </span>
          <span className="text-xs text-gray-500">5</span>
        </button>
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6">
        <div className="flex aspect-[3/4] w-40 flex-col gap-2 rounded-md border border-gray-200 bg-white p-4 shadow-sm">
          <span className="block h-2 w-3/4 rounded-full bg-gray-300"></span>
          <span className="mt-2 block h-1.5 w-full rounded-full bg-gray-100"></span>
          <span className="block h-1.5 w-full rounded-full bg-gray-100"></span>
          <span className="block h-1.5 w-5/6 rounded-full bg-gray-100"></span>
        </div>
        <p className="text-xs text-gray-500">Page 1 of 5</p>
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
