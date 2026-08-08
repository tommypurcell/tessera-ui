import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AssigneePickerVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AssigneePickerVariant1({
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
}: AssigneePickerVariant1Props) {
  const defaultContent = (
    <>
      <div className="relative inline-block">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded="true"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              <img src="https://i.pravatar.cc/48?img=12" alt="" className="size-5 rounded-full object-cover" />
              Priya Shah
            </button>
      
            <div className="absolute left-0 top-full z-10 mt-2 w-64 rounded-lg border border-gray-200 bg-white shadow-lg shadow-gray-900/5">
              <div className="border-b border-gray-100 p-2">
                <label htmlFor="assignee-picker-search" className="sr-only">Search members</label>
                <input
                  id="assignee-picker-search"
                  type="text"
                  placeholder="Search members…"
                  className="block w-full rounded-md border-gray-300 text-sm text-gray-700 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>
              <ul role="listbox" aria-label="Assignees" className="max-h-52 overflow-y-auto p-1">
                <li role="option" aria-selected="true" className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/48?img=12" alt="" className="size-6 rounded-full object-cover" />
                  <span className="min-w-0 flex-1 truncate text-sm text-gray-900">Priya Shah</span>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 shrink-0 text-gray-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </li>
                <li role="option" aria-selected="false" className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/48?img=32" alt="" className="size-6 rounded-full object-cover" />
                  <span className="min-w-0 flex-1 truncate text-sm text-gray-700">Ethan Kim</span>
                </li>
                <li role="option" aria-selected="false" className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/48?img=5" alt="" className="size-6 rounded-full object-cover" />
                  <span className="min-w-0 flex-1 truncate text-sm text-gray-700">Sofia Rossi</span>
                </li>
                <li role="option" aria-selected="false" className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/48?img=8" alt="" className="size-6 rounded-full object-cover" />
                  <span className="min-w-0 flex-1 truncate text-sm text-gray-700">Yuki Tanaka</span>
                </li>
                <li>
                  <button type="button" className="flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-sm text-gray-500 hover:bg-gray-50">
                    <span className="flex size-6 items-center justify-center rounded-full border border-dashed border-gray-300 text-gray-400">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </span>
                    Unassigned
                  </button>
                </li>
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
