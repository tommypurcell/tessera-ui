import type { HTMLAttributes } from 'react'

export type TreeViewNode = {
  id: string
  label: string
  count?: number
  checked?: boolean
  indeterminate?: boolean
  selected?: boolean
  expanded?: boolean
  children?: TreeViewNode[]
}

export type TreeViewVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  label: string
  nodes: TreeViewNode[]
  onToggleExpand?: (node: TreeViewNode) => void
  onToggleCheck?: (node: TreeViewNode) => void
  onSelect?: (node: TreeViewNode) => void
}

function TreeViewRowDark({
  node,
  depth,
  onToggleExpand,
  onToggleCheck,
  onSelect,
}: {
  node: TreeViewNode
  depth: number
  onToggleExpand?: (node: TreeViewNode) => void
  onToggleCheck?: (node: TreeViewNode) => void
  onSelect?: (node: TreeViewNode) => void
}) {
  const hasChildren = Boolean(node.children && node.children.length > 0)

  return (
    <div role="treeitem" aria-expanded={hasChildren ? node.expanded : undefined} aria-selected={node.selected || undefined}>
      <div
        onClick={() => onSelect?.(node)}
        className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${depth > 0 && !hasChildren ? 'pl-6' : ''} ${
          node.selected ? 'bg-gray-800' : 'hover:bg-gray-800'
        }`}
      >
        {hasChildren ? (
          <button
            type="button"
            aria-label={node.expanded ? `Collapse ${node.label}` : `Expand ${node.label}`}
            onClick={(event) => {
              event.stopPropagation()
              onToggleExpand?.(node)
            }}
            className="flex size-4 shrink-0 items-center justify-center text-gray-500"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d={node.expanded ? 'm19.5 8.25-7.5 7.5-7.5-7.5' : 'm8.25 4.5 7.5 7.5-7.5 7.5'} />
            </svg>
          </button>
        ) : null}
        <input
          type="checkbox"
          checked={node.checked ?? false}
          ref={(element) => {
            if (element) element.indeterminate = Boolean(node.indeterminate)
          }}
          onChange={() => onToggleCheck?.(node)}
          onClick={(event) => event.stopPropagation()}
          aria-label={`Select ${node.label}${hasChildren ? ' and all children' : ''}`}
          className="size-3.5 shrink-0 rounded border-gray-600 bg-gray-800 text-white focus:ring-gray-500"
        />
        <span className={`grow ${node.selected || hasChildren ? 'font-medium text-white' : 'text-gray-400'}`}>{node.label}</span>
        {node.count !== undefined ? <span className="text-xs text-gray-500">{node.count}</span> : null}
      </div>

      {hasChildren && node.expanded ? (
        <div role="group" className="ml-4 border-l border-gray-800 pl-2">
          {node.children!.map((child) => (
            <TreeViewRowDark key={child.id} node={child} depth={depth + 1} onToggleExpand={onToggleExpand} onToggleCheck={onToggleCheck} onSelect={onSelect} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

/**
 * Copy-and-own Tailwind component. Hierarchical checkbox tree taking a real
 * recursive nodes contract — pass your own data instead of hand-editing markup.
 */
export function TreeViewDark({ className, label, nodes, onToggleExpand, onToggleCheck, onSelect, ...props }: TreeViewVariant1DarkProps) {
  return (
    <div role="tree" aria-label={label} className={`rounded-xl border border-gray-800 bg-gray-900 p-2 text-sm ${className ?? ''}`} {...props}>
      {nodes.map((node) => (
        <TreeViewRowDark key={node.id} node={node} depth={0} onToggleExpand={onToggleExpand} onToggleCheck={onToggleCheck} onSelect={onSelect} />
      ))}
    </div>
  )
}
