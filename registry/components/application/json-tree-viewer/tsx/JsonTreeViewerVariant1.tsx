import type { HTMLAttributes } from 'react'

export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

export type JsonTreeViewerVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  fileName: string
  data: Record<string, JsonValue>
  expandedPaths: Set<string>
  onToggleExpand?: (path: string) => void
  onExpandAll?: () => void
  onCollapseAll?: () => void
}

function typeColorClass(value: JsonValue): string {
  if (value === null) return 'italic text-gray-400'
  if (typeof value === 'string') return 'text-green-700'
  if (typeof value === 'number') return 'text-orange-600'
  if (typeof value === 'boolean') return 'text-blue-600'
  return 'text-gray-400'
}

function formatPrimitive(value: JsonValue): string {
  if (value === null) return 'null'
  if (typeof value === 'string') return `"${value}"`
  return String(value)
}

function JsonNode({
  keyName,
  value,
  path,
  expandedPaths,
  onToggleExpand,
}: {
  keyName: string
  value: JsonValue
  path: string
  expandedPaths: Set<string>
  onToggleExpand?: (path: string) => void
}) {
  const isObject = value !== null && typeof value === 'object' && !Array.isArray(value)
  const isArray = Array.isArray(value)
  const isExpandable = isObject || isArray
  const expanded = expandedPaths.has(path)

  if (!isExpandable) {
    return (
      <div className="flex items-start gap-1 pl-[18px]">
        <span className="text-gray-500">"{keyName}"</span>
        <span className="text-gray-400">:</span>
        <span className={typeColorClass(value)}>{formatPrimitive(value)}</span>
        <span className="text-gray-300">,</span>
      </div>
    )
  }

  const entries = isArray ? (value as JsonValue[]).map((item, index) => [String(index), item] as const) : Object.entries(value as Record<string, JsonValue>)
  const count = entries.length
  const openBracket = isArray ? '[' : '{'
  const closeBracket = isArray ? ']' : '}'

  return (
    <div>
      <div className="flex items-start gap-1">
        <button
          type="button"
          aria-label={expanded ? `Collapse ${keyName}` : `Expand ${keyName}`}
          onClick={() => onToggleExpand?.(path)}
          className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center text-gray-400"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d={expanded ? 'm19.5 8.25-7.5 7.5-7.5-7.5' : 'm8.25 4.5 7.5 7.5-7.5 7.5'} />
          </svg>
        </button>
        <span className="text-gray-500">"{keyName}"</span>
        <span className="text-gray-400">:</span>
        <span className="text-gray-400">{openBracket}</span>
        {!expanded ? (
          <>
            <span className="text-gray-300">
              {count} {count === 1 ? 'item' : 'items'}
            </span>
            <span className="text-gray-400">{closeBracket}</span>
          </>
        ) : null}
      </div>

      {expanded ? (
        <>
          <div className="ml-4 border-l border-gray-100 pl-3">
            {entries.map(([childKey, childValue]) => (
              <JsonNode key={childKey} keyName={childKey} value={childValue} path={`${path}.${childKey}`} expandedPaths={expandedPaths} onToggleExpand={onToggleExpand} />
            ))}
          </div>
          <div className="flex items-start gap-1">
            <span className="text-gray-400">{closeBracket}</span>
          </div>
        </>
      ) : null}
    </div>
  )
}

/**
 * Copy-and-own Tailwind component. Collapsible JSON explorer taking a real
 * data/expandedPaths contract — manage expansion state in your own store.
 */
export function JsonTreeViewer({ className, fileName, data, expandedPaths, onToggleExpand, onExpandAll, onCollapseAll, ...props }: JsonTreeViewerVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white ${className ?? ''}`} {...props}>
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
        <span className="text-xs font-medium text-gray-500">{fileName}</span>
        <div className="flex items-center gap-3">
          <button type="button" onClick={onExpandAll} className="text-xs font-medium text-gray-500 hover:text-gray-700">
            Expand all
          </button>
          <button type="button" onClick={onCollapseAll} className="text-xs font-medium text-gray-500 hover:text-gray-700">
            Collapse all
          </button>
        </div>
      </div>

      <div className="overflow-x-auto p-3 font-mono text-[13px] leading-relaxed">
        {Object.entries(data).map(([key, value]) => (
          <JsonNode key={key} keyName={key} value={value} path={key} expandedPaths={expandedPaths} onToggleExpand={onToggleExpand} />
        ))}
      </div>
    </div>
  )
}
