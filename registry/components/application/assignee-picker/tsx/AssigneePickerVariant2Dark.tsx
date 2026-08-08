import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AssigneePickerVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AssigneePickerVariant2Dark({
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
}: AssigneePickerVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="relative inline-block">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded="true"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 py-1 pl-1 pr-3 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-100 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <span className="flex -space-x-1.5">
                <img src="https://i.pravatar.cc/48?img=12" alt="" className="size-5 rounded-full object-cover ring-2 ring-gray-900" />
                <img src="https://i.pravatar.cc/48?img=32" alt="" className="size-5 rounded-full object-cover ring-2 ring-gray-900" />
              </span>
              2 assignees
            </button>
      
            <div className="absolute left-0 top-full z-10 mt-2 w-64 rounded-lg border border-gray-700 bg-gray-900 shadow-lg shadow-black/40">
              <ul role="listbox" aria-multiselectable="true" aria-label="Assignees" className="max-h-52 overflow-y-auto p-1">
                <li role="option" aria-selected="true" className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-800">
                  <span className="flex size-4 shrink-0 items-center justify-center rounded border border-white bg-white">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="size-2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <img src="https://i.pravatar.cc/48?img=12" alt="" className="size-6 rounded-full object-cover" />
                  <span className="min-w-0 flex-1 truncate text-sm text-white">Priya Shah</span>
                </li>
                <li role="option" aria-selected="true" className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-800">
                  <span className="flex size-4 shrink-0 items-center justify-center rounded border border-white bg-white">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="size-2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <img src="https://i.pravatar.cc/48?img=32" alt="" className="size-6 rounded-full object-cover" />
                  <span className="min-w-0 flex-1 truncate text-sm text-white">Ethan Kim</span>
                </li>
                <li role="option" aria-selected="false" className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-800">
                  <span className="size-4 shrink-0 rounded border border-gray-600"></span>
                  <img src="https://i.pravatar.cc/48?img=5" alt="" className="size-6 rounded-full object-cover" />
                  <span className="min-w-0 flex-1 truncate text-sm text-gray-300">Sofia Rossi</span>
                </li>
                <li role="option" aria-selected="false" className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-800">
                  <span className="size-4 shrink-0 rounded border border-gray-600"></span>
                  <img src="https://i.pravatar.cc/48?img=8" alt="" className="size-6 rounded-full object-cover" />
                  <span className="min-w-0 flex-1 truncate text-sm text-gray-300">Yuki Tanaka</span>
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
