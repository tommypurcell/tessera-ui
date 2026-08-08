export type SurveyProgressHeaderVariant1DarkProps = {
  currentQuestion: number
  totalQuestions: number
  onBack?: () => void
  onNext?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the survey progress header.
 */
export function SurveyProgressHeaderVariant1Dark({ currentQuestion, totalQuestions, onBack, onNext, className }: SurveyProgressHeaderVariant1DarkProps) {
  const percent = totalQuestions > 0 ? Math.min((currentQuestion / totalQuestions) * 100, 100) : 0
  const isFirst = currentQuestion <= 1
  const isLast = currentQuestion >= totalQuestions

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-white">
          Question {currentQuestion} of {totalQuestions}
        </p>
        <p className="text-xs text-gray-500">{Math.round(percent)}% complete</p>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
        <div className="h-full rounded-full bg-blue-500" style={{ width: `${percent}%` }} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirst}
          className="rounded-md border border-gray-700 bg-gray-950 px-3 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-900 disabled:cursor-not-allowed disabled:border-gray-800 disabled:text-gray-600 disabled:hover:bg-gray-950"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500"
        >
          {isLast ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  )
}
