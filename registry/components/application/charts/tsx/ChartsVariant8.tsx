import type { HTMLAttributes } from 'react'

export type ChartsVariant8Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ChartsVariant8({ className, ...props }: ChartsVariant8Props) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Team performance</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="team-performance-radar-chart"
                role="img"
                aria-label="Team performance, radar chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Team performance by metric
              </caption>
              <thead>
                <tr>
                  <th scope="col">Metric</th>
                  <th scope="col">Team A</th>
                  <th scope="col">Team B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Speed</th>
                  <td>80</td>
                  <td>65</td>
                </tr>
                <tr>
                  <th scope="row">Quality</th>
                  <td>90</td>
                  <td>75</td>
                </tr>
                <tr>
                  <th scope="row">Collaboration</th>
                  <td>70</td>
                  <td>88</td>
                </tr>
                <tr>
                  <th scope="row">Innovation</th>
                  <td>60</td>
                  <td>92</td>
                </tr>
                <tr>
                  <th scope="row">Reliability</th>
                  <td>85</td>
                  <td>70</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
