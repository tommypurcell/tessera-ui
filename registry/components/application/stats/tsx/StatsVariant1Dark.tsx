import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StatsVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StatsVariant1Dark({
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
}: StatsVariant1DarkProps) {
  const defaultContent = (
    <>
      <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="inline-flex gap-2 self-end rounded-sm bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>

          <span className="sr-only">Increase: </span>

          <span className="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {' '}
            Profit{' '}
          </strong>

          <p>
            <span className="text-2xl font-medium text-gray-900 dark:text-white"> $404.32 </span>

            <span className="text-xs text-gray-500 dark:text-gray-400"> from $240.94 </span>
          </p>
        </div>
      </article>

      <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="inline-flex gap-2 self-end rounded-sm bg-red-100 p-1 text-red-600 dark:bg-red-700 dark:text-red-50">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>

          <span className="sr-only">Decrease: </span>

          <span className="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {' '}
            Profit{' '}
          </strong>

          <p>
            <span className="text-2xl font-medium text-gray-900 dark:text-white"> $240.94 </span>

            <span className="text-xs text-gray-500 dark:text-gray-400"> from $404.32 </span>
          </p>
        </div>
      </article>
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
