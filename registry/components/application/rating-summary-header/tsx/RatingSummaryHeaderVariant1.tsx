const starPath =
  'M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L10 18.354l-4.647 2.826c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z'

export type RatingSummaryHeaderVariant1Props = {
  average: number
  totalReviews: number
}

/**
 * Copy-and-own Tailwind component. Product/review header showing a large
 * average score, a 5-star row (with a proportionally clipped partial star for
 * decimal averages), and a total-review count. Star fill is computed from
 * `average`, so no manual per-star state is needed.
 */
export function RatingSummaryHeader({ average, totalReviews }: RatingSummaryHeaderVariant1Props) {
  const fullStars = Math.floor(average)
  const partialFraction = average - fullStars
  const partialClipPercent = Math.round((1 - partialFraction) * 100)

  return (
    <div className="flex items-center gap-4">
      <p className="text-4xl font-bold text-gray-900">{average.toFixed(1)}</p>

      <div>
        <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${average.toFixed(1)} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, index) => {
            if (index < fullStars) {
              return (
                <svg key={index} aria-hidden="true" className="size-4 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
                </svg>
              )
            }
            if (index === fullStars && partialFraction > 0) {
              return (
                <span key={index} className="relative inline-block size-4">
                  <svg aria-hidden="true" className="absolute inset-0 size-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
                  </svg>
                  <svg aria-hidden="true" className="absolute inset-0 size-4 text-amber-400" style={{ clipPath: `inset(0 ${partialClipPercent}% 0 0)` }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
                  </svg>
                </span>
              )
            }
            return (
              <svg key={index} aria-hidden="true" className="size-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
              </svg>
            )
          })}
        </div>
        <p className="mt-1 text-xs text-gray-500">Based on {totalReviews.toLocaleString()} reviews</p>
      </div>
    </div>
  )
}
