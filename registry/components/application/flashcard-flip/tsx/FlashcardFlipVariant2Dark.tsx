import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FlashcardFlipVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function FlashcardFlipVariant2Dark({
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
}: FlashcardFlipVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="flex w-full items-center justify-between text-xs font-medium text-gray-400">
            <span>Card 7 of 20</span>
            <span>65% mastered</span>
          </div>
      
          <input type="checkbox" id="flip-2-dark" className="flip-toggle sr-only" />
      
          <label htmlFor="flip-2-dark" className="flip-scene block h-36 w-full cursor-pointer">
            <div className="flip-card relative size-full">
              <div className="flip-face absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-sm">
                <p className="text-base font-semibold text-white">¿Cómo estás?</p>
                <p className="text-xs text-gray-500">Tap to reveal translation</p>
              </div>
      
              <div className="flip-face flip-face-back absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-700 bg-gray-900 p-6 text-center shadow-sm">
                <p className="text-base font-semibold text-white">How are you?</p>
              </div>
            </div>
          </label>
      
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full w-[65%] rounded-full bg-white"></div>
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
