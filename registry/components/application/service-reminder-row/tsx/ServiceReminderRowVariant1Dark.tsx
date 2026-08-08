export type ServiceReminderRowVariant1DarkProps = {
  serviceName: string
  dueAtLabel: string
  remainingLabel: string
  currentMileage: number
  lastServiceMileage: number
  dueMileage: number
  onSchedule?: () => void
}

/**
 * Copy-and-own Tailwind component. Single maintenance-reminder row with a
 * due-mileage progress bar, adapted for dark surfaces.
 */
export function ServiceReminderRow({
  serviceName,
  dueAtLabel,
  remainingLabel,
  currentMileage,
  lastServiceMileage,
  dueMileage,
  onSchedule,
}: ServiceReminderRowVariant1DarkProps) {
  const percent = Math.min(
    100,
    Math.round(((currentMileage - lastServiceMileage) / (dueMileage - lastServiceMileage)) * 100),
  )

  return (
    <div className="w-full max-w-md rounded-lg border border-gray-800 bg-gray-900 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085z"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm font-medium text-white">{serviceName}</p>
            <p className="mt-0.5 text-xs text-gray-400">
              {dueAtLabel} &middot; {remainingLabel}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onSchedule}
          className="shrink-0 rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          Schedule
        </button>
      </div>
      <div
        role="progressbar"
        aria-label={`Mileage until ${serviceName.toLowerCase()} is due`}
        aria-valuenow={currentMileage}
        aria-valuemin={lastServiceMileage}
        aria-valuemax={dueMileage}
        className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-800"
      >
        <div className="h-full rounded-full bg-amber-400" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
