import { useState } from 'react'

export type FileTreeNode =
  | { type: 'file'; name: string; href: string; current?: boolean }
  | { type: 'folder'; name: string; children: FileTreeNode[]; defaultOpen?: boolean }

export type FileTreeVariant1Props = {
  nodes: FileTreeNode[]
  className?: string
}

function FolderIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M3.75 3A1.75 1.75 0 002 4.75v3.26a3.235 3.235 0 011.75-.51h12.5c.644 0 1.245.188 1.75.51V6.75A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75z" />
      <path d="M3.75 9A1.75 1.75 0 002 10.75v4.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-4.5A1.75 1.75 0 0016.25 9H3.75z" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h5.586A2 2 0 0113 2.586L16.414 6A2 2 0 0117 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform ${open ? '' : '-rotate-90'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function TreeNode({ node }: { node: FileTreeNode }) {
  const [open, setOpen] = useState(node.type === 'folder' ? (node.defaultOpen ?? false) : false)

  if (node.type === 'file') {
    return (
      <li role="treeitem">
        <a
          href={node.href}
          aria-current={node.current ? 'page' : undefined}
          className={`flex items-center gap-1.5 rounded px-1.5 py-1 ${
            node.current ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <FileIcon />
          {node.name}
        </a>
      </li>
    )
  }

  return (
    <li role="treeitem" aria-expanded={open}>
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center gap-1.5 rounded px-1.5 py-1 text-left hover:bg-gray-50">
        <Chevron open={open} />
        <FolderIcon />
        <span className="font-medium text-gray-800">{node.name}</span>
      </button>
      {open ? (
        <ul role="group" className="ml-3 flex flex-col border-l border-gray-200 pl-2">
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

/**
 * Copy-and-own Tailwind component. Collapsible nested directory/file explorer with
 * indent guides. Folders expand/collapse independently; files render as real links
 * and support an aria-current="page" state for the active file.
 */
export function FileTree({ nodes, className }: FileTreeVariant1Props) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-2 ${className ?? ''}`}>
      <ul role="tree" aria-label="Project files" className="flex flex-col text-sm">
        {nodes.map((node) => (
          <TreeNode key={node.name} node={node} />
        ))}
      </ul>
    </div>
  )
}
