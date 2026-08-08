import { useState } from 'react'

export type BallotOption = {
  id: string
  name: string
  info?: string
}

export type BallotOptionListVariant1Props = {
  raceTitle: string
  instructions: string
  options: BallotOption[]
  selectedId: string | null
  onSelect?: (id: string) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Formal pre-vote ballot: a radiogroup of
 * candidate/measure rows, each with an optional expandable "More info"
 * panel, and no result percentages since voting hasn't happened yet.
 * Distinct from Poll Vote Card, which shows result percentage bars
 * (before or after voting) rather than a formal single-select ballot with
 * per-candidate biographical detail.
 */
export function BallotOptionList({ raceTitle, instructions, options, selectedId, onSelect, className }: BallotOptionListVariant1Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`}>
      <h2 className="text-sm font-semibold text-gray-900">{raceTitle}</h2>
      <p className="mt-0.5 text-xs text-gray-400">{instructions}</p>

      <fieldset role="radiogroup" aria-label={`${raceTitle} candidates`} className="mt-3 space-y-2">
        {options.map((option) => {
          const isSelected = option.id === selectedId
          const isExpanded = option.id === expandedId
          return (
            <div key={option.id} className={isSelected ? 'rounded-lg border border-gray-900' : 'rounded-lg border border-gray-200'}>
              <label className="flex items-center gap-3 px-3.5 py-3">
                <input
                  type="radio"
                  name="ballot-1"
                  checked={isSelected}
                  onChange={() => onSelect?.(option.id)}
                  className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span className="flex-1 text-sm font-medium text-gray-900">{option.name}</span>
                {option.info ? (
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`candidate-info-${option.id}`}
                    onClick={() => setExpandedId(isExpanded ? null : option.id)}
                    className="text-xs font-medium text-blue-700 hover:text-blue-800"
                  >
                    {isExpanded ? 'Hide info' : 'More info'}
                  </button>
                ) : null}
              </label>
              {isExpanded && option.info ? (
                <div id={`candidate-info-${option.id}`} className="border-t border-gray-100 px-3.5 py-3 pl-11 text-xs text-gray-500">
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
