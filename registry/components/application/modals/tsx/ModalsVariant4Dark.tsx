import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ModalsVariant4DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ModalsVariant4Dark({
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
}: ModalsVariant4DarkProps) {
  const defaultContent = (
    <>
      <button
            data-modal-open
            className="rounded border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            Open
          </button>
      
          <dialog
            closedby="any"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
            className="m-auto max-w-xl rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/50 dark:bg-gray-900 dark:backdrop:bg-white/50"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                  Modal Title
                </h2>
      
                <button
                  type="button"
                  data-modal-close
                  className="-me-4 -mt-4 rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300 dark:focus:ring-indigo-300 dark:focus:ring-offset-gray-900 dark:focus-visible:ring-indigo-300 dark:focus-visible:ring-offset-gray-900"
                  aria-label="Close"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
      
              <p id="modalDescription" className="text-pretty text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu
                consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
      
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  data-modal-close
                  className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-indigo-300 dark:focus:ring-offset-gray-900 dark:focus-visible:ring-indigo-300 dark:focus-visible:ring-offset-gray-900"
                >
                  Cancel
                </button>
      
                <button
                  type="button"
                  data-modal-close
                  className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-blue-200 dark:focus:ring-indigo-300 dark:focus:ring-offset-gray-900 dark:focus-visible:ring-indigo-300 dark:focus-visible:ring-offset-gray-900"
                >
                  Done
                </button>
              </div>
            </div>
          </dialog>
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
