import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type BottomSheetNavVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function BottomSheetNavVariant1({
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
}: BottomSheetNavVariant1Props) {
  const defaultContent = (
    <>
<div className="relative h-[520px] w-[300px] overflow-hidden rounded-[2rem] border-8 border-gray-900 bg-white shadow-xl">
      <div className="flex items-center justify-between px-4 pt-3 text-xs font-medium text-gray-500">
        <span>9:41</span>
        <span>●●●</span>
      </div>
      <div className="flex h-14 items-center border-b border-gray-100 px-4 text-sm font-semibold text-gray-900">Explore</div>
      <div className="grid grid-cols-3 gap-2 p-4">
        <div className="aspect-square rounded-lg bg-gray-100"></div>
        <div className="aspect-square rounded-lg bg-gray-100"></div>
        <div className="aspect-square rounded-lg bg-gray-100"></div>
        <div className="aspect-square rounded-lg bg-gray-100"></div>
        <div className="aspect-square rounded-lg bg-gray-100"></div>
        <div className="aspect-square rounded-lg bg-gray-100"></div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 rounded-t-2xl border-t border-gray-200 bg-white shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.15)]">
        <div className="flex justify-center pt-2.5 pb-1">
          <span className="h-1 w-9 rounded-full bg-gray-300"></span>
        </div>

        <div className="flex items-center justify-between px-4 pb-1 pt-1">
          <p className="text-sm font-semibold text-gray-900">Filter results</p>
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-gray-900"></span>
            <span className="size-1.5 rounded-full bg-gray-300"></span>
            <span className="size-1.5 rounded-full bg-gray-300"></span>
          </div>
        </div>

        <nav className="grid grid-cols-4 gap-1 px-3 pb-6 pt-3">
          <button type="button" className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-900">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L1.5 3l1.5-1.5L7.5 4.5v1.409l4.26 4.26" />
            </svg>
            <span className="text-[11px] font-medium">Filters</span>
          </button>
          <button type="button" className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-[11px] font-medium">Sort</span>
          </button>
          <button type="button" className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.503a1.125 1.125 0 0 0-1.006 0L3.622 5.94A1.125 1.125 0 0 0 3 6.945V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
            <span className="text-[11px] font-medium">Map</span>
          </button>
          <button type="button" className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.184a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.019Z" />
            </svg>
            <span className="text-[11px] font-medium">Saved</span>
          </button>
        </nav>
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
