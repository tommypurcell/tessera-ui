import type { HTMLAttributes } from 'react'

export type SlotState = 'free' | 'busy' | 'selected'

export type AvailabilitySlot = {
  day: string
  time: string
  state: SlotState
}

export type AvailabilityGridVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  days: string[]
  times: string[]
  slots: AvailabilitySlot[]
  onSelectSlot?: (slot: AvailabilitySlot) => void
}

/**
 * Copy-and-own Tailwind component. Bookable time-slot grid taking a real
 * days/times/slots contract — pass your own availability data instead of hand-editing markup.
 */
export function AvailabilityGridDark({ className, days, times, slots, onSelectSlot, ...props }: AvailabilityGridVariant1DarkProps) {
  const slotFor = (day: string, time: string) => slots.find((slot) => slot.day === day && slot.time === time)

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-4 ${className ?? ''}`} {...props}>
      <div className="grid gap-1" style={{ gridTemplateColumns: `3.5rem repeat(${days.length}, 1fr)` }}>
        <span />
        {days.map((day) => (
          <span key={day} className="text-center text-xs font-medium text-gray-400">
            {day}
          </span>
        ))}

        {times.map((time) => (
          <>
            <span key={`${time}-label`} className="py-1.5 text-right text-xs text-gray-500">
              {time}
            </span>
            {days.map((day) => {
              const slot = slotFor(day, time)
              const state = slot?.state ?? 'busy'
              return (
                <button
                  key={`${day}-${time}`}
                  type="button"
                  disabled={state === 'busy'}
                  aria-pressed={state === 'selected'}
                  aria-label={`${day} ${time}, ${state === 'busy' ? 'unavailable' : state === 'selected' ? 'selected' : 'available'}`}
                  onClick={() => slot && onSelectSlot?.(slot)}
                  className={`rounded-md py-2 text-xs font-medium ${
                    state === 'selected'
                      ? 'bg-white text-gray-900'
                      : state === 'free'
                        ? 'bg-green-950/50 text-green-400 ring-1 ring-inset ring-green-900 hover:bg-green-900/50'
                        : 'bg-gray-800 text-gray-600'
                  }`}
                >
                  {state === 'selected' ? 'Selected' : state === 'free' ? 'Free' : 'Busy'}
                </button>
              )
            })}
          </>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-green-950/50 ring-1 ring-inset ring-green-900" />
          Free
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-gray-800" />
          Busy
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-white" />
          Selected
        </span>
      </div>
    </div>
  )
}
