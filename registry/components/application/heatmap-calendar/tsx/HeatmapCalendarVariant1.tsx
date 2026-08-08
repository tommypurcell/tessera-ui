import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type HeatmapCalendarVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function HeatmapCalendarVariant1({
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
}: HeatmapCalendarVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">312 contributions in the last 5 months</h3>
      </div>

      <div className="flex gap-1 pl-8 text-xs text-gray-500">
        <span className="w-[52px]">Jan</span>
        <span className="w-[52px]">Feb</span>
        <span className="w-[52px]">Mar</span>
        <span className="w-[36px]">Apr</span>
        <span className="w-[36px]">May</span>
      </div>

      <div className="mt-1 flex gap-1">
        <div className="flex w-7 shrink-0 flex-col justify-between py-0.5 text-xs text-gray-500">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>
        <div className="flex gap-1">
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-500"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-3 rounded-sm bg-emerald-700"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-200"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-emerald-400"></div>
          <div className="size-3 rounded-sm bg-gray-100"></div>
        </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-gray-500">
        <span>Less</span>
        <div className="size-3 rounded-sm bg-gray-100"></div><div className="size-3 rounded-sm bg-emerald-200"></div><div className="size-3 rounded-sm bg-emerald-400"></div><div className="size-3 rounded-sm bg-emerald-500"></div><div className="size-3 rounded-sm bg-emerald-700"></div>
        <span>More</span>
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
