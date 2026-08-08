import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ToastActionUndoVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ToastActionUndoVariant1Dark({
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
}: ToastActionUndoVariant1DarkProps) {
  const defaultContent = (
    <>
      <div
            role="status"
            aria-live="polite"
            className="flex w-full items-center gap-3 rounded-lg border border-gray-700 bg-gray-800 py-3 pr-3 pl-4 text-white shadow-lg"
          >
            <div className="relative flex size-8 shrink-0 items-center justify-center">
              <svg className="size-8 -rotate-90" viewBox="0 0 32 32" aria-hidden="true">
                <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-600" />
                <circle
                  cx="16"
                  cy="16"
                  r="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  stroke-dasharray="81.7"
                  stroke-dashoffset="24.5"
                  className="text-white"
                />
              </svg>
              <span className="absolute text-[10px] font-semibold tabular-nums">4</span>
            </div>
      
            <p className="min-w-0 flex-1 text-sm">
              <span className="font-medium">Email archived.</span>
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
