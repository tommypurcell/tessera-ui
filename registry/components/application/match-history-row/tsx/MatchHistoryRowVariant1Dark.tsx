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

export type MatchHistoryRowVariant1DarkProps = {
  matches: Match[]
  className?: string
}

const resultStyle: Record<MatchResult, { border: string; text: string; label: string }> = {
  win: { border: 'border-emerald-500', text: 'text-emerald-400', label: 'Win' },
  loss: { border: 'border-red-500', text: 'text-red-400', label: 'Loss' },
  draw: { border: 'border-gray-600', text: 'text-gray-400', label: 'Draw' },
}

/**
 * Copy-and-own Tailwind component (dark surface). List of match results: a
 * colored left border and result label, game mode and queue type, score,
 * duration, and relative time.
 */
export function MatchHistoryRow({ matches, className }: MatchHistoryRowVariant1DarkProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <ul className="divide-y divide-gray-800">
        {matches.map((match) => {
          const style = resultStyle[match.result]
          return (
            <li key={match.id} className={`flex items-center gap-3 border-l-4 py-3 pr-4 pl-3 ${style.border}`}>
              <span className={`w-10 shrink-0 text-sm font-semibold ${style.text}`}>{style.label}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-100">
                  {match.queue} &middot; {match.mode}
                </p>
                <p className="mt-0.5 text-xs text-gray-400">
                  {match.duration} &middot; {match.playedAt}
                </p>
              </div>
              <span className="shrink-0 font-mono text-sm font-semibold text-gray-100">{match.score}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
