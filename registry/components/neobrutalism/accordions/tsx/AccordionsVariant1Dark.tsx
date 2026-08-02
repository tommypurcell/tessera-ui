import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AccordionsVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AccordionsVariant1Dark({
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
}: AccordionsVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="space-y-3">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] shadow-black hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-0 dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-white dark:hover:bg-yellow-700 dark:focus:bg-yellow-700">
            <span className="font-semibold">What are the basic features?</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 group-open:-rotate-180"
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

          <div className="p-4">
            <p className="text-black dark:text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] shadow-black hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-0 dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-white dark:hover:bg-yellow-700 dark:focus:bg-yellow-700">
            <span className="font-semibold">How do I get started?</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 group-open:-rotate-180"
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

          <div className="p-4">
            <p className="text-black dark:text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] shadow-black hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-0 dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-white dark:hover:bg-yellow-700 dark:focus:bg-yellow-700">
            <span className="font-semibold">What support options are available?</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 group-open:-rotate-180"
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

          <div className="p-4">
            <p className="text-black dark:text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>
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
