import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type UpNextAutoplayCardVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function UpNextAutoplayCardVariant1({
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
}: UpNextAutoplayCardVariant1Props) {
  const defaultContent = (
    <>
      <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=160&h=90&fit=crop"
              alt=""
              className="h-14 w-24 shrink-0 rounded-md object-cover"
            />
      
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-gray-500">Up next</p>
              <p className="truncate text-sm font-semibold text-gray-900">Designing with Tailwind v4</p>
            </div>
      
            <div id="autoplay-1" className="relative flex size-11 shrink-0 items-center justify-center">
              <svg className="size-11 -rotate-90" viewBox="0 0 60 60" aria-hidden="true">
                <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-100" />
                <circle
                  className="js-ring text-blue-600 transition-[stroke-dashoffset] duration-1000 ease-linear"
                  cx="30"
                  cy="30"
                  r="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke-dasharray="163.4"
                  stroke-dashoffset="65.3"
                />
              </svg>
              <span className="js-time absolute text-xs font-semibold text-gray-900">6</span>
            </div>
          </div>
      
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Play now
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
