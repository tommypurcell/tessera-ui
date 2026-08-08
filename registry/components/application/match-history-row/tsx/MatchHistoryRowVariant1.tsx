export type MatchResult = 'win' | 'loss' | 'draw'

export type Match = {
  id: string
  result: MatchResult
  mode: string
  queue: string
  score: string
  duration: string
  playedAt: string
}

export type MatchHistoryRowVariant1Props = {
  matches: Match[]
  className?: string
}

const resultStyle: Record<MatchResult, { border: string; text: string; label: string }> = {
  win: { border: 'border-emerald-500', text: 'text-emerald-600', label: 'Win' },
  loss: { border: 'border-red-500', text: 'text-red-600', label: 'Loss' },
  draw: { border: 'border-gray-300', text: 'text-gray-500', label: 'Draw' },
}

/**
 * Copy-and-own Tailwind component. List of match results: a colored left
 * border and result label (Win/Loss/Draw), game mode and queue type, score,
 * duration, and relative time. Distinct from a generic data table — this is a
 * fixed-shape row optimized for scanning recent results at a glance.
 */
export function MatchHistoryRow({ matches, className }: MatchHistoryRowVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-lg border border-gray-200 bg-white ${className ?? ''}`}>
      <ul className="divide-y divide-gray-200">
        {matches.map((match) => {
          const style = resultStyle[match.result]
          return (
            <li key={match.id} className={`flex items-center gap-3 border-l-4 py-3 pr-4 pl-3 ${style.border}`}>
              <span className={`w-10 shrink-0 text-sm font-semibold ${style.text}`}>{style.label}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {match.queue} &middot; {match.mode}
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  {match.duration} &middot; {match.playedAt}
                </p>
              </div>
              <span className="shrink-0 font-mono text-sm font-semibold text-gray-900">{match.score}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
