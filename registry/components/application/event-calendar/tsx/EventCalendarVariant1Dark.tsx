import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type EventCalendarVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function EventCalendarVariant1Dark({
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
}: EventCalendarVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
        <div className="flex border-b border-gray-700">
          <div className="w-14 shrink-0 border-r border-gray-700 py-2"></div>
          <div className="flex-1 border-r border-gray-700 py-2 text-center">
            <p className="text-xs font-medium text-gray-400">Mon</p>
            <p className="text-sm font-semibold text-white">10</p>
          </div>
          <div className="flex-1 border-r border-gray-700 bg-white/5 py-2 text-center">
            <p className="text-xs font-medium text-white">Tue</p>
            <p className="text-sm font-semibold text-white">11</p>
          </div>
          <div className="flex-1 py-2 text-center">
            <p className="text-xs font-medium text-gray-400">Wed</p>
            <p className="text-sm font-semibold text-white">12</p>
          </div>
        </div>

        <div className="flex">
          <div className="w-14 shrink-0 border-r border-gray-700">
            <div className="h-16 border-b border-gray-800 px-2 pt-1 text-right text-xs text-gray-500">9 AM</div>
            <div className="h-16 border-b border-gray-800 px-2 pt-1 text-right text-xs text-gray-500">10 AM</div>
            <div className="h-16 border-b border-gray-800 px-2 pt-1 text-right text-xs text-gray-500">11 AM</div>
            <div className="h-16 border-b border-gray-800 px-2 pt-1 text-right text-xs text-gray-500">12 PM</div>
            <div className="h-16 px-2 pt-1 text-right text-xs text-gray-500">1 PM</div>
          </div>

          <div className="relative flex-1 border-r border-gray-700">
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16"></div>

            <div className="absolute inset-x-1 top-4 h-14 rounded-md border border-blue-800 bg-blue-950 p-1.5">
              <p className="truncate text-xs font-semibold text-blue-200">Design sync</p>
              <p className="truncate text-[11px] text-blue-400">9:15 – 10:00 AM</p>
            </div>
          </div>

          <div className="relative flex-1 border-r border-gray-700 bg-white/5">
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16"></div>

            <div className="absolute left-1 top-0 h-32 w-[calc(50%-4px)] rounded-md border border-violet-800 bg-violet-950 p-1.5">
              <p className="truncate text-xs font-semibold text-violet-200">Roadmap review</p>
              <p className="truncate text-[11px] text-violet-400">9:00 – 11:00 AM</p>
            </div>
            <div className="absolute right-1 top-8 h-16 w-[calc(50%-4px)] rounded-md border border-amber-800 bg-amber-950 p-1.5">
              <p className="truncate text-xs font-semibold text-amber-200">1:1 with Priya</p>
              <p className="truncate text-[11px] text-amber-400">9:30 – 10:30</p>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-[104px] z-10 flex items-center">
              <span className="-ml-1 size-2 shrink-0 rounded-full bg-red-500"></span>
              <span className="h-px w-full bg-red-500"></span>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16 border-b border-gray-800"></div>
            <div className="h-16"></div>

            <div className="absolute inset-x-1 top-14 h-16 rounded-md border border-emerald-800 bg-emerald-950 p-1.5">
              <p className="truncate text-xs font-semibold text-emerald-200">Ship review</p>
              <p className="truncate text-[11px] text-emerald-400">11:00 AM – 12:00 PM</p>
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
