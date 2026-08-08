export type StreakDay = {
  label: string
  status: 'active' | 'missed' | 'today' | 'future'
}

export type StreakCalendarVariant1Props = {
  streakCount: number
  caption?: string
  days: StreakDay[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Consecutive-day activity streak card: a
 * flame icon with the current streak count, and a 7-day row where active days
 * are filled, missed days are muted outlines, and today gets a distinct
 * outlined highlight. Distinct from Heatmap Calendar, which shows month-long
 * intensity buckets rather than a short consecutive-day streak.
 */
export function StreakCalendar({ streakCount, caption = "Keep it going — you're on fire!", days, className }: StreakCalendarVariant1Props) {
  return (
    <div className={`w-full rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`}>
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.235-1.402-.246-.403-.377-.868-.312-1.564a1 1 0 00-.008-.531z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <div>
          <p className="text-lg font-semibold text-gray-900">{streakCount} day streak</p>
          <p className="text-xs text-gray-500">{caption}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {days.map((day, i) => (
          <span key={`label-${i}`} className="text-center text-[10px] font-medium text-gray-400">
            {day.label}
          </span>
        ))}
        {days.map((day, i) => {
          if (day.status === 'active') {
            return (
              <div key={i} className="flex h-8 items-center justify-center rounded-md bg-orange-500 text-xs font-medium text-white">
                ✓
              </div>
            )
          }
          if (day.status === 'today') {
            return (
              <div
                key={i}
                className="flex h-8 items-center justify-center rounded-md border-2 border-orange-500 bg-white text-xs font-semibold text-orange-600"
              >
                Today
              </div>
            )
          }
          return (
            <div key={i} className="flex h-8 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-xs text-gray-300">
              &middot;
            </div>
          )
        })}
      </div>
    </div>
  )
}
