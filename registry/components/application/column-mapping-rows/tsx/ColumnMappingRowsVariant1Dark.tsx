export type ColumnMapping = {
  id: string
  sourceColumn: string
  sampleValue: string
  targetField: string
  matchType: 'auto' | 'manual'
  onTargetChange?: (targetField: string) => void
}

export type ColumnMappingRowsVariant1DarkProps = {
  mappings: ColumnMapping[]
  targetOptions: string[]
  ignoreLabel?: string
  onContinue?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). CSV/spreadsheet import
 * field mapping: each row pairs a source column (with a sample value) to a
 * target-field dropdown, badged Auto or Manual.
 */
export function ColumnMappingRows({
  mappings,
  targetOptions,
  ignoreLabel = 'Ignore column',
  onContinue,
  className,
}: ColumnMappingRowsVariant1DarkProps) {
  const mappedCount = mappings.filter((m) => m.targetField !== ignoreLabel).length

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 border-b border-gray-800 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
        <span>Source column</span>
        <span></span>
        <span>Maps to</span>
      </div>

      <ul className="divide-y divide-gray-800">
        {mappings.map((mapping) => (
          <li key={mapping.id} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-100">{mapping.sourceColumn}</p>
              <p className="truncate text-xs text-gray-500">e.g. &quot;{mapping.sampleValue}&quot;</p>
            </div>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            <div className="flex items-center gap-1.5">
              <select
                aria-label={`Map ${mapping.sourceColumn} to`}
                value={mapping.targetField}
                onChange={(e) => mapping.onTargetChange?.(e.target.value)}
                className={`w-full rounded-md border bg-gray-800 py-1.5 pl-2.5 pr-7 text-sm text-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                  mapping.matchType === 'manual' ? 'border-amber-600' : 'border-gray-700'
                }`}
              >
                {targetOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
                <option>{ignoreLabel}</option>
              </select>
              <span
                className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                  mapping.matchType === 'auto' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                }`}
              >
                {mapping.matchType === 'auto' ? 'Auto' : 'Manual'}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-gray-800 px-5 py-3">
        <span className="text-xs text-gray-400">
          {mappedCount} of {mappings.length} columns mapped
        </span>
        <button type="button" onClick={onContinue} className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-white">
          Continue
        </button>
      </div>
    </div>
  )
}
