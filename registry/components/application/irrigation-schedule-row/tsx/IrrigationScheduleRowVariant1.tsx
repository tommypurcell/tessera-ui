import { useState } from 'react'

export type IrrigationZone = {
  id: string
  name: string
  durationLabel: string
  nextRunLabel: string
  initialOn?: boolean
  onToggle?: (on: boolean) => void
}

export type IrrigationScheduleRowVariant1Props = {
  zones: IrrigationZone[]
  className?: string
}

function DropletIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a7.5 7.5 0 0 0 7.5-7.5c0-3.5-3-6.5-7.5-11.25-4.5 4.75-7.5 7.75-7.5 11.25A7.5 7.5 0 0 0 12 21Z" />
    </svg>
  )
}

function ZoneRow({ zone }: { zone: IrrigationZone }) {
  const [on, setOn] = useState(zone.initialOn ?? false)

  function toggle() {
    const next = !on
    setOn(next)
    zone.onToggle?.(next)
  }

  return (
    <li className="flex items-center gap-3 p-4">
      <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${on ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
        <DropletIcon />
      </div>

      <div className="min-w-0 flex-1">
        <p className={`text-sm font-medium ${on ? 'text-gray-900' : 'text-gray-400'}`}>{zone.name}</p>
        <p className={`text-xs ${on ? 'text-gray-500' : 'text-gray-400'}`}>
          {zone.durationLabel} &middot; {on ? `Next run: ${zone.nextRunLabel}` : 'Schedule paused'}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={`Toggle ${zone.name} irrigation`}
        onClick={toggle}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${on ? 'bg-emerald-500' : 'bg-gray-300'}`}
      >
        <span className={`absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-[inset-inline-start] ${on ? 'start-5' : ''}`} />
      </button>
    </li>
  )
}

/**
 * Copy-and-own Tailwind component. Irrigation schedule row — per-zone on/off switch
 * where the icon color, name emphasis, and "Next run" vs. "Schedule paused" text are
 * all derived from the same real toggled state, not independent styling.
 */
export function IrrigationScheduleRowVariant1({ zones, className }: IrrigationScheduleRowVariant1Props) {
  return (
    <ul className={`divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      {zones.map((zone) => (
        <ZoneRow key={zone.id} zone={zone} />
      ))}
    </ul>
  )
}
