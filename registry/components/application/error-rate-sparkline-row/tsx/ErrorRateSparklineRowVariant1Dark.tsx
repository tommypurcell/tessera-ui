import type { HTMLAttributes } from 'react'

export type ErrorSeverity = 'healthy' | 'warning' | 'critical'

export type ErrorRateEndpointRow = {
  id: string
  method: string
  path: string
  values: number[]
  errorRateLabel: string
  severity: ErrorSeverity
}

export type ErrorRateSparklineRowVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  endpointHeader?: string
  trendHeader?: string
  errorRateHeader?: string
  rows: ErrorRateEndpointRow[]
}

const severityBarColorDark: Record<ErrorSeverity, string> = {
  healthy: 'bg-gray-700',
  warning: 'bg-yellow-500',
  critical: 'bg-red-400',
}

const severityBadgeDark: Record<ErrorSeverity, string> = {
  healthy: 'bg-green-900/50 text-green-400',
  warning: 'bg-yellow-900/50 text-yellow-400',
  critical: 'bg-red-900/50 text-red-400',
}

const severityDotDark: Record<ErrorSeverity, string> = {
  healthy: 'bg-green-500',
  warning: 'bg-yellow-500',
  critical: 'bg-red-500',
}

/**
 * Copy-and-own Tailwind component. Endpoint error-rate table with an inline
 * trend series, taking a real rows contract — pass your own monitoring data instead of hand-editing markup.
 */
export function ErrorRateSparklineRowDark({
  className,
  endpointHeader = 'Endpoint',
  trendHeader = '24h trend',
  errorRateHeader = 'Error rate',
  rows,
  ...props
}: ErrorRateSparklineRowVariant1DarkProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 ${className ?? ''}`} {...props}>
      <table className="min-w-full divide-y divide-gray-800">
        <thead className="bg-gray-900">
          <tr>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
              {endpointHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
              {trendHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-right text-xs font-medium uppercase tracking-wide text-gray-400">
              {errorRateHeader}
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-800 bg-gray-900">
          {rows.map((row) => {
            const maxValue = Math.max(...row.values)
            return (
              <tr key={row.id}>
                <td className="whitespace-nowrap px-4 py-3">
                  <code className="text-sm text-white">
                    {row.method} {row.path}
                  </code>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-end gap-0.5" aria-hidden="true">
                    {row.values.map((value, index) => (
                      <span key={index} className={`w-1.5 rounded-sm ${severityBarColorDark[row.severity]}`} style={{ height: `${Math.max(3, (value / maxValue) * 26)}px` }} />
                    ))}
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${severityBadgeDark[row.severity]}`}>
                    <span className={`size-1.5 rounded-full ${severityDotDark[row.severity]}`} />
                    {row.errorRateLabel}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
