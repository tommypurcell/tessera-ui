import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RadioGroupsVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RadioGroupsVariant2Dark({
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
}: RadioGroupsVariant2DarkProps) {
  const defaultContent = (
    <>
      <fieldset className="space-y-3">
            <legend className="sr-only">Delivery</legend>
      
            <div>
              <label
                htmlFor="DeliveryStandard"
                className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-gray-800"
              >
                <div>
                  <p className="text-gray-700 dark:text-gray-200">Standard</p>
      
                  <p className="text-gray-900 dark:text-white">Free</p>
                </div>
      
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryStandard"
                  id="DeliveryStandard"
                  className="size-5 border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  checked
                />
              </label>
            </div>
      
            <div>
              <label
                htmlFor="DeliveryPriority"
                className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-gray-800"
              >
                <div>
                  <p className="text-gray-700 dark:text-gray-200">Next Day</p>
      
                  <p className="text-gray-900 dark:text-white">£9.99</p>
                </div>
      
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryPriority"
                  id="DeliveryPriority"
                  className="size-5 border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                />
              </label>
            </div>
          </fieldset>
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
