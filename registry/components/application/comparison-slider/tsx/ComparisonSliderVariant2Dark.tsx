import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ComparisonSliderVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ComparisonSliderVariant2Dark({
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
}: ComparisonSliderVariant2DarkProps) {
  const defaultContent = (
    <>
      <div id="compare-2-dark" className="group relative aspect-video w-full overflow-hidden rounded-lg select-none">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=640&h=360&fit=crop"
              alt="After: landscaped garden in full bloom"
              className="absolute inset-0 size-full object-cover"
            />
      
            <div className="js-reveal absolute inset-0 size-full overflow-hidden" style={{clipPath: 'inset(0 65% 0 0)'}}>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=640&h=360&fit=crop"
                alt="Before: overgrown and neglected garden"
                className="absolute inset-0 size-full object-cover grayscale"
              />
            </div>
      
            <div
              className="js-handle pointer-events-none absolute inset-y-0 w-1 bg-white"
              style={{left: '35%', transform: 'translateX(-50%)'}}
            >
              <span className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg ring-1 ring-white/20">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                </svg>
              </span>
            </div>
      
            <input
              type="range"
              min="0"
              max="100"
              value="35"
              aria-label="Garden renovation comparison slider"
              className="js-slider absolute inset-0 size-full cursor-ew-resize appearance-none bg-transparent opacity-0"
            />
          </div>
      
          <div className="flex items-center justify-between text-xs font-medium text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-gray-600"></span>
              Before renovation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-blue-400"></span>
              After renovation
            </span>
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
