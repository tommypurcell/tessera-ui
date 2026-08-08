export type Competency = {
  id: string
  label: string
  note: string
  rating: number
  onRate?: (rating: number) => void
}

export type Recommendation = 'strong-hire' | 'hire' | 'no-hire'

export type InterviewScorecardVariant1DarkProps = {
  candidateName: string
  roleName: string
  competencies: Competency[]
  notes: string
  onNotesChange?: (notes: string) => void
  recommendation?: Recommendation
  onRecommend?: (rec: Recommendation) => void
  className?: string
}

const recommendationLabel: Record<Recommendation, string> = {
  'strong-hire': 'Strong hire',
  hire: 'Hire',
  'no-hire': 'No hire',
}

/**
 * Copy-and-own Tailwind component (dark surface). Interview evaluation card:
 * per-competency rows with a 1-5 rating scale and a short note, an overall
 * notes textarea, and a strong-hire/hire/no-hire recommendation selector.
 */
export function InterviewScorecard({
  candidateName,
  roleName,
  competencies,
  notes,
  onNotesChange,
  recommendation,
  onRecommend,
  className,
}: InterviewScorecardVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <div className="border-b border-gray-800 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-100">Interview scorecard</h2>
        <p className="mt-0.5 text-xs text-gray-400">
          {candidateName} &middot; {roleName}
        </p>
      </div>

      <div className="flex flex-col divide-y divide-gray-800">
        {competencies.map((comp) => (
          <div key={comp.id} className="px-5 py-3.5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-100">{comp.label}</p>
              <div className="flex items-center gap-1" role="radiogroup" aria-label={`${comp.label} rating`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={comp.rating === n}
                    onClick={() => comp.onRate?.(n)}
                    className={
                      n <= comp.rating
                        ? 'h-6 w-6 rounded-full bg-indigo-500 text-xs font-semibold text-white'
                        : 'h-6 w-6 rounded-full border border-gray-700 text-xs font-medium text-gray-500'
                    }
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-400">{comp.note}</p>
          </div>
        ))}

        <div className="px-5 py-3.5">
          <label htmlFor="scorecard-notes" className="text-sm font-medium text-gray-100">
            Additional notes
          </label>
          <textarea
            id="scorecard-notes"
            rows={2}
            value={notes}
            onChange={(e) => onNotesChange?.(e.target.value)}
            className="mt-2 w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="border-t border-gray-800 px-5 py-4">
        <p className="mb-2 text-xs font-medium text-gray-300">Overall recommendation</p>
        <div className="flex gap-2">
          {(['strong-hire', 'hire', 'no-hire'] as Recommendation[]).map((rec) => (
            <button
              key={rec}
              type="button"
              onClick={() => onRecommend?.(rec)}
              className={
                recommendation === rec
                  ? 'flex-1 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm'
                  : 'flex-1 rounded-md border border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800'
              }
            >
              {recommendationLabel[rec]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
