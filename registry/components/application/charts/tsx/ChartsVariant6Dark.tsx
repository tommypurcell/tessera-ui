import type { HTMLAttributes } from 'react'

export type ChartsVariant6DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant6Dark({ className, ...props }: ChartsVariant6DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
        <h2 className="text-sm font-medium text-white">Revenue vs target</h2>

        <div className="mt-4 h-64">
          <canvas
            id="revenue-target-combo-chart"
            role="img"
            aria-label="Revenue vs target, combo chart"
          ></canvas>
        </div>

        <table className="sr-only">
          <caption>Monthly revenue against quarterly target</caption>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Revenue</th>
              <th scope="col">Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Jan</th>
              <td>$28,000</td>
              <td>$32,000</td>
            </tr>
            <tr>
              <th scope="row">Feb</th>
              <td>$34,000</td>
              <td>$32,000</td>
            </tr>
            <tr>
              <th scope="row">Mar</th>
              <td>$31,000</td>
              <td>$32,000</td>
            </tr>
            <tr>
              <th scope="row">Apr</th>
              <td>$39,000</td>
              <td>$40,000</td>
            </tr>
            <tr>
              <th scope="row">May</th>
              <td>$42,000</td>
              <td>$40,000</td>
            </tr>
            <tr>
              <th scope="row">Jun</th>
              <td>$48,000</td>
              <td>$40,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
