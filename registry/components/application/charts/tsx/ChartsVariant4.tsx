import type { HTMLAttributes } from 'react'

export type ChartsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant4({ className, ...props }: ChartsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-6">
        <div>
          <strong className="block text-sm font-medium text-gray-600">Monthly revenue</strong>

          <p className="text-2xl font-medium text-gray-900">$48,204</p>
        </div>

        <div className="h-12 w-24 shrink-0">
          <canvas
            id="revenue-sparkline-chart"
            role="img"
            aria-label="Monthly revenue trend, sparkline chart"
          ></canvas>
        </div>

        <table className="sr-only">
          <caption>Monthly revenue by month</caption>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Jan</th>
              <td>$28,000</td>
            </tr>
            <tr>
              <th scope="row">Feb</th>
              <td>$34,000</td>
            </tr>
            <tr>
              <th scope="row">Mar</th>
              <td>$31,000</td>
            </tr>
            <tr>
              <th scope="row">Apr</th>
              <td>$39,000</td>
            </tr>
            <tr>
              <th scope="row">May</th>
              <td>$42,000</td>
            </tr>
            <tr>
              <th scope="row">Jun</th>
              <td>$48,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
