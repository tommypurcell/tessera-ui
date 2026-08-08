export type AgendaSession = {
  id: string
  time: string
  title: string
  speaker?: string
  track?: string
}

export type ScheduleAgendaListVariant1Props = {
  dayLabel: string
  sessions: AgendaSession[]
  className?: string
}

const trackStyles: Record<string, string> = {
  'Main Stage': 'bg-indigo-50 text-indigo-700',
  Engineering: 'bg-emerald-50 text-emerald-700',
  Design: 'bg-rose-50 text-rose-700',
}

const defaultTrackStyle = 'bg-gray-100 text-gray-700'

/**
 * Copy-and-own Tailwind component. Conference-style agenda: sessions grouped
 * under a single day heading, each row showing time, title, speaker(s), and
 * a colored track badge. Distinct from Itinerary Timeline, which shows a
 * multi-day travel itinerary with per-activity-type icons (flight, hotel,
 * tour) rather than speaker/track conference metadata.
 */
export function ScheduleAgendaList({ dayLabel, sessions, className }: ScheduleAgendaListVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white ${className ?? ''}`}>
      <div className="border-b border-gray-100 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{dayLabel}</p>
      </div>
      <ul className="divide-y divide-gray-100">
        {sessions.map((session) => (
          <li key={session.id} className="flex gap-4 px-5 py-4">
            <span className="w-16 shrink-0 text-xs text-gray-500">{session.time}</span>
            <div className="min-w-0 flex-1">
              <p className={session.speaker || session.track ? 'text-sm font-medium text-gray-900' : 'text-sm font-medium text-gray-400'}>
                {session.title}
              </p>
              {session.speaker ? <p className="mt-1 text-xs text-gray-500">{session.speaker}</p> : null}
              {session.track ? (
                <span className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${trackStyles[session.track] ?? defaultTrackStyle}`}>
                  {session.track}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
