import type { HTMLAttributes, ReactNode } from 'react'

export type ContextMenuItem = {
  id: string
  label: string
  icon?: ReactNode
  shortcut?: string
  destructive?: boolean
}

export type ContextMenuVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  items: (ContextMenuItem | 'separator')[]
  x?: number
  y?: number
  onSelect?: (item: ContextMenuItem) => void
}

/**
 * Copy-and-own Tailwind component. Right-click menu taking a real items
 * contract — position it with your own x/y click-tracking state.
 */
export function ContextMenu({ className, items, x = 0, y = 0, onSelect, ...props }: ContextMenuVariant1Props) {
  return (
    <div
      role="menu"
      aria-label="Context menu"
      style={{ left: x, top: y }}
      className={`absolute w-56 rounded-lg border border-gray-200 bg-white p-1.5 text-left shadow-lg shadow-gray-900/10 ${className ?? ''}`}
      {...props}
    >
      {items.map((item, index) =>
        item === 'separator' ? (
          <div key={`separator-${index}`} role="separator" className="my-1.5 h-px bg-gray-200" />
        ) : (
          <button
            key={item.id}
            type="button"
            role="menuitem"
            onClick={() => onSelect?.(item)}
            className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-sm ${
              item.destructive ? 'text-red-600 hover:bg-red-50' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.icon ? (
              <span aria-hidden="true" className={`size-4 ${item.destructive ? 'text-red-500' : 'text-gray-500'}`}>
                {item.icon}
              </span>
            ) : null}
            <span className="grow">{item.label}</span>
            {item.shortcut ? (
              <kbd className={`text-xs ${item.destructive ? 'text-red-300' : 'text-gray-400'}`}>{item.shortcut}</kbd>
            ) : null}
          </button>
        ),
      )}
    </div>
  )
}
