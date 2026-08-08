import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TimePickerVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TimePickerVariant2({
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
}: TimePickerVariant2Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xs">
            <label htmlFor="time-picker-trigger" className="block text-sm font-medium text-gray-700">Reminder time</label>
            <div className="relative mt-1.5">
              <button
                id="time-picker-trigger"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="true"
                className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm text-gray-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
              >
                <span className="inline-flex items-center gap-2">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  2:45 PM
                </span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
      
              <ul
                role="listbox"
                aria-label="Time"
                className="tessera-time-list absolute z-10 mt-1.5 max-h-48 w-full overflow-y-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg shadow-gray-900/5"
              >
                <li role="option" className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">1:45 PM</li>
                <li role="option" className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">2:00 PM</li>
                <li role="option" className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">2:15 PM</li>
                <li role="option" className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">2:30 PM</li>
                <li role="option" aria-selected="true" className="flex items-center justify-between rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white">
                  2:45 PM
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </li>
                <li role="option" className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">3:00 PM</li>
                <li role="option" className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">3:15 PM</li>
              </ul>
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
