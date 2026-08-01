import type { HTMLAttributes } from 'react'

export type ChartsVariant10Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant10({ className, ...props }: ChartsVariant10Props) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Ad spend vs conversions</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="ad-spend-conversions-scatter-chart"
                role="img"
                aria-label="Ad spend vs conversions, scatter chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Ad spend and conversions per campaign
              </caption>
              <thead>
                <tr>
                  <th scope="col">Spend ($)</th>
                  <th scope="col">Conversions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">90</th>
                  <td>8</td>
                </tr>
                <tr>
                  <th scope="row">120</th>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">140</th>
                  <td>14</td>
                </tr>
                <tr>
                  <th scope="row">150</th>
                  <td>15</td>
                </tr>
                <tr>
                  <th scope="row">180</th>
                  <td>18</td>
                </tr>
                <tr>
                  <th scope="row">200</th>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">220</th>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">260</th>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
