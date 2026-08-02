import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AnalyticsDashboardVariant3Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AnalyticsDashboardVariant3({
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
}: AnalyticsDashboardVariant3Props) {
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
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
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
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
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

            <h1 className="text-lg font-semibold text-gray-900">Orders</h1>
          </div>

          <a
            href="#"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Export orders
          </a>
        </header>

        <main className="flex-1 space-y-6 p-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Orders vs monthly target</h2>

            <div className="mt-4 h-64">
              <canvas
                id="orders-target-combo-chart"
                role="img"
                aria-label="Combo chart showing monthly orders against a target, with orders passing the target from April onward"
              ></canvas>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-sm font-medium text-gray-900">All orders</h2>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label htmlFor="order-search-input" className="sr-only">
                  Search orders
                </label>

                <div className="relative">
                  <input
                    type="text"
                    id="order-search-input"
                    placeholder="Search orders"
                    className="w-full rounded-md border-gray-200 py-1.5 text-sm text-gray-900 shadow-xs sm:w-56 ltr:pr-9 rtl:pl-9"
                  />

                  <span className="pointer-events-none absolute inset-y-0 grid w-8 place-content-center text-gray-400 ltr:right-0 rtl:left-0">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </span>
                </div>

                <div className="inline-flex rounded-md border border-gray-200 p-0.5 text-xs font-medium">
                  <button
                    type="button"
                    data-order-status-filter="all"
                    aria-pressed="true"
                    className="rounded-sm bg-gray-100 px-2 py-1 text-gray-900"
                  >
                    All
                  </button>

                  <button
                    type="button"
                    data-order-status-filter="paid"
                    aria-pressed="false"
                    className="rounded-sm px-2 py-1 text-gray-600"
                  >
                    Paid
                  </button>

                  <button
                    type="button"
                    data-order-status-filter="pending"
                    aria-pressed="false"
                    className="rounded-sm px-2 py-1 text-gray-600"
                  >
                    Pending
                  </button>

                  <button
                    type="button"
                    data-order-status-filter="refunded"
                    aria-pressed="false"
                    className="rounded-sm px-2 py-1 text-gray-600"
                  >
                    Refunded
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="*:font-medium *:text-gray-900">
                    <th className="px-3 py-2 whitespace-nowrap">Order</th>
                    <th className="px-3 py-2 whitespace-nowrap">Customer</th>
                    <th className="px-3 py-2 whitespace-nowrap">Date</th>
                    <th className="px-3 py-2 whitespace-nowrap">Status</th>
                    <th className="px-3 py-2 whitespace-nowrap">Amount</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr
                    data-order-row
                    data-order-status="paid"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">#3921</td>
                    <td className="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
                    <td className="px-3 py-2 whitespace-nowrap">Jun 12, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Paid
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$412.00</td>
                  </tr>

                  <tr
                    data-order-row
                    data-order-status="pending"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">#3920</td>
                    <td className="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
                    <td className="px-3 py-2 whitespace-nowrap">Jun 11, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs text-yellow-700">
                        Pending
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$128.50</td>
                  </tr>

                  <tr
                    data-order-row
                    data-order-status="paid"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">#3919</td>
                    <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
                    <td className="px-3 py-2 whitespace-nowrap">Jun 10, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Paid
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$894.20</td>
                  </tr>

                  <tr
                    data-order-row
                    data-order-status="refunded"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">#3918</td>
                    <td className="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
                    <td className="px-3 py-2 whitespace-nowrap">Jun 9, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-700">
                        Refunded
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$56.00</td>
                  </tr>

                  <tr
                    data-order-row
                    data-order-status="paid"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">#3917</td>
                    <td className="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
                    <td className="px-3 py-2 whitespace-nowrap">Jun 8, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Paid
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$219.75</td>
                  </tr>

                  <tr
                    data-order-row
                    data-order-status="pending"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">#3916</td>
                    <td className="px-3 py-2 whitespace-nowrap">The Guide</td>
                    <td className="px-3 py-2 whitespace-nowrap">Jun 7, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs text-yellow-700">
                        Pending
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$63.40</td>
                  </tr>

                  <tr id="orders-empty-row" className="hidden">
                    <td className="px-3 py-6 text-center text-gray-600" colSpan={5}>
                      No orders match your search.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
