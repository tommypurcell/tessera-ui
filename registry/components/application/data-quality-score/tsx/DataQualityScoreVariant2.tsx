const RADIUS = 40
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export type DataQualityScoreVariant2Props = {
  /** Score from 0-100. */
  score: number
  datasetName: string
  passedCount: number
  failedCount: number
  totalCount: number
  onViewReport?: () => void
}

/**
 * Copy-and-own Tailwind component. Compact horizontal data-quality summary
 * bar with a smaller score ring and pass/fail counts — for surfacing a
 * dataset's quality status inline in a list rather than as a standalone card.
 */
export function DataQualityScore({
  score,
  datasetName,
  passedCount,
  failedCount,
  totalCount,
  onViewReport,
}: DataQualityScoreVariant2Props) {
  const offset = CIRCUMFERENCE * (1 - score / 100)

  return (
    <div className="flex w-full max-w-md items-center gap-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
      <div className="relative flex size-14 shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="size-14 -rotate-90"
          role="img"
          aria-label={`Data quality score: ${score} out of 100`}
        >
          <circle cx="50" cy="50" r={RADIUS} fill="none" strokeWidth="12" className="stroke-amber-200" />
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            strokeWidth="12"
            strokeLinecap="round"
            className="stroke-amber-600"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute text-sm font-semibold text-amber-900">{score}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-amber-900">{datasetName} needs attention</p>
        <p className="mt-0.5 text-xs text-amber-700">
          {passedCount} passed &middot; {failedCount} failed &middot; {totalCount} total checks
        </p>
      </div>
      <button
        type="button"
        onClick={onViewReport}
        className="shrink-0 rounded-md border border-amber-300 bg-white px-3 py-1.5 text-xs font-medium text-amber-800 hover:bg-amber-100"
      >
        View report
      </button>
    </div>
  )
}
