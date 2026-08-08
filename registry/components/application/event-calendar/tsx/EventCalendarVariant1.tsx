import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type EventCalendarVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function EventCalendarVariant1({
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
}: EventCalendarVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="flex border-b border-gray-200">
          <div className="w-14 shrink-0 border-r border-gray-200 py-2"></div>
          <div className="flex-1 border-r border-gray-200 py-2 text-center">
            <p className="text-xs font-medium text-gray-500">Mon</p>
            <p className="text-sm font-semibold text-gray-900">10</p>
          </div>
          <div className="flex-1 border-r border-gray-200 bg-gray-50/60 py-2 text-center">
            <p className="text-xs font-medium text-gray-900">Tue</p>
            <p className="text-sm font-semibold text-gray-900">11</p>
          </div>
          <div className="flex-1 py-2 text-center">
            <p className="text-xs font-medium text-gray-500">Wed</p>
            <p className="text-sm font-semibold text-gray-900">12</p>
          </div>
        </div>

        <div className="flex">
          <div className="w-14 shrink-0 border-r border-gray-200">
            <div className="h-16 border-b border-gray-100 px-2 pt-1 text-right text-xs text-gray-400">9 AM</div>
            <div className="h-16 border-b border-gray-100 px-2 pt-1 text-right text-xs text-gray-400">10 AM</div>
            <div className="h-16 border-b border-gray-100 px-2 pt-1 text-right text-xs text-gray-400">11 AM</div>
            <div className="h-16 border-b border-gray-100 px-2 pt-1 text-right text-xs text-gray-400">12 PM</div>
            <div className="h-16 px-2 pt-1 text-right text-xs text-gray-400">1 PM</div>
          </div>

          <div className="relative flex-1 border-r border-gray-200">
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16"></div>

            <div className="absolute inset-x-1 top-4 h-14 rounded-md border border-blue-200 bg-blue-50 p-1.5">
              <p className="truncate text-xs font-semibold text-blue-900">Design sync</p>
              <p className="truncate text-[11px] text-blue-700">9:15 – 10:00 AM</p>
            </div>
          </div>

          <div className="relative flex-1 border-r border-gray-200 bg-gray-50/60">
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16"></div>

            <div className="absolute left-1 top-0 h-32 w-[calc(50%-4px)] rounded-md border border-violet-200 bg-violet-50 p-1.5">
              <p className="truncate text-xs font-semibold text-violet-900">Roadmap review</p>
              <p className="truncate text-[11px] text-violet-700">9:00 – 11:00 AM</p>
            </div>
            <div className="absolute right-1 top-8 h-16 w-[calc(50%-4px)] rounded-md border border-amber-200 bg-amber-50 p-1.5">
              <p className="truncate text-xs font-semibold text-amber-900">1:1 with Priya</p>
              <p className="truncate text-[11px] text-amber-700">9:30 – 10:30</p>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-[104px] z-10 flex items-center">
              <span className="-ml-1 size-2 shrink-0 rounded-full bg-red-500"></span>
              <span className="h-px w-full bg-red-500"></span>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16 border-b border-gray-100"></div>
            <div className="h-16"></div>

            <div className="absolute inset-x-1 top-14 h-16 rounded-md border border-emerald-200 bg-emerald-50 p-1.5">
              <p className="truncate text-xs font-semibold text-emerald-900">Ship review</p>
              <p className="truncate text-[11px] text-emerald-700">11:00 AM – 12:00 PM</p>
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
