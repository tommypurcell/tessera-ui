import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AnalyticsDashboardVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AnalyticsDashboardVariant1({
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
}: AnalyticsDashboardVariant1Props) {
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
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
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

            <h1 className="text-lg font-semibold text-gray-900">Overview</h1>
          </div>

          <a
            href="#"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            New report
          </a>
        </header>

        <main className="flex-1 space-y-6 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <article className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6">
              <div className="inline-flex gap-2 self-end rounded-sm bg-green-100 p-1 text-green-600">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>

                <span className="sr-only">Increase: </span>

                <span className="text-xs font-medium">12.4%</span>
              </div>

              <div>
                <strong className="block text-sm font-medium text-gray-600">Monthly revenue</strong>

                <p>
                  <span className="text-2xl font-medium text-gray-900">$48,204</span>

                  <span className="text-xs text-gray-600">from $42,910</span>
                </p>
              </div>

              <div className="h-10">
                <canvas
                  id="revenue-trend-sparkline"
                  role="img"
                  aria-label="Sparkline showing monthly revenue trending upward over the last six months"
                ></canvas>
              </div>
            </article>

            <article className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6">
              <div className="inline-flex gap-2 self-end rounded-sm bg-green-100 p-1 text-green-600">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>

                <span className="sr-only">Increase: </span>

                <span className="text-xs font-medium">4.1%</span>
              </div>

              <div>
                <strong className="block text-sm font-medium text-gray-600">
                  Active customers
                </strong>

                <p>
                  <span className="text-2xl font-medium text-gray-900">2,318</span>

                  <span className="text-xs text-gray-600">from 2,227</span>
                </p>
              </div>
            </article>

            <article className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6">
              <div className="inline-flex gap-2 self-end rounded-sm bg-red-100 p-1 text-red-600">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>

                <span className="sr-only">Decrease: </span>

                <span className="text-xs font-medium">2.6%</span>
              </div>

              <div>
                <strong className="block text-sm font-medium text-gray-600">Churn rate</strong>

                <p>
                  <span className="text-2xl font-medium text-gray-900">1.8%</span>

                  <span className="text-xs text-gray-600">from 2.1%</span>
                </p>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Revenue trend</h2>

                <div className="inline-flex rounded-md border border-gray-200 p-0.5 text-xs font-medium">
                  <button
                    type="button"
                    data-revenue-range="6m"
                    aria-pressed="true"
                    className="rounded-sm bg-gray-100 px-2 py-1 text-gray-900"
                  >
                    6M
                  </button>

                  <button
                    type="button"
                    data-revenue-range="12m"
                    aria-pressed="false"
                    className="rounded-sm px-2 py-1 text-gray-600"
                  >
                    12M
                  </button>
                </div>
              </div>

              <div className="mt-4 h-64">
                <canvas
                  id="revenue-trend-line-chart"
                  role="img"
                  aria-label="Line chart showing monthly revenue rising from $28,000 in January to $48,000 in June"
                ></canvas>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-sm font-medium text-gray-900">Orders by status</h2>

              <div className="mt-4 h-64">
                <canvas
                  id="order-status-donut-chart"
                  role="img"
                  aria-label="Donut chart showing 68% of orders paid, 22% pending, and 10% refunded"
                ></canvas>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Recent orders</h2>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="*:font-medium *:text-gray-900">
                    <th className="px-3 py-2 whitespace-nowrap">Customer</th>
                    <th className="px-3 py-2 whitespace-nowrap">Order</th>
                    <th className="px-3 py-2 whitespace-nowrap">Status</th>
                    <th className="px-3 py-2 whitespace-nowrap">Amount</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
                    <td className="px-3 py-2 whitespace-nowrap">#3921</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Paid
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$412.00</td>
                  </tr>

                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
                    <td className="px-3 py-2 whitespace-nowrap">#3920</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs text-yellow-700">
                        Pending
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$128.50</td>
                  </tr>

                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
                    <td className="px-3 py-2 whitespace-nowrap">#3919</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Paid
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$894.20</td>
                  </tr>

                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
                    <td className="px-3 py-2 whitespace-nowrap">#3918</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-700">
                        Refunded
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$56.00</td>
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
