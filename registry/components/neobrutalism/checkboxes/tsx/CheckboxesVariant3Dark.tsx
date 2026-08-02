import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CheckboxesVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CheckboxesVariant3Dark({
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
}: CheckboxesVariant3DarkProps) {
  const defaultContent = (
    <>
      <fieldset>
        <legend className="sr-only">Checkboxes</legend>

        <div className="flex flex-col items-start divide-y-2 divide-black border-2 border-black bg-white shadow-[4px_4px_0_0] shadow-black dark:divide-white dark:border-white dark:bg-gray-900 dark:shadow-white">
          <label
            htmlFor="Option1"
            className="inline-flex items-start gap-3 p-4 focus-within:bg-yellow-200 hover:bg-yellow-200 dark:focus-within:bg-yellow-700 dark:hover:bg-yellow-700"
          >
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black dark:border-white dark:bg-gray-900 dark:shadow-white dark:focus:ring-white"
              id="Option1"
            />

            <div className="text-black dark:text-white">
              <strong className="font-semibold"> Option 1 </strong>

              <p className="mt-0.5 text-sm text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="inline-flex items-start gap-3 p-4 focus-within:bg-yellow-200 hover:bg-yellow-200 dark:focus-within:bg-yellow-700 dark:hover:bg-yellow-700"
          >
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black dark:border-white dark:bg-gray-900 dark:shadow-white dark:focus:ring-white"
              id="Option2"
            />

            <div className="text-black dark:text-white">
              <strong className="font-semibold"> Option 2 </strong>

              <p className="mt-0.5 text-sm text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="inline-flex items-start gap-3 p-4 focus-within:bg-yellow-200 hover:bg-yellow-200 dark:focus-within:bg-yellow-700 dark:hover:bg-yellow-700"
          >
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black dark:border-white dark:bg-gray-900 dark:shadow-white dark:focus:ring-white"
              id="Option3"
            />

            <div className="text-black dark:text-white">
              <strong className="font-semibold"> Option 3 </strong>

              <p className="mt-0.5 text-sm text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
              </p>
            </div>
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
