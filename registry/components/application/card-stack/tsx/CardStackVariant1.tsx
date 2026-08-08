import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CardStackVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CardStackVariant1({
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
}: CardStackVariant1Props) {
  const defaultContent = (
    <>
      <div className="flex flex-col items-center">
            <div className="relative h-72 w-56">
              <div className="absolute inset-0 translate-y-4 scale-90 rounded-2xl border border-gray-200 bg-white opacity-60 shadow-sm"></div>
              <div className="absolute inset-0 translate-y-2 scale-95 rounded-2xl border border-gray-200 bg-white opacity-80 shadow-sm"></div>
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-900/10">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop"
                  alt=""
                  className="h-44 w-full object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900">Maya Chen, 28</h3>
                  <p className="mt-0.5 text-xs text-gray-500">Product designer · 3 km away</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">Hiking</span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">Coffee</span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">Design</span>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                aria-label="Reject"
                className="inline-flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-red-500 shadow-sm transition-colors hover:bg-red-50"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Accept"
                className="inline-flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-emerald-500 shadow-sm transition-colors hover:bg-emerald-50"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M11.645 20.91a.75.75 0 0 1-.65-.375C9.24 17.845 5.5 14.7 5.5 10.75a5.25 5.25 0 0 1 9.5-3.077 5.25 5.25 0 0 1 9.5 3.077c0 3.95-3.74 7.095-5.495 9.785a.75.75 0 0 1-.65.375h-6.71Z" clipRule="evenodd" />
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
