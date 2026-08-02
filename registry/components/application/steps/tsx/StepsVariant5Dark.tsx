import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StepsVariant5DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StepsVariant5Dark({
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
}: StepsVariant5DarkProps) {
  const defaultContent = (
    <>
      <div>
        <h2 className="sr-only">Steps</h2>

        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200 dark:after:bg-gray-700">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2 bg-white p-2 dark:bg-gray-900">
              <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold dark:bg-gray-800">
                1
              </span>

              <span className="hidden sm:block"> Details </span>
            </li>

            <li className="flex items-center gap-2 bg-white p-2 dark:bg-gray-900">
              <span className="size-6 rounded-full bg-blue-500 text-center text-[10px]/6 font-bold text-white">
                2
              </span>

              <span className="hidden sm:block"> Address </span>
            </li>

            <li className="flex items-center gap-2 bg-white p-2 dark:bg-gray-900">
              <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold dark:bg-gray-800">
                3
              </span>

              <span className="hidden sm:block"> Payment </span>
            </li>
          </ol>
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
