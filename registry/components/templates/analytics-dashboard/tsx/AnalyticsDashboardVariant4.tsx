import type { HTMLAttributes } from 'react'

export type AnalyticsDashboardVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AnalyticsDashboardVariant4({
  className,
  ...props
}: AnalyticsDashboardVariant4Props) {
  return (
    <div className={className} {...props}>
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
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
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

            <h1 className="text-lg font-semibold text-gray-900">Billing</h1>
          </div>

          <a
            href="#"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Update payment method
          </a>
        </header>

        <main className="flex-1 space-y-6 p-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Current plan</h2>

                <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs text-indigo-700">
                  Team
                </span>
              </div>

              <p className="mt-4">
                <span className="text-2xl font-medium text-gray-900">$30</span>

                <span className="text-xs text-gray-600">/month, billed monthly</span>
              </p>

              <p className="mt-1 text-xs text-gray-600">Renews on July 30, 2026</p>

              <a
                href="#"
                className="mt-4 inline-block rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
              >
                Change plan
              </a>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-sm font-medium text-gray-900">Payment method</h2>

              <div className="mt-4 flex items-center gap-3">
                <span className="grid h-8 w-12 shrink-0 place-content-center rounded-md bg-gray-100 text-xs font-medium text-gray-600">
                  Visa
                </span>

                <div className="text-sm">
                  <p className="font-medium text-gray-900">Ending in 6000</p>
                  <p className="text-gray-600">Expires 10/2060</p>
                </div>
              </div>

              <a
                href="#"
                className="mt-4 inline-block rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
              >
                Update card
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Invoice history</h2>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="*:font-medium *:text-gray-900">
                    <th className="px-3 py-2 whitespace-nowrap">Invoice</th>
                    <th className="px-3 py-2 whitespace-nowrap">Date</th>
                    <th className="px-3 py-2 whitespace-nowrap">Status</th>
                    <th className="px-3 py-2 whitespace-nowrap">Amount</th>
                    <th className="px-3 py-2 whitespace-nowrap"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">INV-2025-0006</td>
                    <td className="px-3 py-2 whitespace-nowrap">Jun 1, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Paid
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$30.00</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <a
                        href="#"
                        className="font-medium text-gray-900 underline underline-offset-2"
                      >
                        Download
                      </a>
                    </td>
                  </tr>

                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">INV-2025-0005</td>
                    <td className="px-3 py-2 whitespace-nowrap">May 1, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-700">
                        Paid
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$30.00</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <a
                        href="#"
                        className="font-medium text-gray-900 underline underline-offset-2"
                      >
                        Download
                      </a>
                    </td>
                  </tr>

                  <tr className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">INV-2025-0004</td>
                    <td className="px-3 py-2 whitespace-nowrap">Apr 1, 2025</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-700">
                        Failed
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">$30.00</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <a
                        href="#"
                        className="font-medium text-gray-900 underline underline-offset-2"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
