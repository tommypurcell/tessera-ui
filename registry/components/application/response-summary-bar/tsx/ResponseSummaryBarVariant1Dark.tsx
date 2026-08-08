export type ResponseOption = {
  id: string
  label: string
  count: number
}

export type ResponseSummaryBarVariant1DarkProps = {
  options: ResponseOption[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the response summary bar.
 */
export function ResponseSummaryBarVariant1Dark({ options, className }: ResponseSummaryBarVariant1DarkProps) {
  const total = options.reduce((sum, option) => sum + option.count, 0)

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const percent = total > 0 ? (option.count / total) * 100 : 0
          return (
            <div key={option.id}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-white">{option.label}</span>
                <span className="text-gray-400">
                  {Math.round(percent)}% <span className="text-gray-500">({option.count})</span>
                </span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-gray-800">
                <div className="h-full rounded-full bg-blue-500" style={{ width: `${percent}%` }} />
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-4 border-t border-gray-800 pt-3 text-xs text-gray-500">{total} responses</p>
    </div>
  )
}
