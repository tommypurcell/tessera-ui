import type { HTMLAttributes, ReactNode } from 'react'

export type ContextMenuItem = {
  id: string
  label: string
  icon?: ReactNode
  shortcut?: string
  destructive?: boolean
}

export type ContextMenuVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  items: (ContextMenuItem | 'separator')[]
  x?: number
  y?: number
  onSelect?: (item: ContextMenuItem) => void
}

/**
 * Copy-and-own Tailwind component. Right-click menu taking a real items
 * contract — position it with your own x/y click-tracking state.
 */
export function ContextMenuDark({ className, items, x = 0, y = 0, onSelect, ...props }: ContextMenuVariant1DarkProps) {
  return (
    <div
      role="menu"
      aria-label="Context menu"
      style={{ left: x, top: y }}
      className={`absolute w-56 rounded-lg border border-gray-800 bg-gray-900 p-1.5 text-left shadow-lg shadow-black/40 ${className ?? ''}`}
      {...props}
    >
      {items.map((item, index) =>
        item === 'separator' ? (
          <div key={`separator-${index}`} role="separator" className="my-1.5 h-px bg-gray-800" />
        ) : (
          <button
            key={item.id}
            type="button"
            role="menuitem"
            onClick={() => onSelect?.(item)}
            className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-sm ${
              item.destructive ? 'text-red-400 hover:bg-red-950/60' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            {item.icon ? (
              <span aria-hidden="true" className={`size-4 ${item.destructive ? 'text-red-400' : 'text-gray-400'}`}>
                {item.icon}
              </span>
            ) : null}
            <span className="grow">{item.label}</span>
            {item.shortcut ? (
              <kbd className={`text-xs ${item.destructive ? 'text-red-400/60' : 'text-gray-500'}`}>{item.shortcut}</kbd>
            ) : null}
          </button>
        ),
      )}
    </div>
  )
}
