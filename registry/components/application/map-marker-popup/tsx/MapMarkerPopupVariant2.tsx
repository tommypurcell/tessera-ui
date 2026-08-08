import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MapMarkerPopupVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MapMarkerPopupVariant2({
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
}: MapMarkerPopupVariant2Props) {
  const defaultContent = (
    <>
      <div
            className="relative flex h-56 w-full max-w-md items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:18px_18px]"
          >
            <div className="relative">
              <div className="absolute left-1/2 top-full flex -translate-x-1/2 flex-col items-center">
                <span className="flex size-6 -translate-y-1 items-center justify-center rounded-full bg-indigo-600 text-white shadow ring-4 ring-indigo-600/20">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </div>
      
              <div
                role="dialog"
                aria-label="Drop-off point"
                className="relative -translate-y-9 flex w-56 items-start gap-2.5 rounded-lg border border-gray-200 bg-white p-3 shadow-lg shadow-gray-900/10"
              >
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334V6.638c0-1.312-.834-2.481-2.09-2.836A18.3 18.3 0 0 0 12 3.5c-2.185 0-4.31.334-6.09.862m11.34 4.15c-1.353-.164-2.72-.246-4.09-.246m4.09.246a49.05 49.05 0 0 0-4.09-.246m0 0V6.75" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900">Locker #4B</h3>
                  <p className="mt-0.5 text-xs text-gray-500">Package ready for pickup until 8 PM</p>
                </div>
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
