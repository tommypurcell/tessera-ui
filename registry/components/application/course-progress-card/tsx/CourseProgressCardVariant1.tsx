export type CourseProgressCardVariant1Props = {
  title: string
  completedModules: number
  totalModules: number
  onContinue?: () => void
  className?: string
}

const RADIUS = 28
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/**
 * Copy-and-own Tailwind component. Course card with an SVG completion ring
 * (percent computed from completed/total modules), title, a modules-remaining
 * line, and a Continue learning CTA. Distinct from Goal Progress Card, which is
 * target-vs-actual pacing rather than a lesson-completion ring.
 */
export function CourseProgressCard({ title, completedModules, totalModules, onContinue, className }: CourseProgressCardVariant1Props) {
  const percent = Math.round((completedModules / totalModules) * 100)
  const offset = CIRCUMFERENCE * (1 - percent / 100)

  return (
    <div className={`w-full rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`}>
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
          <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="6" className="text-gray-100" />
            <circle
              cx="32"
              cy="32"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              className="text-indigo-600"
            />
          </svg>
          <span className="absolute text-sm font-semibold text-gray-900">{percent}%</span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-900">{title}</p>
          <p className="mt-0.5 text-xs text-gray-500">
            {completedModules} of {totalModules} modules complete
          </p>
        </div>
      </div>

      <button type="button" onClick={onContinue} className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">
        Continue learning
      </button>
    </div>
  )
}
