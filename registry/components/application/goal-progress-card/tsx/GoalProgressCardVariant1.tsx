import type { HTMLAttributes } from 'react'

export type GoalPacingStatus = 'ahead' | 'on-pace' | 'behind'

export type GoalProgressCardVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  title: string
  currentValue: string
  targetValue: string
  percentComplete: number
  expectedPercent: number
  pacingStatus: GoalPacingStatus
  projectionNote: string
}

const pacingStyles: Record<GoalPacingStatus, { badge: string; dot: string; label: string }> = {
  ahead: { badge: 'bg-green-100 text-green-700', dot: 'bg-green-500', label: 'Ahead of pace' },
  'on-pace': { badge: 'bg-green-100 text-green-700', dot: 'bg-green-500', label: 'On pace' },
  behind: { badge: 'bg-red-100 text-red-700', dot: 'bg-red-500', label: 'Behind pace' },
}

/**
 * Copy-and-own Tailwind component. Goal-tracking card taking a real
 * current/target/pacing contract — pass your own computed values instead of hand-editing markup.
 */
export function GoalProgressCard({
  className,
  title,
  currentValue,
  targetValue,
  percentComplete,
  expectedPercent,
  pacingStatus,
  projectionNote,
  ...props
}: GoalProgressCardVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`} {...props}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${pacingStyles[pacingStatus].badge}`}>
          <span className={`size-1.5 rounded-full ${pacingStyles[pacingStatus].dot}`} />
          {pacingStyles[pacingStatus].label}
        </span>
      </div>

      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="text-2xl font-semibold text-gray-900">{currentValue}</span>
        <span className="text-sm text-gray-400">of {targetValue}</span>
      </div>

      <div className="relative mt-4 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="absolute inset-y-0 left-0 rounded-full bg-gray-900" style={{ width: `${percentComplete}%` }} />
        <div className="absolute inset-y-0 w-px bg-gray-400" style={{ left: `${expectedPercent}%` }} aria-hidden="true" />
      </div>

      <div className="mt-1.5 flex items-center justify-between text-xs text-gray-400">
        <span>{percentComplete}% of goal</span>
        <span>Expected today: {expectedPercent}%</span>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2.5">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 shrink-0 text-gray-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
        <p className="text-xs text-gray-600">{projectionNote}</p>
      </div>
    </div>
  )
}
