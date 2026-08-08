import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MobileSegmentedTabsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function MobileSegmentedTabsVariant1({
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
}: MobileSegmentedTabsVariant1Props) {
  const defaultContent = (
    <>
      <div className="relative flex h-[560px] w-[320px] flex-col overflow-hidden rounded-[2rem] border-8 border-gray-900 bg-white shadow-xl">
      <div className="shrink-0 px-4 pt-4 pb-3">
        <h1 className="text-lg font-bold text-gray-900">Inbox</h1>
      </div>

      <div className="sticky top-0 z-10 shrink-0 border-b border-gray-200 bg-white px-4 pb-3">
        <div role="tablist" aria-label="Filter messages" className="flex gap-1 rounded-lg bg-gray-100 p-1">
          <button type="button" role="tab" aria-selected="true" className="flex-1 rounded-md bg-white py-1.5 text-xs font-semibold text-gray-900 shadow-sm">All</button>
          <button type="button" role="tab" aria-selected="false" className="flex-1 rounded-md py-1.5 text-xs font-medium text-gray-500">Unread</button>
          <button type="button" role="tab" aria-selected="false" className="flex-1 rounded-md py-1.5 text-xs font-medium text-gray-500">Flagged</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-100">
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-indigo-500"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Priya Shah</p>
                <p className="text-[11px] text-gray-400">9:41 AM</p>
              </div>
              <p className="truncate text-xs text-gray-500">Can you review the Q3 deck before the sync?</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-indigo-500"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Marcus Lee</p>
                <p className="text-[11px] text-gray-400">8:15 AM</p>
              </div>
              <p className="truncate text-xs text-gray-500">Deploy went out clean, no incidents overnight.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-transparent"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700">Ana Ortiz</p>
                <p className="text-[11px] text-gray-400">Yesterday</p>
              </div>
              <p className="truncate text-xs text-gray-500">Thanks, that resolves it on our end.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-indigo-500"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Dana Whitfield</p>
                <p className="text-[11px] text-gray-400">Yesterday</p>
              </div>
              <p className="truncate text-xs text-gray-500">Flagged this for follow-up next sprint.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-transparent"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700">Tom Reyes</p>
                <p className="text-[11px] text-gray-400">Mon</p>
              </div>
              <p className="truncate text-xs text-gray-500">Invoice attached for last month's usage.</p>
            </div>
          </li>
        </ul>
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
