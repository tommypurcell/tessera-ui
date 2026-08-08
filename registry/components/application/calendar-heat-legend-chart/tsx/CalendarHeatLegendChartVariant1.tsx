import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CalendarHeatLegendChartVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CalendarHeatLegendChartVariant1({
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
}: CalendarHeatLegendChartVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">Deploys per day</p>
          <p className="text-xs text-gray-500">August 2026</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5">
        <span className="text-center text-[11px] font-medium text-gray-400">Mon</span>
        <span className="text-center text-[11px] font-medium text-gray-400">Tue</span>
        <span className="text-center text-[11px] font-medium text-gray-400">Wed</span>
        <span className="text-center text-[11px] font-medium text-gray-400">Thu</span>
        <span className="text-center text-[11px] font-medium text-gray-400">Fri</span>
        <span className="text-center text-[11px] font-medium text-gray-400">Sat</span>
        <span className="text-center text-[11px] font-medium text-gray-400">Sun</span>
      </div>
      <div className="mt-1.5 grid grid-cols-7 gap-1.5">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">1</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">2</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-500 text-white">3</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">4</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">5</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-500 text-white">6</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-700 text-white">7</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-gray-100 text-gray-400">8</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">9</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">10</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">11</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-700 text-white">12</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">13</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">14</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-700 text-white">15</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">16</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">17</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">18</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">19</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-gray-100 text-gray-400">20</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">21</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-500 text-white">22</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">23</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-500 text-white">24</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-700 text-white">25</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">26</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-300 text-emerald-900">27</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-gray-100 text-gray-400">28</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-gray-100 text-gray-400">29</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-700 text-white">30</span>
        <span className="flex aspect-square items-center justify-center rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">31</span>
      </div>

      <div className="mt-4 flex items-center justify-end gap-3 text-xs text-gray-500">
        <span className="flex items-center gap-1"><span className="size-3 rounded-sm bg-gray-100"></span>0</span>
        <span className="flex items-center gap-1"><span className="size-3 rounded-sm bg-emerald-100"></span>1–3</span>
        <span className="flex items-center gap-1"><span className="size-3 rounded-sm bg-emerald-300"></span>4–6</span>
        <span className="flex items-center gap-1"><span className="size-3 rounded-sm bg-emerald-500"></span>7–9</span>
        <span className="flex items-center gap-1"><span className="size-3 rounded-sm bg-emerald-700"></span>10+</span>
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
