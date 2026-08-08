export type HashtagTrend = {
  tag: string
  category: string
  postCount: number
}

export type HashtagTrendListVariant1Props = {
  title?: string
  trends: HashtagTrend[]
}

function formatCount(n: number) {
  if (n < 1000) return `${n}`
  if (n < 1_000_000) return `${(n / 1000).toFixed(1)}K`
  return `${(n / 1_000_000).toFixed(1)}M`
}

/**
 * Copy-and-own Tailwind component. Ranked list of trending hashtags —
 * rank numbers and the human-readable post-count label (e.g. "24.3K
 * posts") are both derived from the real `trends` array position and
 * `postCount`, never hand-typed per row.
 */
export function HashtagTrendList({ title, trends }: HashtagTrendListVariant1Props) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
      {title ? <h2 className="px-2 text-sm font-medium text-gray-900">{title}</h2> : null}

      <ol className="flex flex-col divide-y divide-gray-100">
        {trends.map((trend, index) => (
          <li key={trend.tag} className="flex items-center gap-3 px-2 py-2.5">
            <span className="w-4 shrink-0 text-sm font-semibold text-gray-400">{index + 1}</span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">#{trend.tag}</p>
              <p className="text-xs text-gray-500">{trend.category}</p>
            </div>

            <span className="shrink-0 text-xs text-gray-500">{formatCount(trend.postCount)} posts</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
