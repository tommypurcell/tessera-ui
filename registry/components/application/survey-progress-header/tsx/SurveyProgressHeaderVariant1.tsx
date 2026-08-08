export type SurveyProgressHeaderVariant1Props = {
  currentQuestion: number
  totalQuestions: number
  onBack?: () => void
  onNext?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Survey progress header — a "Question X of N" label
 * and progress fill computed from real currentQuestion/totalQuestions props, with
 * Back/Next buttons that disable themselves at the first/last question.
 */
export function SurveyProgressHeaderVariant1({ currentQuestion, totalQuestions, onBack, onNext, className }: SurveyProgressHeaderVariant1Props) {
  const percent = totalQuestions > 0 ? Math.min((currentQuestion / totalQuestions) * 100, 100) : 0
  const isFirst = currentQuestion <= 1
  const isLast = currentQuestion >= totalQuestions

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">
          Question {currentQuestion} of {totalQuestions}
        </p>
        <p className="text-xs text-gray-400">{Math.round(percent)}% complete</p>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${percent}%` }} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirst}
          className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-white"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          {isLast ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  )
}
