import type { HTMLAttributes } from 'react'

export type ChartsVariant9DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant9Dark({ className, ...props }: ChartsVariant9DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
        <h2 className="text-sm font-medium text-white">Traffic sources</h2>

        <div className="mt-4 h-64">
          <canvas
            id="traffic-sources-polar-area-chart"
            role="img"
            aria-label="Traffic sources, polar area chart"
          ></canvas>
        </div>

        <table className="sr-only">
          <caption>Traffic by source</caption>
          <thead>
            <tr>
              <th scope="col">Source</th>
              <th scope="col">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Organic</th>
              <td>45%</td>
            </tr>
            <tr>
              <th scope="row">Paid</th>
              <td>25%</td>
            </tr>
            <tr>
              <th scope="row">Referral</th>
              <td>18%</td>
            </tr>
            <tr>
              <th scope="row">Direct</th>
              <td>12%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
