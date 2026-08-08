export type VolunteerShiftCardVariant1DarkProps = {
  role: string
  dateLabel: string
  timeLabel: string
  spotsTotal: number
  spotsFilled: number
  onSignUp?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the volunteer shift card —
 * spots-filled percentage and "left" count are computed from real props, not hardcoded.
 */
export function VolunteerShiftCardVariant1Dark({
  role,
  dateLabel,
  timeLabel,
  spotsTotal,
  spotsFilled,
  onSignUp,
  className,
}: VolunteerShiftCardVariant1DarkProps) {
  const spotsLeft = Math.max(spotsTotal - spotsFilled, 0)
  const percentFilled = spotsTotal > 0 ? Math.min((spotsFilled / spotsTotal) * 100, 100) : 0
  const isFull = spotsLeft === 0

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-5 shadow-sm ${className ?? ''}`}>
      <h3 className="text-sm font-semibold text-white">{role}</h3>

      <div className="mt-2 flex flex-col gap-1.5 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 shrink-0 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          {dateLabel}
        </div>
        <div className="flex items-center gap-2">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 shrink-0 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {timeLabel}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{spotsFilled} of {spotsTotal} spots filled</span>
          <span>{isFull ? 'Full' : `${spotsLeft} left`}</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
          <div className="h-full rounded-full bg-blue-500" style={{ width: `${percentFilled}%` }} />
        </div>
      </div>

      <button
        type="button"
        onClick={onSignUp}
        disabled={isFull}
        className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-500 disabled:shadow-none"
      >
        {isFull ? 'Shift full' : 'Sign up'}
      </button>
    </div>
  )
}
