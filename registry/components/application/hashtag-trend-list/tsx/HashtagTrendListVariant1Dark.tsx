export type HashtagTrend = {
  tag: string
  category: string
  postCount: number
}

export type HashtagTrendListVariant1DarkProps = {
  title?: string
  trends: HashtagTrend[]
}

function formatCount(n: number) {
  if (n < 1000) return `${n}`
  if (n < 1_000_000) return `${(n / 1000).toFixed(1)}K`
  return `${(n / 1_000_000).toFixed(1)}M`
}

/**
 * Copy-and-own Tailwind component. Ranked list of trending hashtags
 * adapted for dark surfaces — rank numbers and the post-count label are
 * derived from the real trends array and postCount.
 */
export function HashtagTrendListDark({ title, trends }: HashtagTrendListVariant1DarkProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-800 bg-gray-900 p-4">
      {title ? <h2 className="px-2 text-sm font-medium text-gray-100">{title}</h2> : null}

      <ol className="flex flex-col divide-y divide-gray-800">
        {trends.map((trend, index) => (
          <li key={trend.tag} className="flex items-center gap-3 px-2 py-2.5">
            <span className="w-4 shrink-0 text-sm font-semibold text-gray-600">{index + 1}</span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-100">#{trend.tag}</p>
              <p className="text-xs text-gray-500">{trend.category}</p>
            </div>

            <span className="shrink-0 text-xs text-gray-500">{formatCount(trend.postCount)} posts</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
