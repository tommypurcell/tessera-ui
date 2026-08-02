import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FeatureGridsVariant4DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function FeatureGridsVariant4Dark({
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
}: FeatureGridsVariant4DarkProps) {
  const defaultContent = (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                High performance
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus consectetur
                eius quo ea ipsa illum eos amet velit assumenda.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Enterprise security
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio fugit eos quia
                ipsam ullam pariatur iusto accusantium possimus distinctio?
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Highly configurable
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea cum harum corporis
                debitis. Nobis officia dignissimos aliquam praesentium quod?
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Advanced reporting
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea cum harum corporis
                debitis. Nobis officia dignissimos aliquam praesentium quod?
              </p>
            </div>
          </div>
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
