import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AnalyticsDashboardVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AnalyticsDashboardVariant2({
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
}: AnalyticsDashboardVariant2Props) {
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
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
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

            <h1 className="text-lg font-semibold text-gray-900">Customers</h1>
          </div>

          <a
            href="#"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Add customer
          </a>
        </header>

        <main className="flex-1 space-y-6 p-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 lg:col-span-2">
              <h2 className="text-sm font-medium text-gray-900">New customers</h2>

              <div className="mt-4 h-64">
                <canvas
                  id="new-customers-bar-chart"
                  role="img"
                  aria-label="Bar chart showing new customers per month rising from 82 in January to 128 in June"
                ></canvas>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-sm font-medium text-gray-900">Customers by plan</h2>

              <ul className="mt-4 space-y-4">
                <li>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">Team</span>
                    <span className="text-gray-600">1,406</span>
                  </div>

                  <div className="mt-1.5 h-1.5 rounded-full bg-gray-100">
                    <div
                      className="h-1.5 rounded-full bg-indigo-600"
                      style={{ width: '61%' }}
                    ></div>
                  </div>
                </li>

                <li>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">Starter</span>
                    <span className="text-gray-600">742</span>
                  </div>

                  <div className="mt-1.5 h-1.5 rounded-full bg-gray-100">
                    <div
                      className="h-1.5 rounded-full bg-indigo-600"
                      style={{ width: '32%' }}
                    ></div>
                  </div>
                </li>

                <li>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">Enterprise</span>
                    <span className="text-gray-600">170</span>
                  </div>

                  <div className="mt-1.5 h-1.5 rounded-full bg-gray-100">
                    <div className="h-1.5 rounded-full bg-indigo-600" style={{ width: '7%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-sm font-medium text-gray-900">All customers</h2>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label htmlFor="customer-search-input" className="sr-only">
                  Search customers
                </label>

                <div className="relative">
                  <input
                    type="text"
                    id="customer-search-input"
                    placeholder="Search customers"
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

                <label htmlFor="customer-status-filter" className="sr-only">
                  Filter by status
                </label>

                <select
                  id="customer-status-filter"
                  className="rounded-md border-gray-200 py-1.5 text-sm text-gray-900 shadow-xs"
                >
                  <option value="all">All statuses</option>
                  <option value="active">Active</option>
                  <option value="trial">Trial</option>
                  <option value="past-due">Past due</option>
                </select>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="*:font-medium *:text-gray-900">
                    <th className="px-3 py-2 whitespace-nowrap">Customer</th>
                    <th className="px-3 py-2 whitespace-nowrap">Email</th>
                    <th className="px-3 py-2 whitespace-nowrap">Plan</th>
                    <th className="px-3 py-2 whitespace-nowrap">Status</th>
                    <th className="px-3 py-2 whitespace-nowrap">Joined</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr
                    data-customer-row
                    data-customer-status="active"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
                    <td className="px-3 py-2 whitespace-nowrap">nandor@orbitly.com</td>
                    <td className="px-3 py-2 whitespace-nowrap">Team</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Active
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">Feb 3, 2025</td>
                  </tr>

                  <tr
                    data-customer-row
                    data-customer-status="active"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
                    <td className="px-3 py-2 whitespace-nowrap">laszlo@orbitly.com</td>
                    <td className="px-3 py-2 whitespace-nowrap">Enterprise</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Active
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">Nov 18, 2024</td>
                  </tr>

                  <tr
                    data-customer-row
                    data-customer-status="trial"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
                    <td className="px-3 py-2 whitespace-nowrap">nadja@orbitly.com</td>
                    <td className="px-3 py-2 whitespace-nowrap">Team</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs text-yellow-700">
                        Trial
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">Jun 9, 2025</td>
                  </tr>

                  <tr
                    data-customer-row
                    data-customer-status="past-due"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
                    <td className="px-3 py-2 whitespace-nowrap">guillermo@orbitly.com</td>
                    <td className="px-3 py-2 whitespace-nowrap">Starter</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-700">
                        Past due
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">Aug 22, 2024</td>
                  </tr>

                  <tr
                    data-customer-row
                    data-customer-status="active"
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
                    <td className="px-3 py-2 whitespace-nowrap">colin@orbitly.com</td>
                    <td className="px-3 py-2 whitespace-nowrap">Starter</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Active
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">Jan 30, 2025</td>
                  </tr>

                  <tr id="customers-empty-row" className="hidden">
                    <td className="px-3 py-6 text-center text-gray-600" colSpan={5}>
                      No customers match your search.
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
