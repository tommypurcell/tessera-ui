import type { HTMLAttributes } from 'react'

export type ChartsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant2({ className, ...props }: ChartsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Orders this week</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="weekly-orders-bar-chart"
                role="img"
                aria-label="Orders this week, bar chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Orders per day this week
              </caption>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Orders</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mon</th>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">Tue</th>
                  <td>19</td>
                </tr>
                <tr>
                  <th scope="row">Wed</th>
                  <td>14</td>
                </tr>
                <tr>
                  <th scope="row">Thu</th>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">Fri</th>
                  <td>27</td>
                </tr>
                <tr>
                  <th scope="row">Sat</th>
                  <td>32</td>
                </tr>
                <tr>
                  <th scope="row">Sun</th>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
