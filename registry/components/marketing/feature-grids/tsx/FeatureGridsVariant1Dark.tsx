import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FeatureGridsVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function FeatureGridsVariant1Dark({
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
}: FeatureGridsVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl dark:text-white">
            Features for growth
          </h2>

          <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tenetur, nemo quam
            voluptas sunt impedit dolorem asperiores aliquid doloribus fugit.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
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

            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              High performance
            </h3>

            <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
              Lightning-quick load times optimized for every device
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
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

            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Enterprise security
            </h3>

            <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
              Enterprise-grade security built into every layer
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
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

            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Highly configurable
            </h3>

            <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
              Adapt every aspect to match your brand and needs
            </p>
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
