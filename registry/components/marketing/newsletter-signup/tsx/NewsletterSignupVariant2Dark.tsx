import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type NewsletterSignupVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function NewsletterSignupVariant2Dark({
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
}: NewsletterSignupVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-center">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">
              Sign up for our newsletter
            </h2>

            <p className="mt-4 text-pretty text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
              architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
              sequi.
            </p>
          </div>

          <form
            action="#"
            className="mx-auto mt-6 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <label htmlFor="Email" className="flex-1">
              <span className="sr-only"> Email </span>

              <input
                type="email"
                id="Email"
                placeholder="Enter your email"
                className="h-12 w-full rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              />
            </label>

            <button
              type="submit"
              className="h-12 rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 dark:text-white dark:hover:bg-indigo-700 dark:hover:text-white"
            >
              Sign Up
            </button>
          </form>
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
