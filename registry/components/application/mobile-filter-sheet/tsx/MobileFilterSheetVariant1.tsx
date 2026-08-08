import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MobileFilterSheetVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function MobileFilterSheetVariant1({
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
}: MobileFilterSheetVariant1Props) {
  const defaultContent = (
    <>
      <div className="relative flex h-[560px] w-[320px] flex-col overflow-hidden rounded-[2rem] border-8 border-gray-900 bg-white shadow-xl">
      <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3">
        <button type="button" className="text-sm font-medium text-gray-500">Cancel</button>
        <p className="text-sm font-semibold text-gray-900">Filters</p>
        <button type="button" className="text-sm font-medium text-gray-400">Reset</button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Price range</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1 rounded-md border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900">$25</div>
            <span className="text-xs text-gray-400">to</span>
            <div className="flex-1 rounded-md border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900">$120</div>
          </div>
          <div className="relative mt-4 h-1.5 rounded-full bg-gray-100">
            <div className="absolute inset-y-0 left-[15%] right-[25%] rounded-full bg-gray-900"></div>
            <span className="absolute top-1/2 left-[15%] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-900 bg-white"></span>
            <span className="absolute top-1/2 left-[75%] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-900 bg-white"></span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Category</p>
          <div className="mt-3 space-y-2.5">
            <label className="flex items-center gap-2.5">
              <input type="checkbox" defaultChecked className="size-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
              <span className="text-sm text-gray-900">Running shoes</span>
              <span className="ml-auto text-xs text-gray-400">128</span>
            </label>
            <label className="flex items-center gap-2.5">
              <input type="checkbox" className="size-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
              <span className="text-sm text-gray-900">Trail shoes</span>
              <span className="ml-auto text-xs text-gray-400">64</span>
            </label>
            <label className="flex items-center gap-2.5">
              <input type="checkbox" defaultChecked className="size-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
              <span className="text-sm text-gray-900">Sandals</span>
              <span className="ml-auto text-xs text-gray-400">37</span>
            </label>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Size</p>
          <div className="mt-3 grid grid-cols-5 gap-2">
            <button type="button" className="rounded-md border border-gray-300 py-1.5 text-xs font-medium text-gray-700">7</button>
            <button type="button" className="rounded-md border border-gray-300 py-1.5 text-xs font-medium text-gray-700">8</button>
            <button type="button" aria-pressed="true" className="rounded-md border border-gray-900 bg-gray-900 py-1.5 text-xs font-medium text-white">9</button>
            <button type="button" aria-pressed="true" className="rounded-md border border-gray-900 bg-gray-900 py-1.5 text-xs font-medium text-white">10</button>
            <button type="button" className="rounded-md border border-gray-300 py-1.5 text-xs font-medium text-gray-700">11</button>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Availability</p>
          <label className="mt-3 flex items-center justify-between">
            <span className="text-sm text-gray-900">In stock only</span>
            <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-900">
              <span className="inline-block size-3.5 translate-x-4.5 rounded-full bg-white"></span>
            </span>
          </label>
        </div>
      </div>

      <div className="shrink-0 border-t border-gray-200 p-4">
        <button type="button" className="w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white shadow-sm">Show 42 results</button>
      </div>
    </div>
    </>
  )

  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? defaultContent)
      : state === 'empty'
        ? (emptyContent ?? defaultContent)
        : state === 'error'
          ? (errorContent ?? defaultContent)
          : (renderContent ? renderContent(defaultContent) : defaultContent))

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
