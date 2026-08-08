import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FlashcardFlipVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function FlashcardFlipVariant1Dark({
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
}: FlashcardFlipVariant1DarkProps) {
  const defaultContent = (
    <>
      <input type="checkbox" id="flip-1-dark" className="flip-toggle sr-only" checked />
      
          <label htmlFor="flip-1-dark" className="flip-scene block h-44 w-full cursor-pointer">
            <div className="flip-card relative size-full">
              <div className="flip-face absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-sm">
                <p className="text-xs font-medium text-gray-500 uppercase">Term</p>
                <p className="text-lg font-semibold text-white">Idempotent</p>
                <p className="text-xs text-gray-500">Tap to reveal</p>
              </div>
      
              <div className="flip-face flip-face-back absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 p-6 text-center shadow-sm">
                <p className="text-xs font-medium text-blue-300 uppercase">Definition</p>
                <p className="text-sm text-blue-100">
                  An operation that produces the same result no matter how many times it's applied.
                </p>
              </div>
            </div>
          </label>
      
          <div className="flex w-full gap-2">
            <button
              type="button"
              className="flex-1 rounded-md border border-gray-700 px-3 py-2 text-sm font-semibold text-gray-200 transition hover:bg-gray-800"
            >
              Review again
            </button>
            <button
              type="button"
              className="flex-1 rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-400"
            >
              I know this
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
