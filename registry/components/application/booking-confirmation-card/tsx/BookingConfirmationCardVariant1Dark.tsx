export type BookingConfirmationCardVariant1DarkProps = {
  title: string
  date: string
  timeRange: string
  hostName: string
  hostAvatarSrc?: string
  onReschedule?: () => void
  onCancel?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Booking confirmation card adapted for dark surfaces —
 * a success indicator, appointment title, date/time/host details, and actions.
 */
export function BookingConfirmationCardVariant1Dark({
  title,
  date,
  timeRange,
  hostName,
  hostAvatarSrc,
  onReschedule,
  onCancel,
  className,
}: BookingConfirmationCardVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center gap-2 text-emerald-400">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 2.25 2.25 4.5-4.5m4.5 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span className="text-sm font-semibold">Booking confirmed</span>
      </div>

      <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>

      <dl className="mt-3 flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 shrink-0 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <dt className="sr-only">Date</dt>
          <dd>{date}</dd>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 shrink-0 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <dt className="sr-only">Time</dt>
          <dd>{timeRange}</dd>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          {hostAvatarSrc ? (
            <img src={hostAvatarSrc} alt="" className="size-4 shrink-0 rounded-full" />
          ) : null}
          <dt className="sr-only">Host</dt>
          <dd>Hosted by {hostName}</dd>
        </div>
      </dl>

      <div className="mt-5 flex gap-2">
        <button
          type="button"
          onClick={onReschedule}
          className="flex-1 rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          Reschedule
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-red-400 shadow-sm hover:bg-red-950"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
