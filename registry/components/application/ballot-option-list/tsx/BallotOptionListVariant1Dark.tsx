import { useState } from 'react'

export type BallotOption = {
  id: string
  name: string
  info?: string
}

export type BallotOptionListVariant1DarkProps = {
  raceTitle: string
  instructions: string
  options: BallotOption[]
  selectedId: string | null
  onSelect?: (id: string) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Formal pre-vote ballot: a
 * radiogroup of candidate/measure rows, each with an optional expandable
 * "More info" panel, and no result percentages.
 */
export function BallotOptionList({ raceTitle, instructions, options, selectedId, onSelect, className }: BallotOptionListVariant1DarkProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`}>
      <h2 className="text-sm font-semibold text-gray-100">{raceTitle}</h2>
      <p className="mt-0.5 text-xs text-gray-500">{instructions}</p>

      <fieldset role="radiogroup" aria-label={`${raceTitle} candidates`} className="mt-3 space-y-2">
        {options.map((option) => {
          const isSelected = option.id === selectedId
          const isExpanded = option.id === expandedId
          return (
            <div key={option.id} className={isSelected ? 'rounded-lg border border-gray-100' : 'rounded-lg border border-gray-800'}>
              <label className="flex items-center gap-3 px-3.5 py-3">
                <input
                  type="radio"
                  name="ballot-1"
                  checked={isSelected}
                  onChange={() => onSelect?.(option.id)}
                  className="size-4 border-gray-700 bg-gray-800 text-gray-100 focus:ring-gray-100"
                />
                <span className="flex-1 text-sm font-medium text-gray-100">{option.name}</span>
                {option.info ? (
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`candidate-info-${option.id}`}
                    onClick={() => setExpandedId(isExpanded ? null : option.id)}
                    className="text-xs font-medium text-blue-400 hover:text-blue-300"
                  >
                    {isExpanded ? 'Hide info' : 'More info'}
                  </button>
                ) : null}
              </label>
              {isExpanded && option.info ? (
                <div id={`candidate-info-${option.id}`} className="border-t border-gray-800 px-3.5 py-3 pl-11 text-xs text-gray-400">
                  {option.info}
                </div>
              ) : null}
            </div>
          )
        })}
      </fieldset>
    </div>
  )
}
