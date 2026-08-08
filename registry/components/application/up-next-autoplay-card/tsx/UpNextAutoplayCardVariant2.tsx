import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type UpNextAutoplayCardVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function UpNextAutoplayCardVariant2({
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
}: UpNextAutoplayCardVariant2Props) {
  const defaultContent = (
    <>
      <div className="relative overflow-hidden rounded-lg bg-black">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400&h=225&fit=crop"
              alt=""
              className="aspect-video w-full object-cover opacity-40"
            />
      
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
              <p className="text-xs font-medium text-gray-300">Up next in <span id="autoplay-2-count">5</span></p>
              <p className="text-sm font-semibold text-white">Advanced Grid Layouts</p>
      
              <button
                type="button"
                aria-label="Play now"
                className="mt-1 flex size-10 items-center justify-center rounded-full bg-white text-gray-900 transition hover:scale-105"
              >
                <svg className="ml-0.5 size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v13.72a1 1 0 001.5.87l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z" />
                </svg>
              </button>
      
              <button type="button" className="mt-1 text-xs font-medium text-gray-300 underline-offset-2 hover:text-white hover:underline">
                Cancel
              </button>
            </div>
      
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
              <div id="autoplay-2-bar" className="h-full w-0 bg-white transition-[width] duration-1000 ease-linear"></div>
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
