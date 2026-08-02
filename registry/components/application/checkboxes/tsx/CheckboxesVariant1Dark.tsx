import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CheckboxesVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CheckboxesVariant1Dark({
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
}: CheckboxesVariant1DarkProps) {
  const defaultContent = (
    <>
      <fieldset>
            <legend className="sr-only">Checkboxes</legend>
      
            <div className="flex flex-col items-start gap-3">
              <label htmlFor="Option1" className="inline-flex items-center gap-3">
                <input
                  type="checkbox"
                  className="size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  id="Option1"
                />
      
                <span className="font-medium text-gray-700 dark:text-gray-200"> Option 1 </span>
              </label>
      
              <label htmlFor="Option2" className="inline-flex items-center gap-3">
                <input
                  type="checkbox"
                  className="size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  id="Option2"
                />
      
                <span className="font-medium text-gray-700 dark:text-gray-200"> Option 2 </span>
              </label>
      
              <label htmlFor="Option3" className="inline-flex items-center gap-3">
                <input
                  type="checkbox"
                  className="size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  id="Option3"
                />
      
                <span className="font-medium text-gray-700 dark:text-gray-200"> Option 3 </span>
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
