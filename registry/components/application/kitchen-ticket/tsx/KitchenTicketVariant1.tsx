import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type KitchenTicketVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function KitchenTicketVariant1({
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
}: KitchenTicketVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xs rounded-lg border border-amber-300 bg-white shadow-sm">
            <div className="flex items-center justify-between rounded-t-lg bg-amber-400 px-3 py-2">
              <span className="text-sm font-bold text-amber-950">Table 12</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-xs font-semibold text-amber-800">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                07:42
              </span>
            </div>
      
            <ul className="divide-y divide-dashed divide-gray-200 px-3 py-2">
              <li className="flex items-start justify-between py-1.5">
                <span className="text-sm text-gray-900">2× Margherita pizza</span>
              </li>
              <li className="flex items-start justify-between py-1.5">
                <span className="text-sm text-gray-900">1× Caesar salad <span className="text-xs text-red-600">(no anchovies)</span></span>
              </li>
              <li className="flex items-start justify-between py-1.5">
                <span className="text-sm text-gray-900">3× Sparkling water</span>
              </li>
            </ul>
      
            <div className="border-t border-dashed border-gray-200 p-2.5">
              <button type="button" className="w-full rounded-md bg-gray-900 py-2 text-sm font-semibold text-white hover:bg-gray-700">
                Bump
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
