import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ModalsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ModalsVariant1({
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
}: ModalsVariant1Props) {
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
