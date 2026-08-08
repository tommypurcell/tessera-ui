export type PackageScanEvent = {
  id: string
  status: string
  location: string
  timestamp: string
}

export type PackageStatusTimelineVariant1DarkProps = {
  events: PackageScanEvent[]
}

/**
 * Copy-and-own Tailwind component. Vertical package-tracking timeline
 * adapted for dark surfaces — the most recent event (first in the
 * array) is styled as current.
 */
export function PackageStatusTimelineDark({ events }: PackageStatusTimelineVariant1DarkProps) {
  return (
    <ol className="flex flex-col">
      {events.map((event, index) => {
        const isCurrent = index === 0
        return (
          <li key={event.id} className="relative flex gap-3 pb-6 last:pb-0">
            {index < events.length - 1 ? <span className="absolute top-3 left-[7px] h-full w-px bg-gray-800" aria-hidden="true" /> : null}

            <span
              className={`relative z-10 mt-1 size-3.5 shrink-0 rounded-full ${isCurrent ? 'bg-blue-500 ring-4 ring-blue-500/20' : 'bg-gray-700'}`}
              aria-hidden="true"
            />

            <div className="flex flex-1 flex-col gap-0.5">
              <p className={`text-sm ${isCurrent ? 'font-semibold text-gray-100' : 'font-medium text-gray-300'}`}>{event.status}</p>
              <p className="text-xs text-gray-500">{event.location}</p>
              <p className="text-xs text-gray-600">{event.timestamp}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
