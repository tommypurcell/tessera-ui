import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PaymentMethodVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PaymentMethodVariant1({
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
}: PaymentMethodVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-11 shrink-0 items-center justify-center rounded-md bg-gray-900 text-[10px] font-bold italic tracking-wide text-white">
                VISA
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-900">Visa •••• 4242</p>
                  <span className="rounded-full bg-gray-900 px-2 py-0.5 text-[10px] font-medium text-white">Default</span>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">Expires 08/2028</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
              <button type="button" className="text-xs font-medium text-gray-600 hover:text-gray-900 hover:underline">
                Edit
              </button>
              <button type="button" className="text-xs font-medium text-red-600 hover:text-red-700 hover:underline">
                Remove
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
