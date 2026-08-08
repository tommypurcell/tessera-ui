import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PaymentMethodVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PaymentMethodVariant2Dark({
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
}: PaymentMethodVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm">
            <h3 className="text-sm font-semibold text-white">Payment methods</h3>
            <div role="radiogroup" aria-label="Default payment method" className="mt-2 space-y-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-white bg-gray-900 p-3 shadow-sm ring-1 ring-white">
                <input type="radio" name="payment-method-default-dark" checked className="size-4 border-gray-600 text-white focus:ring-white" />
                <span className="flex h-7 w-10 shrink-0 items-center justify-center rounded bg-white text-[9px] font-bold italic text-gray-900">VISA</span>
                <span className="min-w-0 flex-1 text-sm text-white">•••• 4242 <span className="text-gray-500">· 08/28</span></span>
              </label>
      
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-700 bg-gray-900 p-3 hover:bg-gray-800">
                <input type="radio" name="payment-method-default-dark" className="size-4 border-gray-600 text-white focus:ring-white" />
                <span className="flex h-7 w-10 shrink-0 items-center justify-center rounded bg-orange-500 text-[9px] font-bold italic text-white">MC</span>
                <span className="min-w-0 flex-1 text-sm text-gray-300">•••• 8410 <span className="text-gray-500">· 02/27</span></span>
              </label>
      
              <button
                type="button"
                className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-gray-700 p-3 text-sm font-medium text-gray-400 hover:border-gray-600 hover:text-gray-200"
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
