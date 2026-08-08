const RADIUS = 40
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export type DataQualityScoreVariant1Props = {
  /** Score from 0-100. */
  score: number
  passingCount: number
  totalCount: number
  failingRules: string[]
}

/**
 * Copy-and-own Tailwind component. Circular data-quality score ring with a
 * failing-rule list — distinct from application-lead-score-meter since it
 * summarizes pass/fail validation checks on a dataset rather than a lead's
 * fit/intent score.
 */
export function DataQualityScore({ score, passingCount, totalCount, failingRules }: DataQualityScoreVariant1Props) {
  const offset = CIRCUMFERENCE * (1 - score / 100)

  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-4">
        <div className="relative flex size-24 shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="size-24 -rotate-90"
            role="img"
            aria-label={`Data quality score: ${score} out of 100`}
          >
            <circle cx="50" cy="50" r={RADIUS} fill="none" strokeWidth="10" className="stroke-gray-100" />
            <circle
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              className="stroke-green-500"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
            />
          </svg>
          <span className="absolute text-xl font-semibold text-gray-900">{score}</span>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Data quality score</h2>
          <p className="mt-1 text-xs text-gray-500">
            {passingCount} of {totalCount} checks passing
          </p>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-100 pt-3">
        <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">Failing rules</p>
        <ul className="mt-2 flex flex-col gap-2">
          {failingRules.map((rule) => (
            <li key={rule} className="flex items-start gap-2 text-sm text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 size-4 shrink-0 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
