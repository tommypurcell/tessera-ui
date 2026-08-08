import { useState } from 'react'

export type QuizOption = {
  id: string
  label: string
}

export type QuizQuestionCardVariant1DarkProps = {
  question: string
  options: QuizOption[]
  correctOptionId: string
  onSubmit?: (selectedId: string, isCorrect: boolean) => void
}

/**
 * Copy-and-own Tailwind component. Quiz question card adapted for dark
 * surfaces — correctness is determined by comparing the real selected
 * option id against `correctOptionId`.
 */
export function QuizQuestionCardDark({ question, options, correctOptionId, onSubmit }: QuizQuestionCardVariant1DarkProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  function submit() {
    if (!selectedId) return
    setRevealed(true)
    onSubmit?.(selectedId, selectedId === correctOptionId)
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6">
      <h2 className="text-sm font-medium text-gray-100">{question}</h2>

      <div role={revealed ? undefined : 'radiogroup'} aria-label={revealed ? undefined : question} className="flex flex-col gap-2">
        {options.map((option) => {
          const isSelected = option.id === selectedId
          const isCorrectOption = option.id === correctOptionId

          let optionClass = 'border-gray-700 text-gray-300 hover:bg-gray-800'
          if (revealed) {
            if (isCorrectOption) optionClass = 'border-green-500 bg-green-500/10 text-green-300'
            else if (isSelected) optionClass = 'border-red-500 bg-red-500/10 text-red-300'
            else optionClass = 'border-gray-800 text-gray-600'
          } else if (isSelected) {
            optionClass = 'border-blue-500 bg-blue-500/10 text-blue-300'
          }

          return (
            <button
              key={option.id}
              type="button"
              role={revealed ? undefined : 'radio'}
              aria-checked={revealed ? undefined : isSelected}
              disabled={revealed}
              onClick={() => setSelectedId(option.id)}
              className={`rounded-md border px-3 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900 ${optionClass}`}
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
          className="self-start rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900 disabled:cursor-not-allowed disabled:bg-gray-700"
        >
          Submit answer
        </button>
      ) : null}
    </div>
  )
}
