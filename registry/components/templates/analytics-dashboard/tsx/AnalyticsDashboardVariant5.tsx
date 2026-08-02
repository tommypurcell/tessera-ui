import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AnalyticsDashboardVariant5Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AnalyticsDashboardVariant5({
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
}: AnalyticsDashboardVariant5Props) {
  const defaultContent = (
    <>
      <input type="checkbox" id="sidebar-toggle" className="peer sr-only" />

      <label
        htmlFor="sidebar-toggle"
        aria-hidden="true"
        className="fixed inset-0 z-30 hidden bg-gray-900/50 peer-checked:block lg:hidden"
      ></label>

      <div
        id="dashboard-sidebar"
        className="fixed inset-y-0 start-0 z-40 flex w-64 -translate-x-full flex-col justify-between overflow-y-auto border-e border-gray-200 bg-white transition-transform duration-300 peer-checked:translate-x-0 lg:static lg:shrink-0 lg:translate-x-0"
      >
        <div className="p-4">
          <span className="grid h-12 w-32 place-content-center rounded-lg bg-gray-100 text-sm text-gray-600">
            Logo
          </span>

          <nav aria-label="Dashboard" className="mt-4">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  Overview
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  Customers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  Orders
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  Billing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
                >
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-200">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 hover:transition-colors"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=1160"
              className="size-10 rounded-full object-cover"
            />

            <p className="text-xs text-gray-900">
              <strong className="block font-medium">Priya Natarajan</strong>

              <span>priya@orbitly.com</span>
            </p>
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <div className="flex items-center gap-4">
            <label
              htmlFor="sidebar-toggle"
              id="sidebar-toggle-label"
              aria-expanded="false"
              aria-controls="dashboard-sidebar"
              className="cursor-pointer rounded-md p-2 text-gray-600 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-gray-900 peer-focus-visible:ring-offset-2 hover:bg-gray-100 lg:hidden"
            >
              <span className="sr-only">Toggle menu</span>

              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            <h1 className="text-lg font-semibold text-gray-900">Settings</h1>
          </div>

          <button
            type="submit"
            form="account-settings-form"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Save changes
          </button>
        </header>

        <main className="flex-1 space-y-6 p-6">
          <form
            id="account-settings-form"
            className="rounded-lg border border-gray-200 bg-white p-6"
          >
            <h2 className="text-sm font-medium text-gray-900">Profile</h2>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>

                <input
                  type="text"
                  id="full-name"
                  value="Priya Natarajan"
                  className="mt-1 w-full rounded-md border-gray-200 text-sm text-gray-900 shadow-xs"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>

                <input
                  type="email"
                  id="email-address"
                  value="priya@orbitly.com"
                  className="mt-1 w-full rounded-md border-gray-200 text-sm text-gray-900 shadow-xs"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="team-name" className="block text-sm font-medium text-gray-700">
                  Team name
                </label>

                <input
                  type="text"
                  id="team-name"
                  value="Orbitly"
                  className="mt-1 w-full rounded-md border-gray-200 text-sm text-gray-900 shadow-xs"
                />
              </div>
            </div>
          </form>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Notifications</h2>

            <ul className="mt-4 divide-y divide-gray-200">
              <li className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">Email notifications</p>
                  <p className="text-xs text-gray-600">
                    Get notified when a customer places an order.
                  </p>
                </div>

                <label
                  htmlFor="email-notifications-toggle"
                  className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-gray-200 transition has-checked:bg-indigo-600"
                >
                  <input
                    type="checkbox"
                    id="email-notifications-toggle"
                    checked
                    className="peer sr-only"
                  />

                  <span className="size-4 translate-x-1 rounded-full bg-white transition peer-checked:translate-x-6"></span>
                </label>
              </li>

              <li className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">Product updates</p>
                  <p className="text-xs text-gray-600">Occasional emails about new features.</p>
                </div>

                <label
                  htmlFor="product-updates-toggle"
                  className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-gray-200 transition has-checked:bg-indigo-600"
                >
                  <input type="checkbox" id="product-updates-toggle" className="peer sr-only" />

                  <span className="size-4 translate-x-1 rounded-full bg-white transition peer-checked:translate-x-6"></span>
                </label>
              </li>

              <li className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">Weekly summary</p>
                  <p className="text-xs text-gray-600">
                    A digest of revenue and orders every Monday.
                  </p>
                </div>

                <label
                  htmlFor="weekly-summary-toggle"
                  className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-gray-200 transition has-checked:bg-indigo-600"
                >
                  <input
                    type="checkbox"
                    id="weekly-summary-toggle"
                    checked
                    className="peer sr-only"
                  />

                  <span className="size-4 translate-x-1 rounded-full bg-white transition peer-checked:translate-x-6"></span>
                </label>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Danger zone</h2>

            <p className="mt-2 text-sm text-gray-600">
              Deleting your team removes all customers, orders, and billing history. This cannot be
              undone.
            </p>

            <button
              type="button"
              className="mt-4 inline-block rounded-md border border-red-200 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50"
            >
              Delete team
            </button>
          </div>
        </main>
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
