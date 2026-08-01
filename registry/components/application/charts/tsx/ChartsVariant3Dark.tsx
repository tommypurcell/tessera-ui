import type { HTMLAttributes } from 'react'

export type ChartsVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant3Dark({ className, ...props }: ChartsVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="text-sm font-medium text-white">Orders by status</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="order-status-donut-chart"
                role="img"
                aria-label="Orders by status, donut chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Orders by status
              </caption>
              <thead>
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Paid</th>
                  <td>68%</td>
                </tr>
                <tr>
                  <th scope="row">Pending</th>
                  <td>22%</td>
                </tr>
                <tr>
                  <th scope="row">Refunded</th>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
