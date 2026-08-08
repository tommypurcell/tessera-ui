import { useState } from 'react'

export type QuizOption = {
  id: string
  label: string
}

export type QuizQuestionCardVariant1Props = {
  question: string
  options: QuizOption[]
  correctOptionId: string
  onSubmit?: (selectedId: string, isCorrect: boolean) => void
}

/**
 * Copy-and-own Tailwind component. Quiz question card with selectable
 * options and a correct/incorrect reveal — correctness is determined by
 * comparing the real selected option id against `correctOptionId`, not
 * hand-styled per option.
 */
export function QuizQuestionCard({ question, options, correctOptionId, onSubmit }: QuizQuestionCardVariant1Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  function submit() {
    if (!selectedId) return
    setRevealed(true)
    onSubmit?.(selectedId, selectedId === correctOptionId)
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-sm font-medium text-gray-900">{question}</h2>

      <div role={revealed ? undefined : 'radiogroup'} aria-label={revealed ? undefined : question} className="flex flex-col gap-2">
        {options.map((option) => {
          const isSelected = option.id === selectedId
          const isCorrectOption = option.id === correctOptionId

          let optionClass = 'border-gray-300 text-gray-700 hover:bg-gray-50'
          if (revealed) {
            if (isCorrectOption) optionClass = 'border-green-500 bg-green-50 text-green-800'
            else if (isSelected) optionClass = 'border-red-500 bg-red-50 text-red-800'
            else optionClass = 'border-gray-200 text-gray-400'
          } else if (isSelected) {
            optionClass = 'border-blue-600 bg-blue-50 text-blue-800'
          }

          return (
            <button
              key={option.id}
              type="button"
              role={revealed ? undefined : 'radio'}
              aria-checked={revealed ? undefined : isSelected}
              disabled={revealed}
              onClick={() => setSelectedId(option.id)}
              className={`rounded-md border px-3 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 ${optionClass}`}
            >
              {option.label}
              {revealed && isCorrectOption ? <span className="ml-2 text-xs font-medium">✓ Correct</span> : null}
              {revealed && isSelected && !isCorrectOption ? <span className="ml-2 text-xs font-medium">✕ Your answer</span> : null}
            </button>
          )
        })}
      </div>

      {!revealed ? (
        <button
          type="button"
          onClick={submit}
          disabled={!selectedId}
          className="self-start rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Submit answer
        </button>
      ) : null}
    </div>
  )
}
