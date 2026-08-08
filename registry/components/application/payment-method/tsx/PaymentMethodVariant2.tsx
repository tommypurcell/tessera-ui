import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PaymentMethodVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PaymentMethodVariant2({
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
}: PaymentMethodVariant2Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm">
            <h3 className="text-sm font-semibold text-gray-900">Payment methods</h3>
            <div role="radiogroup" aria-label="Default payment method" className="mt-2 space-y-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-900 bg-white p-3 shadow-sm ring-1 ring-gray-900">
                <input type="radio" name="payment-method-default" checked className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" />
                <span className="flex h-7 w-10 shrink-0 items-center justify-center rounded bg-gray-900 text-[9px] font-bold italic text-white">VISA</span>
                <span className="min-w-0 flex-1 text-sm text-gray-900">•••• 4242 <span className="text-gray-400">· 08/28</span></span>
              </label>
      
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">
                <input type="radio" name="payment-method-default" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" />
                <span className="flex h-7 w-10 shrink-0 items-center justify-center rounded bg-orange-500 text-[9px] font-bold italic text-white">MC</span>
                <span className="min-w-0 flex-1 text-sm text-gray-700">•••• 8410 <span className="text-gray-400">· 02/27</span></span>
              </label>
      
              <button
                type="button"
                className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-gray-300 p-3 text-sm font-medium text-gray-500 hover:border-gray-400 hover:text-gray-700"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add payment method
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
