export type LogicBranchRule = {
  id: string
  conditionQuestion: string
  operator: string
  conditionValue: string
  jumpTarget: string
}

export type LogicBranchRowVariant1DarkProps = {
  rules: LogicBranchRule[]
  questionOptions: string[]
  operatorOptions: string[]
  valueOptions: string[]
  onDeleteRule?: (id: string) => void
  onAddRule?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Survey-builder
 * conditional-flow rule row: "If [question] [operator] [value] then jump to
 * [question]" rendered as a chained set of dropdowns with a delete action,
 * plus an Add rule control.
 */
export function LogicBranchRow({
  rules,
  questionOptions,
  operatorOptions,
  valueOptions,
  onDeleteRule,
  onAddRule,
  className,
}: LogicBranchRowVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`}>
      <p className="text-sm font-semibold text-gray-100">Skip logic</p>

      <ul className="mt-3 space-y-2">
        {rules.map((rule) => (
          <li key={rule.id} className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-800 bg-gray-800/40 px-3 py-2.5">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500">If</span>
            <select aria-label="Condition question" defaultValue={rule.conditionQuestion} className="rounded-md border border-gray-700 bg-gray-800 py-1.5 pl-2.5 pr-7 text-sm text-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              {questionOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <select aria-label="Condition operator" defaultValue={rule.operator} className="rounded-md border border-gray-700 bg-gray-800 py-1.5 pl-2.5 pr-7 text-sm text-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              {operatorOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <select aria-label="Condition value" defaultValue={rule.conditionValue} className="rounded-md border border-gray-700 bg-gray-800 py-1.5 pl-2.5 pr-7 text-sm text-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              {valueOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500">then jump to</span>
            <select aria-label="Jump target question" defaultValue={rule.jumpTarget} className="rounded-md border border-gray-700 bg-gray-800 py-1.5 pl-2.5 pr-7 text-sm text-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              {questionOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <button
              type="button"
              aria-label="Delete this rule"
              onClick={() => onDeleteRule?.(rule.id)}
              className="ml-auto flex size-7 shrink-0 items-center justify-center rounded-md text-gray-500 hover:bg-gray-800 hover:text-gray-300"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <button type="button" onClick={onAddRule} className="mt-3 flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add rule
      </button>
    </div>
  )
}
