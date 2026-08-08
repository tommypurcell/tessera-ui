export type RoomAvailabilityStatus = 'free' | 'booked' | 'maintenance'

export type RoomAvailabilityRow = {
  room: string
  cells: RoomAvailabilityStatus[]
}

export type RoomAvailabilityGridVariant1DarkProps = {
  dates: string[]
  rows: RoomAvailabilityRow[]
}

const statusStyles: Record<RoomAvailabilityStatus, { label: string; className: string }> = {
  free: { label: 'Free', className: 'bg-emerald-400/10 text-emerald-400 ring-emerald-400/20' },
  booked: { label: 'Booked', className: 'bg-red-400/10 text-red-400 ring-red-400/20' },
  maintenance: { label: 'Maint.', className: 'bg-gray-800 text-gray-500 ring-gray-700' },
}

/**
 * Copy-and-own Tailwind component. Hotel room-inventory calendar with rooms
 * as rows and dates as columns, each cell showing Free/Booked/Maintenance.
 */
export function RoomAvailabilityGridDark({ dates, rows }: RoomAvailabilityGridVariant1DarkProps) {
  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-700 bg-gray-900 p-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `3.5rem repeat(${dates.length}, 1fr)` }}>
        <span />
        {dates.map((date) => (
          <span key={date} className="text-center text-xs font-medium text-gray-400">
            {date}
          </span>
        ))}

        {rows.map((row) => (
          <>
            <span key={`${row.room}-label`} className="py-2 text-right text-xs text-gray-500">
              {row.room}
            </span>
            {row.cells.map((status, index) => {
              const style = statusStyles[status]
              return (
                <div
                  key={`${row.room}-${dates[index]}`}
                  role="img"
                  aria-label={`Room ${row.room}, ${dates[index]}, ${style.label === 'Maint.' ? 'maintenance' : style.label.toLowerCase()}`}
                  className={`rounded-md py-2 text-center text-xs font-medium ring-1 ring-inset ${style.className}`}
                >
                  {style.label}
                </div>
              )
            })}
          </>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-400/40" />
          Free
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-red-400/40" />
          Booked
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-gray-700" />
          Maintenance
        </span>
      </div>
    </div>
  )
}
