export type AgendaSession = {
  id: string
  time: string
  title: string
  speaker?: string
  track?: string
}

export type ScheduleAgendaListVariant1DarkProps = {
  dayLabel: string
  sessions: AgendaSession[]
  className?: string
}

const trackStyles: Record<string, string> = {
  'Main Stage': 'bg-indigo-500/10 text-indigo-300',
  Engineering: 'bg-emerald-500/10 text-emerald-300',
  Design: 'bg-rose-500/10 text-rose-300',
}

const defaultTrackStyle = 'bg-gray-800 text-gray-300'

/**
 * Copy-and-own Tailwind component (dark surface). Conference-style agenda:
 * sessions grouped under a single day heading, each row showing time, title,
 * speaker(s), and a colored track badge.
 */
export function ScheduleAgendaList({ dayLabel, sessions, className }: ScheduleAgendaListVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <div className="border-b border-gray-800 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{dayLabel}</p>
      </div>
      <ul className="divide-y divide-gray-800">
        {sessions.map((session) => (
          <li key={session.id} className="flex gap-4 px-5 py-4">
            <span className="w-16 shrink-0 text-xs text-gray-400">{session.time}</span>
            <div className="min-w-0 flex-1">
              <p className={session.speaker || session.track ? 'text-sm font-medium text-gray-100' : 'text-sm font-medium text-gray-500'}>
                {session.title}
              </p>
              {session.speaker ? <p className="mt-1 text-xs text-gray-400">{session.speaker}</p> : null}
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
