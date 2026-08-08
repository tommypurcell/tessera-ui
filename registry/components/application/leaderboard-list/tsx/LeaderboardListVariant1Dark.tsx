export type LeaderboardMovement = 'up' | 'down' | 'same'

export type LeaderboardEntry = {
  id: string
  rank: number
  name: string
  score: number
  movement: LeaderboardMovement
}

export type LeaderboardListVariant1DarkProps = {
  title?: string
  entries: LeaderboardEntry[]
}

const medalStyles: Record<number, string> = {
  1: 'bg-amber-500/10 text-amber-300',
  2: 'bg-gray-700 text-gray-200',
  3: 'bg-orange-500/10 text-orange-300',
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

function MovementIndicator({ movement }: { movement: LeaderboardMovement }) {
  if (movement === 'same') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
        <span className="sr-only">No change</span>
      </span>
    )
  }

  const up = movement === 'up'
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium ${up ? 'text-green-400' : 'text-red-400'}`}>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className={`size-3 ${up ? '' : 'rotate-180'}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
      </svg>
      <span className="sr-only">{up ? 'Moved up' : 'Moved down'}</span>
    </span>
  )
}

/**
 * Copy-and-own Tailwind component. Ranked leaderboard rows adapted for
 * dark surfaces, with the same real rank/score/movement contract — the
 * top three ranks get a medal badge automatically.
 */
export function LeaderboardListDark({ title, entries }: LeaderboardListVariant1DarkProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-gray-900 p-4">
      {title ? <h2 className="px-2 text-sm font-medium text-gray-100">{title}</h2> : null}

      <ol className="flex flex-col divide-y divide-gray-800">
        {entries.map((entry) => (
          <li key={entry.id} className="flex items-center gap-3 px-2 py-2.5">
            <span
              className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                medalStyles[entry.rank] ?? 'bg-gray-800 text-gray-400'
              }`}
            >
              {entry.rank}
            </span>

            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-medium text-blue-300">
              {initials(entry.name)}
            </span>

            <span className="flex-1 text-sm font-medium text-gray-100">{entry.name}</span>

            <span className="text-sm font-semibold text-gray-100">{entry.score.toLocaleString()}</span>

            <MovementIndicator movement={entry.movement} />
          </li>
        ))}
      </ol>
    </div>
  )
}
