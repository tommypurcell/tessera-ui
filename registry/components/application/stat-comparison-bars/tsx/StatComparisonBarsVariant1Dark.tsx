import type { HTMLAttributes } from 'react'

export type StatComparisonRow = {
  id: string
  label: string
  value: string
  percent: number
  highlighted?: boolean
}

export type StatComparisonBarsVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  title: string
  rows: StatComparisonRow[]
}

/**
 * Copy-and-own Tailwind component. Horizontal category comparison bars
 * taking a real rows contract — pass your own label/value/percent data instead of hand-editing markup.
 */
export function StatComparisonBarsDark({ className, title, rows, ...props }: StatComparisonBarsVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`} {...props}>
      <h3 className="text-sm font-medium text-gray-400">{title}</h3>

      <div className="mt-4 flex flex-col gap-3">
        {rows.map((row) => (
          <div key={row.id} className={row.highlighted ? '-mx-2 rounded-lg bg-gray-800 px-2 py-1.5' : undefined}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className={row.highlighted ? 'font-medium text-white' : 'text-gray-300'}>{row.label}</span>
              <span className="font-medium text-white">{row.value}</span>
            </div>
            <div className={`h-2 w-full overflow-hidden rounded-full ${row.highlighted ? 'bg-gray-700' : 'bg-gray-800'}`}>
              <div className={`h-full rounded-full ${row.highlighted ? 'bg-white' : 'bg-gray-500'}`} style={{ width: `${row.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
