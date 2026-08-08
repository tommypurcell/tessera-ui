import type { HTMLAttributes } from 'react'

export type StatComparisonRow = {
  id: string
  label: string
  value: string
  percent: number
  highlighted?: boolean
}

export type StatComparisonBarsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  title: string
  rows: StatComparisonRow[]
}

/**
 * Copy-and-own Tailwind component. Horizontal category comparison bars
 * taking a real rows contract — pass your own label/value/percent data instead of hand-editing markup.
 */
export function StatComparisonBars({ className, title, rows, ...props }: StatComparisonBarsVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`} {...props}>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>

      <div className="mt-4 flex flex-col gap-3">
        {rows.map((row) => (
          <div key={row.id} className={row.highlighted ? '-mx-2 rounded-lg bg-gray-50 px-2 py-1.5' : undefined}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className={row.highlighted ? 'font-medium text-gray-900' : 'text-gray-700'}>{row.label}</span>
              <span className="font-medium text-gray-900">{row.value}</span>
            </div>
            <div className={`h-2 w-full overflow-hidden rounded-full ${row.highlighted ? 'bg-gray-200' : 'bg-gray-100'}`}>
              <div className={`h-full rounded-full ${row.highlighted ? 'bg-gray-900' : 'bg-gray-400'}`} style={{ width: `${row.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
