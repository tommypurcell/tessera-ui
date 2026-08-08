import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AudioPlayerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AudioPlayerVariant1Dark({
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
}: AudioPlayerVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-md rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Pause"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-gray-200"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M6.75 5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Z" />
                </svg>
              </button>
      
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">Field notes — Episode 12</p>
                <div className="relative mt-1.5 flex h-6 items-end gap-px" role="img" aria-label="Waveform, 1 minute 42 seconds of 4 minutes 10 seconds played">
                  <span className="h-2 w-full rounded-sm bg-white"></span>
                  <span className="h-4 w-full rounded-sm bg-white"></span>
                  <span className="h-3 w-full rounded-sm bg-white"></span>
                  <span className="h-5 w-full rounded-sm bg-white"></span>
                  <span className="h-2.5 w-full rounded-sm bg-white"></span>
                  <span className="h-4 w-full rounded-sm bg-white"></span>
                  <span className="h-3 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-5 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-2 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-4 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-3.5 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-2 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-5 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-3 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-4 w-full rounded-sm bg-gray-700"></span>
                  <span className="h-2.5 w-full rounded-sm bg-gray-700"></span>
                </div>
                <div className="mt-1 flex justify-between text-[11px] text-gray-500">
                  <span>1:42</span>
                  <span>4:10</span>
                </div>
              </div>
      
              <button type="button" aria-label="Mute" className="shrink-0 text-gray-500 hover:text-gray-300">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                </svg>
              </button>
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
