import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ModalsVariant5Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ModalsVariant5({
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
}: ModalsVariant5Props) {
  const defaultContent = (
    <>
      <button
            data-modal-open
            className="rounded border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-900"
          >
            Open
          </button>
      
          <dialog
            closedby="any"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
            className="m-auto max-w-xl rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/50"
          >
            <div className="flex flex-col gap-4">
              <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">Modal Title</h2>
      
              <p id="modalDescription" className="text-pretty text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu
                consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
      
              <label htmlFor="Confirm" className="block">
                <span className="text-sm font-medium text-gray-700">
                  Please type "Confirm" to complete action
                </span>
      
                <input
                  type="text"
                  id="Confirm"
                  className="mt-0.5 w-full rounded border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </label>
      
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  data-modal-close
                  className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
                >
                  Cancel
                </button>
      
                <button
                  type="button"
                  data-modal-close
                  className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
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
