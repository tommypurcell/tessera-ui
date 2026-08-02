import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ContactFormsVariant5Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ContactFormsVariant5({
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
}: ContactFormsVariant5Props) {
  const defaultContent = (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:py-4">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Get in touch</h2>

            <p className="mt-4 text-pretty text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas delectus alias
              magni velit! Dicta corrupti dignissimos dolor consequatur illum tempore consectetur
              hic a cupiditate sunt quam, earum nisi aperiam.
            </p>

            <dl className="mt-6 space-y-3">
              <div>
                <dt className="sr-only">Phone number</dt>

                <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>

                  <span className="font-medium">+1 (555) 123-4567</span>
                </dd>
              </div>

              <div>
                <dt className="sr-only">Email</dt>

                <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <span className="font-medium">info@example.com</span>
                </dd>
              </div>

              <div>
                <dt className="sr-only">Location</dt>

                <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className="font-medium">123 Main St, Anytown, USA</span>
                </dd>
              </div>
            </dl>
          </div>

          <form action="#" className="space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <div>
              <label className="block text-sm font-medium text-gray-900" htmlFor="name">
                Name
              </label>

              <input
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900" htmlFor="email">
                Email
              </label>

              <input
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900" htmlFor="message">
                Message
              </label>

              <textarea
                className="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                id="message"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
              type="submit"
            >
              Send Message
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
