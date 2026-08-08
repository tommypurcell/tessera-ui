export type ProfileStat = {
  label: string
  value: string
  onSelect?: () => void
}

export type ProfileStatsBarVariant1Props = {
  stats: ProfileStat[]
}

/**
 * Copy-and-own Tailwind component. Horizontal row of tappable profile stats
 * (posts/followers/following), each a full-height button with a bold count
 * and a muted label, divided by hairlines.
 */
export function ProfileStatsBar({ stats }: ProfileStatsBarVariant1Props) {
  return (
    <div className="flex w-full max-w-xs divide-x divide-gray-200 rounded-lg border border-gray-200 bg-white">
      {stats.map((stat) => (
        <button key={stat.label} type="button" onClick={stat.onSelect} className="flex flex-1 flex-col items-center gap-0.5 py-3 hover:bg-gray-50">
          <span className="text-base font-semibold text-gray-900">{stat.value}</span>
          <span className="text-xs text-gray-500">{stat.label}</span>
        </button>
      ))}
    </div>
  )
}
