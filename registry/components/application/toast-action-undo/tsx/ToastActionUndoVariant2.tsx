import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ToastActionUndoVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ToastActionUndoVariant2({
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
}: ToastActionUndoVariant2Props) {
  const defaultContent = (
    <>
      <div role="status" aria-live="polite" className="w-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900 text-white shadow-lg">
            <div className="flex items-center justify-between gap-3 py-3 pr-3 pl-4">
              <p className="min-w-0 flex-1 text-sm">
                <span className="font-medium">3 messages deleted.</span>
              </p>
      
              <button
                type="button"
                className="shrink-0 rounded-md px-2.5 py-1 text-sm font-semibold text-blue-400 transition hover:bg-white/10 hover:text-blue-300"
              >
                Undo
              </button>
      
              <button
                type="button"
                aria-label="Dismiss"
                className="shrink-0 rounded-md p-1 text-gray-400 transition hover:bg-white/10 hover:text-gray-200"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
      
            <div className="h-1 w-full bg-white/10" role="progressbar" aria-label="Time remaining to undo" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
              <div className="h-full w-3/5 bg-blue-500"></div>
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
