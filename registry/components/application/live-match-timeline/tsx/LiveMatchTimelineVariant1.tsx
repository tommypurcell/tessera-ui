export type MatchEventType = 'goal' | 'yellow-card' | 'substitution'

export type MatchEvent = {
  id: string
  minute: number
  type: MatchEventType
  side: 'home' | 'away'
}

export type LiveMatchTimelineVariant1Props = {
  homeTeam: string
  awayTeam: string
  currentMinute: number
  matchLengthMinutes?: number
  events: MatchEvent[]
  className?: string
}

const eventIcon: Record<MatchEventType, { label: string; className: string }> = {
  goal: { label: 'Goal', className: 'text-emerald-600' },
  'yellow-card': { label: 'Yellow card', className: '' },
  substitution: { label: 'Substitution', className: 'text-blue-600' },
}

function EventIcon({ type }: { type: MatchEventType }) {
  if (type === 'yellow-card') {
    return <svg aria-label="Yellow card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-3.5 w-2.5 rounded-[1px] bg-amber-400" />
  }
  if (type === 'substitution') {
    return (
      <svg aria-label="Substitution" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`size-3.5 ${eventIcon[type].className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    )
  }
  return (
    <svg aria-label="Goal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`size-3.5 ${eventIcon[type].className}`}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/**
 * Copy-and-own Tailwind component. Live sports match event timeline: a
 * horizontal minute axis with goal/card/substitution markers plotted at
 * their minute and alternating above/below the line by team side. Distinct
 * from a generic Timeline, which lists chronological entries vertically
 * with full descriptions rather than plotting discrete events along a
 * proportional minute-based axis.
 */
export function LiveMatchTimeline({ homeTeam, awayTeam, currentMinute, matchLengthMinutes = 90, events, className }: LiveMatchTimelineVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-gray-900">{homeTeam}</span>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
          Live &middot; {currentMinute}&prime;
        </span>
        <span className="font-semibold text-gray-900">{awayTeam}</span>
      </div>

      <div className="relative mt-8 h-24">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-200"></div>

        {events.map((event) => {
          const positionPercent = Math.min(100, (event.minute / matchLengthMinutes) * 100)
          const isHome = event.side === 'home'
          return (
            <div
              key={event.id}
              className={
                isHome
                  ? 'absolute bottom-1/2 flex -translate-x-1/2 flex-col items-center gap-1 pb-2.5'
                  : 'absolute top-1/2 flex -translate-x-1/2 flex-col items-center gap-1 pt-2.5'
              }
              style={{ left: `${positionPercent}%` }}
            >
              {isHome ? (
                <>
                  <span className="text-[11px] font-medium text-gray-500">{event.minute}&prime;</span>
                  <EventIcon type={event.type} />
                  <div className="h-2.5 w-0.5 bg-gray-300"></div>
                </>
              ) : (
                <>
                  <div className="h-2.5 w-0.5 bg-gray-300"></div>
                  <EventIcon type={event.type} />
                  <span className="text-[11px] font-medium text-gray-500">{event.minute}&prime;</span>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
