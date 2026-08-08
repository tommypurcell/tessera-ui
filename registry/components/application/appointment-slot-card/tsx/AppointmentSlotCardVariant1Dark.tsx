import type { HTMLAttributes } from 'react'

export type AppointmentSlotCardVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  providerName: string
  providerSpecialty: string
  providerInitials: string
  appointmentType: string
  timeRange: string
  rescheduleLabel?: string
  confirmLabel?: string
  onReschedule?: () => void
  onConfirm?: () => void
}

/**
 * Copy-and-own Tailwind component. Appointment booking card taking a real
 * provider/slot contract — pass your own scheduling data instead of hand-editing markup.
 */
export function AppointmentSlotCardDark({
  className,
  providerName,
  providerSpecialty,
  providerInitials,
  appointmentType,
  timeRange,
  rescheduleLabel = 'Reschedule',
  confirmLabel = 'Confirm booking',
  onReschedule,
  onConfirm,
  ...props
}: AppointmentSlotCardVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`} {...props}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-medium text-gray-300">{providerInitials}</span>
          <div>
            <p className="text-sm font-semibold text-white">{providerName}</p>
            <p className="text-xs text-gray-500">{providerSpecialty}</p>
          </div>
        </div>
        <span className="inline-flex items-center rounded-full bg-blue-900/50 px-2 py-0.5 text-xs font-medium text-blue-400">{appointmentType}</span>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-2.5 text-sm text-gray-300">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 shrink-0 text-gray-400">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        <span>{timeRange}</span>
      </div>

      <div className="mt-4 flex gap-2.5">
        <button
          type="button"
          onClick={onReschedule}
          className="flex-1 rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          {rescheduleLabel}
        </button>
        <button type="button" onClick={onConfirm} className="flex-1 rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200">
          {confirmLabel}
        </button>
      </div>
    </div>
  )
}
