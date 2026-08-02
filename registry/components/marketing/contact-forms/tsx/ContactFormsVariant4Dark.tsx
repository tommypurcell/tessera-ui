import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ContactFormsVariant4DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ContactFormsVariant4Dark({
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
}: ContactFormsVariant4DarkProps) {
  const defaultContent = (
    <>
      <form
        action="#"
        className="mx-auto grid max-w-lg grid-cols-1 gap-4 rounded-lg border border-gray-300 bg-gray-100 p-6 sm:grid-cols-2 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">
            Name
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="phone"
          >
            Phone
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            id="phone"
            type="tel"
            placeholder="Your phone"
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            id="message"
            rows={4}
            placeholder="Your message"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-700 dark:hover:text-white"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
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
