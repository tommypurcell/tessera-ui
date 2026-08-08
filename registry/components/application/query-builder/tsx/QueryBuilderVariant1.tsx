import type { HTMLAttributes } from 'react'

export type QueryCondition = {
  type: 'condition'
  id: string
  field: string
  operator: string
  value: string
}

export type QueryGroup = {
  type: 'group'
  id: string
  combinator: 'AND' | 'OR'
  rules: (QueryCondition | QueryGroup)[]
}

export type QueryBuilderVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  root: QueryGroup
  onCombinatorChange?: (groupId: string, combinator: 'AND' | 'OR') => void
  onRemoveRule?: (ruleId: string) => void
  onAddCondition?: (groupId: string) => void
  onAddGroup?: (groupId: string) => void
}

function QueryGroupView({
  group,
  depth,
  onCombinatorChange,
  onRemoveRule,
  onAddCondition,
  onAddGroup,
}: {
  group: QueryGroup
  depth: number
  onCombinatorChange?: (groupId: string, combinator: 'AND' | 'OR') => void
  onRemoveRule?: (ruleId: string) => void
  onAddCondition?: (groupId: string) => void
  onAddGroup?: (groupId: string) => void
}) {
  const content = (
    <>
      <div className="flex items-center gap-2 text-sm">
        <span className={depth === 0 ? 'font-medium text-gray-900' : 'font-medium text-gray-500'}>{depth === 0 ? 'Where' : 'Match'}</span>
        <div className="inline-flex rounded-md border border-gray-200 p-0.5">
          <button
            type="button"
            aria-pressed={group.combinator === 'AND'}
            onClick={() => onCombinatorChange?.(group.id, 'AND')}
            className={`rounded px-2 py-0.5 text-xs font-medium ${group.combinator === 'AND' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
          >
            AND
          </button>
          <button
            type="button"
            aria-pressed={group.combinator === 'OR'}
            onClick={() => onCombinatorChange?.(group.id, 'OR')}
            className={`rounded px-2 py-0.5 text-xs font-medium ${group.combinator === 'OR' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
          >
            OR
          </button>
        </div>
      </div>

      <div className={`mt-2 flex flex-col gap-2 border-l-2 border-gray-100 ${depth === 0 ? 'pl-4' : 'pl-3'}`}>
        {group.rules.map((rule) =>
          rule.type === 'condition' ? (
            <div key={rule.id} className="flex flex-wrap items-center gap-2">
              <select className="rounded-md border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none">
                <option>{rule.field}</option>
              </select>
              <select className="rounded-md border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none">
                <option>{rule.operator}</option>
              </select>
              <input
                type="text"
                defaultValue={rule.value}
                className="rounded-md border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
              />
              <button type="button" aria-label="Remove condition" onClick={() => onRemoveRule?.(rule.id)} className="ml-auto text-gray-400 hover:text-gray-600">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <div key={rule.id} className="rounded-lg border border-dashed border-gray-200 p-3">
              <QueryGroupView group={rule} depth={depth + 1} onCombinatorChange={onCombinatorChange} onRemoveRule={onRemoveRule} onAddCondition={onAddCondition} onAddGroup={onAddGroup} />
            </div>
          ),
        )}
      </div>
    </>
  )

  if (depth > 0) return content

  return (
    <>
      {content}
      <div className="mt-3 flex items-center gap-3">
        <button type="button" onClick={() => onAddCondition?.(group.id)} className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add condition
        </button>
        <button type="button" onClick={() => onAddGroup?.(group.id)} className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add group
        </button>
      </div>
    </>
  )
}

/**
 * Copy-and-own Tailwind component. Nested AND/OR condition builder taking a
 * real recursive group/rule contract — pass your own query state and handlers.
 */
export function QueryBuilder({ className, root, onCombinatorChange, onRemoveRule, onAddCondition, onAddGroup, ...props }: QueryBuilderVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-4 ${className ?? ''}`} {...props}>
      <QueryGroupView group={root} depth={0} onCombinatorChange={onCombinatorChange} onRemoveRule={onRemoveRule} onAddCondition={onAddCondition} onAddGroup={onAddGroup} />
    </div>
  )
}
