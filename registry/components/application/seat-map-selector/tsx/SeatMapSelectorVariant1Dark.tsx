import type { HTMLAttributes } from 'react'

export type SeatState = 'available' | 'taken' | 'selected'

export type Seat = {
  number: number
  state: SeatState
}

export type SeatRow = {
  label: string
  leftSeats: Seat[]
  rightSeats: Seat[]
}

export type SeatMapSelectorVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  headerLabel?: string
  rows: SeatRow[]
  onSelectSeat?: (rowLabel: string, seat: Seat) => void
}

function SeatButtonDark({ rowLabel, seat, onSelectSeat }: { rowLabel: string; seat: Seat; onSelectSeat?: (rowLabel: string, seat: Seat) => void }) {
  return (
    <button
      type="button"
      disabled={seat.state === 'taken'}
      aria-pressed={seat.state === 'selected'}
      aria-label={`Seat ${rowLabel}${seat.number}, ${seat.state}`}
      onClick={() => onSelectSeat?.(rowLabel, seat)}
      className={`flex size-7 items-center justify-center rounded-md text-[11px] font-medium ${
        seat.state === 'selected'
          ? 'bg-white text-gray-900'
          : seat.state === 'taken'
            ? 'bg-gray-800 text-gray-600'
            : 'text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800'
      }`}
    >
      {seat.number}
    </button>
  )
}

/**
 * Copy-and-own Tailwind component. Seat map grid taking a real rows/seats
 * contract — pass your own seating data instead of hand-editing markup.
 */
export function SeatMapSelectorDark({ className, headerLabel = 'Screen this way', rows, onSelectSeat, ...props }: SeatMapSelectorVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`} {...props}>
      <div className="mb-4 border-b border-gray-800 pb-2 text-center text-xs font-medium uppercase tracking-wide text-gray-500">{headerLabel}</div>

      <div className="flex flex-col items-center gap-2">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-4 text-right text-xs text-gray-500">{row.label}</span>
            <div className="flex gap-1.5">
              {row.leftSeats.map((seat) => (
                <SeatButtonDark key={seat.number} rowLabel={row.label} seat={seat} onSelectSeat={onSelectSeat} />
              ))}
            </div>
            <div className="w-4" />
            <div className="flex gap-1.5">
              {row.rightSeats.map((seat) => (
                <SeatButtonDark key={seat.number} rowLabel={row.label} seat={seat} onSelectSeat={onSelectSeat} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm ring-1 ring-inset ring-gray-700" />
          Available
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-gray-800" />
          Taken
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-white" />
          Selected
        </span>
      </div>
    </div>
  )
}
