export type PlayerQuickStat = {
  label: string
  value: string
}

export type PlayerCardVariant1Props = {
  gamertag: string
  initials: string
  rankTier: string
  stats: PlayerQuickStat[]
}

/**
 * Copy-and-own Tailwind component. Gaming profile card with a gradient header
 * (avatar, gamertag, rank tier badge) and a row of quick stats below. Pass
 * exactly 3 stats for the even three-column grid, or adjust the grid columns
 * for a different count.
 */
export function PlayerCard({ gamertag, initials, rankTier, stats }: PlayerCardVariant1Props) {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 bg-gradient-to-br from-violet-500 to-blue-600 p-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-white/70 bg-white/20 text-sm font-bold text-white backdrop-blur">
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{gamertag}</p>
          <p className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white">
            <svg aria-hidden="true" className="size-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L10 18.354l-4.647 2.826c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z"
                clipRule="evenodd"
              />
            </svg>
            {rankTier}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-0.5 py-3">
            <span className="text-sm font-semibold text-gray-900">{stat.value}</span>
            <span className="text-xs text-gray-500">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
