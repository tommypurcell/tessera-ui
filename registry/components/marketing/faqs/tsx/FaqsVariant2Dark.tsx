import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FaqsVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Native details and summary elements preserve keyboard and disclosure behavior.
 */
export function FaqsVariant2Dark({
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
}: FaqsVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="flow-root">
        <div className="-my-4 flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="pt-4 text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
              culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
              officiis explicabo consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="pt-4 text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
              culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
              officiis explicabo consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="pt-4 text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
              culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
              officiis explicabo consequuntur distinctio corporis earum similique!
            </p>
          </details>
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
