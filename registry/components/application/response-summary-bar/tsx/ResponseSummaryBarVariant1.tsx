export type ResponseOption = {
  id: string
  label: string
  count: number
}

export type ResponseSummaryBarVariant1Props = {
  options: ResponseOption[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Response summary bar — per-option horizontal result
 * bars with percentage and raw count, both computed from real response counts and the
 * total across all options rather than hardcoded.
 */
export function ResponseSummaryBarVariant1({ options, className }: ResponseSummaryBarVariant1Props) {
  const total = options.reduce((sum, option) => sum + option.count, 0)

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const percent = total > 0 ? (option.count / total) * 100 : 0
          return (
            <div key={option.id}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-900">{option.label}</span>
                <span className="text-gray-500">
                  {Math.round(percent)}% <span className="text-gray-400">({option.count})</span>
                </span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full rounded-full bg-blue-600" style={{ width: `${percent}%` }} />
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-500">{total} responses</p>
    </div>
  )
}
