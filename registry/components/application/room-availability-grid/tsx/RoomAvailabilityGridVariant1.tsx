export type RoomAvailabilityStatus = 'free' | 'booked' | 'maintenance'

export type RoomAvailabilityRow = {
  room: string
  cells: RoomAvailabilityStatus[]
}

export type RoomAvailabilityGridVariant1Props = {
  dates: string[]
  rows: RoomAvailabilityRow[]
}

const statusStyles: Record<RoomAvailabilityStatus, { label: string; className: string }> = {
  free: { label: 'Free', className: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  booked: { label: 'Booked', className: 'bg-red-50 text-red-700 ring-red-200' },
  maintenance: { label: 'Maint.', className: 'bg-gray-50 text-gray-400 ring-gray-200' },
}

/**
 * Copy-and-own Tailwind component. Hotel room-inventory calendar with rooms
 * as rows and dates as columns, each cell showing Free/Booked/Maintenance.
 */
export function RoomAvailabilityGrid({ dates, rows }: RoomAvailabilityGridVariant1Props) {
  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `3.5rem repeat(${dates.length}, 1fr)` }}>
        <span />
        {dates.map((date) => (
          <span key={date} className="text-center text-xs font-medium text-gray-500">
            {date}
          </span>
        ))}

        {rows.map((row) => (
          <>
            <span key={`${row.room}-label`} className="py-2 text-right text-xs text-gray-400">
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

      <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-200" />
          Free
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-red-200" />
          Booked
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-gray-200" />
          Maintenance
        </span>
      </div>
    </div>
  )
}
