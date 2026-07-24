import type { HTMLAttributes } from 'react'

export type ChartsVariant7Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant7({ className, ...props }: ChartsVariant7Props) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-sm font-medium text-gray-900">Revenue: this year vs last year</h2>

        <div className="mt-4 h-64">
          <canvas
            id="yearly-revenue-comparison-line-chart"
            role="img"
            aria-label="Revenue this year vs last year, line chart"
          ></canvas>
        </div>

        <table className="sr-only">
          <caption>Monthly revenue, this year vs last year</caption>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">This year</th>
              <th scope="col">Last year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Jan</th>
              <td>$28,000</td>
              <td>$22,000</td>
            </tr>
            <tr>
              <th scope="row">Feb</th>
              <td>$34,000</td>
              <td>$25,000</td>
            </tr>
            <tr>
              <th scope="row">Mar</th>
              <td>$31,000</td>
              <td>$24,000</td>
            </tr>
            <tr>
              <th scope="row">Apr</th>
              <td>$39,000</td>
              <td>$29,000</td>
            </tr>
            <tr>
              <th scope="row">May</th>
              <td>$42,000</td>
              <td>$31,000</td>
            </tr>
            <tr>
              <th scope="row">Jun</th>
              <td>$48,000</td>
              <td>$35,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
