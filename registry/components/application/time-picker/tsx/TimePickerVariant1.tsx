import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TimePickerVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TimePickerVariant1({
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
}: TimePickerVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xs rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900">Meeting time</h3>
      
            <div className="relative mt-3 flex h-40 gap-2">
              <div className="tessera-time-col flex-1 overflow-y-auto rounded-md bg-gray-50 py-14 text-center">
                <div className="py-1.5 text-sm text-gray-400">08</div>
                <div className="py-1.5 text-sm text-gray-400">09</div>
                <div className="rounded-md bg-white py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200">10</div>
                <div className="py-1.5 text-sm text-gray-400">11</div>
                <div className="py-1.5 text-sm text-gray-400">12</div>
              </div>
              <div className="tessera-time-col flex-1 overflow-y-auto rounded-md bg-gray-50 py-14 text-center">
                <div className="py-1.5 text-sm text-gray-400">00</div>
                <div className="py-1.5 text-sm text-gray-400">15</div>
                <div className="rounded-md bg-white py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200">30</div>
                <div className="py-1.5 text-sm text-gray-400">45</div>
              </div>
              <div className="tessera-time-col flex-1 overflow-y-auto rounded-md bg-gray-50 py-14 text-center">
                <div className="rounded-md bg-white py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200">AM</div>
                <div className="py-1.5 text-sm text-gray-400">PM</div>
              </div>
      
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 rounded-md ring-1 ring-inset ring-gray-900/10"></div>
            </div>
      
            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
              <p className="text-sm text-gray-500">Selected: <span className="font-medium text-gray-900">10:30 AM</span></p>
              <button type="button" className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-gray-700">
                Set time
              </button>
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
