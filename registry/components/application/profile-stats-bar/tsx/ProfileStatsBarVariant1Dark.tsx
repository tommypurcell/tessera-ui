export type ProfileStatDark = {
  label: string
  value: string
  onSelect?: () => void
}

export type ProfileStatsBarVariant1DarkProps = {
  stats: ProfileStatDark[]
}

/**
 * Copy-and-own Tailwind component. Horizontal row of tappable profile stats
 * (posts/followers/following), each a full-height button with a bold count
 * and a muted label, divided by hairlines.
 */
export function ProfileStatsBarDark({ stats }: ProfileStatsBarVariant1DarkProps) {
  return (
    <div className="flex w-full max-w-xs divide-x divide-gray-700 rounded-lg border border-gray-700 bg-gray-900">
      {stats.map((stat) => (
        <button key={stat.label} type="button" onClick={stat.onSelect} className="flex flex-1 flex-col items-center gap-0.5 py-3 hover:bg-gray-800">
          <span className="text-base font-semibold text-white">{stat.value}</span>
          <span className="text-xs text-gray-400">{stat.label}</span>
        </button>
      ))}
    </div>
  )
}
