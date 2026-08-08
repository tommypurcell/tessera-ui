import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type VideoPlayerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function VideoPlayerVariant1Dark({
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
}: VideoPlayerVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-white/10" style={{aspectRatio: '16 / 9'}}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>

      <button type="button" aria-label="Play" className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-transform hover:scale-105">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-7">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-3 pt-10">
        <div className="group relative mb-2 h-1 w-full cursor-pointer rounded-full bg-white/20">
          <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-white/35"></div>
          <div className="absolute inset-y-0 left-0 w-1/4 rounded-full bg-red-500"></div>
          <div className="absolute left-1/4 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 shadow"></div>
        </div>

        <div className="flex items-center gap-3 text-white">
          <button type="button" aria-label="Play" className="shrink-0">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          <span className="shrink-0 font-mono text-xs tabular-nums">2:14 / 8:47</span>

          <div className="flex items-center gap-1.5">
            <button type="button" aria-label="Mute" className="shrink-0">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25 4.5 10.5H3a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5l2.25 2.25V8.25Z" />
              </svg>
            </button>
            <div className="h-1 w-14 rounded-full bg-white/20">
              <div className="h-full w-2/3 rounded-full bg-white"></div>
            </div>
          </div>

          <span className="ml-auto shrink-0"></span>

          <button type="button" className="shrink-0 rounded px-1.5 py-0.5 text-xs font-medium hover:bg-white/10">1.0x</button>

          <button type="button" aria-label="Fullscreen" className="shrink-0">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </button>
        </div>
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
