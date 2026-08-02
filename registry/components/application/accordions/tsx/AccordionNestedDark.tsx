import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AccordionNestedDarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Native disclosure accordion. The browser manages keyboard and open-state behavior.
 */
export function AccordionNestedDark({
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
}: AccordionNestedDarkProps) {
  const defaultContent = (
    <>
      <div className="space-y-2">
        <details className="group space-y-2 [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
            <span>Team Settings</span>

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

          <div className="space-y-2 pl-4">
            <details className="group/members [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                <span>Members</span>

                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-300 group-open/members:-rotate-180"
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
                <p className="text-gray-700 dark:text-gray-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae
                  hic dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut
                  minus iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos
                  officia. Quos, temporibus perspiciatis!
                </p>
              </div>
            </details>

            <details className="group/roles [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                <span>Roles & Permissions</span>

                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-300 group-open/roles:-rotate-180"
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
                <p className="text-gray-700 dark:text-gray-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae
                  hic dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut
                  minus iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos
                  officia. Quos, temporibus perspiciatis!
                </p>
              </div>
            </details>
          </div>
        </details>

        <details className="group space-y-2 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
            <span>Integration Settings</span>

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

          <div className="space-y-2 pl-4">
            <details className="group/keys [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                <span>API Keys</span>

                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-300 group-open/keys:-rotate-180"
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
                <p className="text-gray-700 dark:text-gray-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae
                  hic dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut
                  minus iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos
                  officia. Quos, temporibus perspiciatis!
                </p>
              </div>
            </details>
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
