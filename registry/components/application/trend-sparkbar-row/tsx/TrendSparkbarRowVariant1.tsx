import type { HTMLAttributes } from 'react'

export type TrendDirection = 'up' | 'down' | 'flat'

export type TrendSparkbarRow = {
  id: string
  label: string
  values: number[]
  units: string
  changeLabel: string
  direction: TrendDirection
}

export type TrendSparkbarRowVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  labelHeader?: string
  trendHeader?: string
  unitsHeader?: string
  changeHeader?: string
  rows: TrendSparkbarRow[]
}

const directionBarColor: Record<TrendDirection, string> = {
  up: 'bg-green-400',
  down: 'bg-red-400',
  flat: 'bg-gray-300',
}

const directionChangeColor: Record<TrendDirection, string> = {
  up: 'text-green-600',
  down: 'text-red-600',
  flat: 'text-gray-500',
}

/**
 * Copy-and-own Tailwind component. Table with an inline mini bar-series column
 * taking a real rows/values contract — pass your own trend data instead of hand-editing markup.
 */
export function TrendSparkbarRow({
  className,
  labelHeader = 'Product',
  trendHeader = '7-day trend',
  unitsHeader = 'Units sold',
  changeHeader = 'Change',
  rows,
  ...props
}: TrendSparkbarRowVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              {labelHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              {trendHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
              {unitsHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
              {changeHeader}
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row) => {
            const maxValue = Math.max(...row.values)
            return (
              <tr key={row.id}>
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">{row.label}</td>
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-end gap-0.5" aria-hidden="true">
                    {row.values.map((value, index) => (
                      <span
                        key={index}
                        className={`w-1.5 rounded-sm ${index === row.values.length - 1 ? directionChangeColor[row.direction].replace('text-', 'bg-') : directionBarColor[row.direction]}`}
                        style={{ height: `${Math.max(4, (value / maxValue) * 24)}px` }}
                      />
                    ))}
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-600">{row.units}</td>
                <td className={`whitespace-nowrap px-4 py-3 text-right text-sm font-medium ${directionChangeColor[row.direction]}`}>{row.changeLabel}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
