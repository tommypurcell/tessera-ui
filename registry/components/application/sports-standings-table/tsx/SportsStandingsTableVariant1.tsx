export type StandingsTeam = {
  rank: number
  previousRank: number
  team: string
  wins: number
  losses: number
  streak: string
}

export type SportsStandingsTableVariant1Props = {
  teams: StandingsTeam[]
}

/**
 * Copy-and-own Tailwind component. League standings table with win %
 * computed from real wins/losses and rank-movement arrows derived from
 * comparing rank against previousRank — distinct from leaderboard-list,
 * which is a generic score-based ranked list with no win/loss record,
 * win percentage, or streak column.
 */
export function SportsStandingsTable({ teams }: SportsStandingsTableVariant1Props) {
  return (
    <table className="w-full max-w-lg border-collapse overflow-hidden rounded-lg border border-gray-200 bg-white text-sm">
      <thead>
        <tr className="border-b border-gray-100 text-left text-xs text-gray-500">
          <th className="px-3 py-2 font-medium">#</th>
          <th className="px-3 py-2 font-medium">Team</th>
          <th className="px-3 py-2 text-center font-medium">W</th>
          <th className="px-3 py-2 text-center font-medium">L</th>
          <th className="px-3 py-2 text-center font-medium">PCT</th>
          <th className="px-3 py-2 text-center font-medium">Streak</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {teams.map((t) => {
          const pct = t.wins / (t.wins + t.losses)
          const movement = t.rank < t.previousRank ? 'up' : t.rank > t.previousRank ? 'down' : 'same'
          return (
            <tr key={t.team}>
              <td className="px-3 py-2.5">
                <span className="flex items-center gap-1">
                  <span className="font-semibold text-gray-900">{t.rank}</span>
                  {movement === 'up' ? (
                    <svg aria-label="Moved up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2.5 text-emerald-600">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  ) : movement === 'down' ? (
                    <svg aria-label="Moved down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2.5 rotate-180 text-red-600">
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                  ) : null}
                </span>
              </td>
              <td className="px-3 py-2.5 font-medium text-gray-900">{t.team}</td>
              <td className="px-3 py-2.5 text-center text-gray-600">{t.wins}</td>
              <td className="px-3 py-2.5 text-center text-gray-600">{t.losses}</td>
              <td className="px-3 py-2.5 text-center text-gray-600">{pct.toFixed(3).slice(1)}</td>
              <td className={`px-3 py-2.5 text-center font-medium ${t.streak.startsWith('W') ? 'text-emerald-600' : 'text-red-600'}`}>{t.streak}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
