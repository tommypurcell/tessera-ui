import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TimelineScrubberVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TimelineScrubberVariant1({
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
}: TimelineScrubberVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-medium text-gray-500">
              <span>Session recording</span>
              <span>12:04 / 28:41</span>
            </div>
      
            <div className="relative mt-3 h-1.5 w-full rounded-full bg-gray-200">
              <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gray-300"></div>
              <div className="absolute inset-y-0 left-0 w-[42%] rounded-full bg-gray-900"></div>
      
              <span className="absolute inset-y-0 left-[8%] w-px bg-white/70" aria-hidden="true"></span>
              <span className="absolute inset-y-0 left-[22%] w-px bg-white/70" aria-hidden="true"></span>
              <span className="absolute inset-y-0 left-[64%] w-px bg-white/70" aria-hidden="true"></span>
      
              <div
                role="slider"
                tabIndex={0}
                aria-label="Playback position"
                aria-valuemin={0}
                aria-valuemax={1721}
                aria-valuenow={724}
                aria-valuetext="12 minutes, 4 seconds"
                className="absolute top-1/2 left-[42%] size-3.5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white bg-gray-900 shadow ring-1 ring-gray-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              ></div>
            </div>
      
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                aria-label="Play"
                className="inline-flex size-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-700"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
                </svg>
              </button>
              <p className="text-xs text-gray-500">3 flagged events on this timeline</p>
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
