import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ComparisonSliderVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ComparisonSliderVariant1Dark({
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
}: ComparisonSliderVariant1DarkProps) {
  const defaultContent = (
    <>
      <div id="compare-1-dark" className="group relative aspect-video w-full overflow-hidden rounded-lg border border-gray-800 select-none">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=640&h=360&fit=crop"
              alt="After: renovated living room with bright natural light"
              className="absolute inset-0 size-full object-cover"
            />
      
            <div className="js-reveal absolute inset-0 size-full overflow-hidden" style={{clipPath: 'inset(0 50% 0 0)'}}>
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=640&h=360&fit=crop"
                alt="Before: outdated living room with dim lighting"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
      
            <div
              className="js-handle pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.4)]"
              style={{left: '50%', transform: 'translateX(-50%)'}}
            >
              <span className="absolute top-1/2 left-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-900 text-white shadow-md ring-1 ring-white/20">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                </svg>
              </span>
            </div>
      
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              aria-label="Comparison slider position"
              className="js-slider absolute inset-0 size-full cursor-ew-resize appearance-none bg-transparent opacity-0"
            />
      
            <span className="pointer-events-none absolute top-3 left-3 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">Before</span>
            <span className="pointer-events-none absolute top-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">After</span>
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
