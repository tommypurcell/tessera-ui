export type ServiceReminderRowVariant1Props = {
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
 * due-mileage progress bar and a Schedule action — distinct from
 * application-sync-status-row since it tracks mileage-based service
 * intervals rather than data-sync recency.
 */
export function ServiceReminderRow({
  serviceName,
  dueAtLabel,
  remainingLabel,
  currentMileage,
  lastServiceMileage,
  dueMileage,
  onSchedule,
}: ServiceReminderRowVariant1Props) {
  const percent = Math.min(
    100,
    Math.round(((currentMileage - lastServiceMileage) / (dueMileage - lastServiceMileage)) * 100),
  )

  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
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
            <p className="text-sm font-medium text-gray-900">{serviceName}</p>
            <p className="mt-0.5 text-xs text-gray-500">
              {dueAtLabel} &middot; {remainingLabel}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onSchedule}
          className="shrink-0 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50"
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
        className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100"
      >
        <div className="h-full rounded-full bg-amber-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
