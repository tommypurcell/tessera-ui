export type CourseProgressCardVariant1DarkProps = {
  title: string
  completedModules: number
  totalModules: number
  onContinue?: () => void
  className?: string
}

const RADIUS = 28
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/**
 * Copy-and-own Tailwind component (dark surface). Course card with an SVG
 * completion ring, title, a modules-remaining line, and a Continue learning CTA.
 */
export function CourseProgressCard({ title, completedModules, totalModules, onContinue, className }: CourseProgressCardVariant1DarkProps) {
  const percent = Math.round((completedModules / totalModules) * 100)
  const offset = CIRCUMFERENCE * (1 - percent / 100)

  return (
    <div className={`w-full rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`}>
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
          <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="6" className="text-gray-800" />
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
              className="text-indigo-400"
            />
          </svg>
          <span className="absolute text-sm font-semibold text-gray-100">{percent}%</span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-100">{title}</p>
          <p className="mt-0.5 text-xs text-gray-400">
            {completedModules} of {totalModules} modules complete
          </p>
        </div>
      </div>

      <button type="button" onClick={onContinue} className="mt-4 w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400">
        Continue learning
      </button>
    </div>
  )
}
