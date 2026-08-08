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
 * Copy-and-own Tailwind component. Two-team scoreboard with period/clock
 * and a possession indicator — the leading team is derived by comparing
 * real scores (never hand-picked), and possession is shown via both an
 * icon and text, not color alone. Distinct from a generic stats display,
 * which has no live clock or possession semantics.
 */
export function SportsScoreboard({ home, away, period, clock }: SportsScoreboardVariant1Props) {
  const leader = home.score === away.score ? null : home.score > away.score ? 'home' : 'away'

  const renderTeam = (team: SportsTeam, side: 'home' | 'away') => (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div className="flex items-center gap-1.5">
        <span className={`text-sm font-medium ${leader === side ? 'text-gray-900' : 'text-gray-500'}`}>{team.abbreviation}</span>
        {team.hasPossession ? (
          <svg aria-label="Has possession" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 text-amber-500">
            <path d="M12 2 2 7l10 5 10-5-10-5Zm0 15-10-5v3l10 5 10-5v-3l-10 5Z" />
          </svg>
        ) : null}
      </div>
      <span className={`text-3xl font-bold tabular-nums ${leader === side ? 'text-gray-900' : 'text-gray-400'}`}>{team.score}</span>
    </div>
  )

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex w-full items-center">
        {renderTeam(away, 'away')}
        <span className="shrink-0 px-2 text-sm text-gray-300">–</span>
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
