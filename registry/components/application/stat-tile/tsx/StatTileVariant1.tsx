import type { HTMLAttributes, ReactNode } from 'react'

export type StatTileDelta = {
  value: string
  direction: 'up' | 'down' | 'flat'
}

export type StatTileVariant1Props = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  label: string
  value: string | number
  delta?: StatTileDelta
  icon?: ReactNode
}

const directionStyles: Record<StatTileDelta['direction'], { badge: string; word: string }> = {
  up: { badge: 'bg-green-100 text-green-600', word: 'Increase' },
  down: { badge: 'bg-red-100 text-red-600', word: 'Decrease' },
  flat: { badge: 'bg-gray-100 text-gray-600', word: 'No change' },
}

const directionPath: Record<StatTileDelta['direction'], string> = {
  up: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  down: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
  flat: 'M5 12h14',
}

/**
 * Copy-and-own Tailwind component. Single KPI tile with a real label/value/delta
 * contract — pass your own data instead of hand-editing the JSX text.
 */
export function StatTile({ className, label, value, delta, icon, ...props }: StatTileVariant1Props) {
  return (
    <article
      className={`flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 ${className ?? ''}`}
      {...props}
    >
      <div className="flex items-center justify-between gap-2">
        {icon ? (
          <span aria-hidden="true" className="text-gray-400">
            {icon}
          </span>
        ) : (
          <span />
        )}

        {delta ? (
          <div className={`inline-flex gap-2 self-end rounded-sm p-1 ${directionStyles[delta.direction].badge}`}>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={directionPath[delta.direction]} />
            </svg>

            <span className="sr-only">{directionStyles[delta.direction].word}: </span>

            <span className="text-xs font-medium">{delta.value}</span>
          </div>
        ) : null}
      </div>

      <div>
        <strong className="block text-sm font-medium text-gray-500">{label}</strong>

        <p>
          <span className="text-2xl font-medium text-gray-900">{value}</span>
        </p>
      </div>
    </article>
  )
}
