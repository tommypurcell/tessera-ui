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

export type ErrorRateSparklineRowVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  endpointHeader?: string
  trendHeader?: string
  errorRateHeader?: string
  rows: ErrorRateEndpointRow[]
}

const severityBarColor: Record<ErrorSeverity, string> = {
  healthy: 'bg-gray-200',
  warning: 'bg-yellow-400',
  critical: 'bg-red-500',
}

const severityBadge: Record<ErrorSeverity, string> = {
  healthy: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  critical: 'bg-red-100 text-red-700',
}

const severityDot: Record<ErrorSeverity, string> = {
  healthy: 'bg-green-500',
  warning: 'bg-yellow-500',
  critical: 'bg-red-500',
}

/**
 * Copy-and-own Tailwind component. Endpoint error-rate table with an inline
 * trend series, taking a real rows contract — pass your own monitoring data instead of hand-editing markup.
 */
export function ErrorRateSparklineRow({
  className,
  endpointHeader = 'Endpoint',
  trendHeader = '24h trend',
  errorRateHeader = 'Error rate',
  rows,
  ...props
}: ErrorRateSparklineRowVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              {endpointHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              {trendHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
              {errorRateHeader}
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row) => {
            const maxValue = Math.max(...row.values)
            return (
              <tr key={row.id}>
                <td className="whitespace-nowrap px-4 py-3">
                  <code className="text-sm text-gray-900">
                    {row.method} {row.path}
                  </code>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-end gap-0.5" aria-hidden="true">
                    {row.values.map((value, index) => (
                      <span key={index} className={`w-1.5 rounded-sm ${severityBarColor[row.severity]}`} style={{ height: `${Math.max(3, (value / maxValue) * 26)}px` }} />
                    ))}
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${severityBadge[row.severity]}`}>
                    <span className={`size-1.5 rounded-full ${severityDot[row.severity]}`} />
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
