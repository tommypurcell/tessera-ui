import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ResizableVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ResizableVariant1({
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
}: ResizableVariant1Props) {
  const defaultContent = (
    <>
      <div
            className="flex h-72 w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div className="flex w-1/3 flex-col gap-2 overflow-auto p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Files</h3>
              <ul className="mt-1 space-y-1 text-sm text-gray-700">
                <li className="rounded-md bg-gray-100 px-2 py-1.5 font-medium text-gray-900">index.ts</li>
                <li className="rounded-md px-2 py-1.5 hover:bg-gray-50">utils.ts</li>
                <li className="rounded-md px-2 py-1.5 hover:bg-gray-50">types.ts</li>
                <li className="rounded-md px-2 py-1.5 hover:bg-gray-50">config.json</li>
              </ul>
            </div>
      
            <div
              role="separator"
              aria-orientation="vertical"
              aria-label="Resize panels"
              tabIndex={0}
              className="group relative w-px shrink-0 cursor-col-resize bg-gray-200 focus:outline-none"
            >
              <span
                className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 group-hover:bg-gray-900/5 group-focus-visible:bg-gray-900/10"
              ></span>
              <span
                className="absolute left-1/2 top-1/2 h-8 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300 group-hover:bg-gray-400"
              ></span>
            </div>
      
            <div className="flex-1 overflow-auto p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">index.ts</h3>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-700">export function createStore(initialState) {
        let state = initialState
        const listeners = new Set()
      
        return {
          getState: () => state,
          subscribe: (fn) => {
            listeners.add(fn)
            return () => listeners.delete(fn)
          },
        }
      }</pre>
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
