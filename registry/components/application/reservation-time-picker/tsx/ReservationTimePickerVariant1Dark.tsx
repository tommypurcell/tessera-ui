import type { HTMLAttributes } from 'react'

export type ReservationTimeChip = {
  label: string
  available: boolean
  selected?: boolean
}

export type ReservationTimePickerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  partySize: number
  formattedDate: string
  times: ReservationTimeChip[]
  confirmLabel: string
  onDecreaseParty?: () => void
  onIncreaseParty?: () => void
  onOpenDate?: () => void
  onSelectTime?: (chip: ReservationTimeChip) => void
  onConfirm?: () => void
}

/**
 * Copy-and-own Tailwind component. Reservation picker taking a real
 * party-size/date/time-chip contract — pass your own booking data instead of hand-editing markup.
 */
export function ReservationTimePickerDark({
  className,
  partySize,
  formattedDate,
  times,
  confirmLabel,
  onDecreaseParty,
  onIncreaseParty,
  onOpenDate,
  onSelectTime,
  onConfirm,
  ...props
}: ReservationTimePickerVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`} {...props}>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="party-size" className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Party size
          </label>
          <div className="flex items-center justify-between rounded-md border border-gray-700 px-2 py-1.5">
            <button type="button" aria-label="Decrease party size" onClick={onDecreaseParty} className="flex size-6 items-center justify-center rounded text-gray-400 hover:bg-gray-800">
              −
            </button>
            <span id="party-size" className="text-sm font-medium text-white">
              {partySize}
            </span>
            <button type="button" aria-label="Increase party size" onClick={onIncreaseParty} className="flex size-6 items-center justify-center rounded text-gray-400 hover:bg-gray-800">
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Date</span>
          <button
            type="button"
            onClick={onOpenDate}
            className="flex items-center gap-1.5 rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-gray-800"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 shrink-0 text-gray-500">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <span className="truncate">{formattedDate}</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Available times</span>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {times.map((chip) => (
            <button
              key={chip.label}
              type="button"
              disabled={!chip.available}
              aria-pressed={chip.selected}
              onClick={() => onSelectTime?.(chip)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                chip.selected
                  ? 'bg-white text-gray-900'
                  : chip.available
                    ? 'text-gray-300 ring-1 ring-inset ring-gray-700 hover:bg-gray-800'
                    : 'cursor-not-allowed text-gray-600 ring-1 ring-inset ring-gray-800'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      <button type="button" onClick={onConfirm} className="mt-4 w-full rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200">
        {confirmLabel}
      </button>
    </div>
  )
}
