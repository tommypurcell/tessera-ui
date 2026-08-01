import type { HTMLAttributes } from 'react'

export type ChartsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant1({ className, ...props }: ChartsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-900">Monthly revenue</h2>
      
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
                id="revenue-line-chart"
                role="img"
                aria-label="Monthly revenue, line chart"
              ></canvas>
            </div>
      
            <table id="revenue-line-chart-table" className="sr-only" aria-live="polite">
              <caption>
                Monthly revenue by month
              </caption>
              <thead>
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Revenue</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
    </div>
  )
}
