export type SportsTeam = {
  name: string
  abbreviation: string
  score: number
  hasPossession?: boolean
}

export type SportsScoreboardVariant1Props = {
  home: SportsTeam
  away: SportsTeam
  period: string
  clock: string
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the sports
 * scoreboard.
 */
export function SportsScoreboard({ home, away, period, clock }: SportsScoreboardVariant1Props) {
  const leader = home.score === away.score ? null : home.score > away.score ? 'home' : 'away'

  const renderTeam = (team: SportsTeam, side: 'home' | 'away') => (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div className="flex items-center gap-1.5">
        <span className={`text-sm font-medium ${leader === side ? 'text-gray-100' : 'text-gray-500'}`}>{team.abbreviation}</span>
        {team.hasPossession ? (
          <svg aria-label="Has possession" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 text-amber-400">
            <path d="M12 2 2 7l10 5 10-5-10-5Zm0 15-10-5v3l10 5 10-5v-3l-10 5Z" />
          </svg>
        ) : null}
      </div>
      <span className={`text-3xl font-bold tabular-nums ${leader === side ? 'text-gray-100' : 'text-gray-600'}`}>{team.score}</span>
    </div>
  )

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-lg border border-gray-800 bg-gray-900 p-5">
      <div className="flex w-full items-center">
        {renderTeam(away, 'away')}
        <span className="shrink-0 px-2 text-sm text-gray-700">–</span>
        {renderTeam(home, 'home')}
      </div>
      <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
        <span>{period}</span>
        <span aria-hidden="true">·</span>
        <span className="tabular-nums">{clock}</span>
      </div>
    </div>
  )
}
