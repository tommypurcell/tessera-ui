import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MobileSegmentedTabsVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function MobileSegmentedTabsVariant1Dark({
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
}: MobileSegmentedTabsVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="relative flex h-[560px] w-[320px] flex-col overflow-hidden rounded-[2rem] border-8 border-gray-800 bg-gray-900 shadow-xl">
      <div className="shrink-0 px-4 pt-4 pb-3">
        <h1 className="text-lg font-bold text-white">Inbox</h1>
      </div>

      <div className="sticky top-0 z-10 shrink-0 border-b border-gray-700 bg-gray-900 px-4 pb-3">
        <div role="tablist" aria-label="Filter messages" className="flex gap-1 rounded-lg bg-gray-800 p-1">
          <button type="button" role="tab" aria-selected="true" className="flex-1 rounded-md bg-gray-700 py-1.5 text-xs font-semibold text-white shadow-sm">All</button>
          <button type="button" role="tab" aria-selected="false" className="flex-1 rounded-md py-1.5 text-xs font-medium text-gray-400">Unread</button>
          <button type="button" role="tab" aria-selected="false" className="flex-1 rounded-md py-1.5 text-xs font-medium text-gray-400">Flagged</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-800">
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-indigo-400"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Priya Shah</p>
                <p className="text-[11px] text-gray-500">9:41 AM</p>
              </div>
              <p className="truncate text-xs text-gray-400">Can you review the Q3 deck before the sync?</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-indigo-400"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Marcus Lee</p>
                <p className="text-[11px] text-gray-500">8:15 AM</p>
              </div>
              <p className="truncate text-xs text-gray-400">Deploy went out clean, no incidents overnight.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-transparent"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-300">Ana Ortiz</p>
                <p className="text-[11px] text-gray-500">Yesterday</p>
              </div>
              <p className="truncate text-xs text-gray-400">Thanks, that resolves it on our end.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-indigo-400"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Dana Whitfield</p>
                <p className="text-[11px] text-gray-500">Yesterday</p>
              </div>
              <p className="truncate text-xs text-gray-400">Flagged this for follow-up next sprint.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-4 py-3">
            <span className="mt-1 size-2 shrink-0 rounded-full bg-transparent"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-300">Tom Reyes</p>
                <p className="text-[11px] text-gray-500">Mon</p>
              </div>
              <p className="truncate text-xs text-gray-400">Invoice attached for last month's usage.</p>
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
