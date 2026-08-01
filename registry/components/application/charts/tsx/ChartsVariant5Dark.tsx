import type { HTMLAttributes } from 'react'

export type ChartsVariant5DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant5Dark({ className, ...props }: ChartsVariant5DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="text-sm font-medium text-white">Traffic by channel</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="channel-traffic-stacked-bar-chart"
                role="img"
                aria-label="Traffic by channel, stacked bar chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Website traffic by channel, per day
              </caption>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Organic</th>
                  <th scope="col">Paid</th>
                  <th scope="col">Referral</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mon</th>
                  <td>120</td>
                  <td>80</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">Tue</th>
                  <td>132</td>
                  <td>95</td>
                  <td>35</td>
                </tr>
                <tr>
                  <th scope="row">Wed</th>
                  <td>101</td>
                  <td>70</td>
                  <td>45</td>
                </tr>
                <tr>
                  <th scope="row">Thu</th>
                  <td>134</td>
                  <td>110</td>
                  <td>38</td>
                </tr>
                <tr>
                  <th scope="row">Fri</th>
                  <td>90</td>
                  <td>60</td>
                  <td>42</td>
                </tr>
                <tr>
                  <th scope="row">Sat</th>
                  <td>230</td>
                  <td>120</td>
                  <td>55</td>
                </tr>
                <tr>
                  <th scope="row">Sun</th>
                  <td>210</td>
                  <td>95</td>
                  <td>48</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
