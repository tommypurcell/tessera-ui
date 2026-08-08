import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TimelineScrubberVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TimelineScrubberVariant2Dark({
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
}: TimelineScrubberVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-md rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-medium text-gray-400">
              <span>Log range</span>
              <span>09:15 – 14:40</span>
            </div>
      
            <div className="relative mt-4 h-8 w-full">
              <div className="absolute inset-x-0 top-1/2 flex h-6 -translate-y-1/2 items-end gap-px">
                <span className="h-2 w-full rounded-sm bg-gray-700"></span>
                <span className="h-3 w-full rounded-sm bg-gray-700"></span>
                <span className="h-5 w-full rounded-sm bg-gray-700"></span>
                <span className="h-4 w-full rounded-sm bg-indigo-500/70"></span>
                <span className="h-6 w-full rounded-sm bg-indigo-400"></span>
                <span className="h-3 w-full rounded-sm bg-indigo-400"></span>
                <span className="h-5 w-full rounded-sm bg-indigo-500/70"></span>
                <span className="h-2 w-full rounded-sm bg-gray-700"></span>
                <span className="h-4 w-full rounded-sm bg-gray-700"></span>
                <span className="h-3 w-full rounded-sm bg-gray-700"></span>
              </div>
      
              <div className="absolute inset-y-0 left-[30%] right-[15%] rounded bg-indigo-400/10 ring-1 ring-inset ring-indigo-400/40"></div>
      
              <div
                role="slider"
                tabIndex={0}
                aria-label="Range start"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={30}
                className="absolute top-1/2 left-[30%] flex h-8 w-2.5 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-indigo-400 shadow ring-2 ring-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              ></div>
              <div
                role="slider"
                tabIndex={0}
                aria-label="Range end"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={85}
                className="absolute top-1/2 left-[85%] flex h-8 w-2.5 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-indigo-400 shadow ring-2 ring-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              ></div>
            </div>
      
            <div className="mt-1 flex justify-between text-[11px] text-gray-500">
              <span>00:00</span>
              <span>24:00</span>
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
