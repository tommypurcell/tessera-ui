import type { HTMLAttributes, ReactNode } from 'react'

export type CommandItem = {
  id: string
  label: string
  icon?: ReactNode
  shortcut?: string
  selected?: boolean
}

export type CommandGroup = {
  heading: string
  items: CommandItem[]
}

export type CommandVariant1DarkProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  placeholder?: string
  groups: CommandGroup[]
  onSelect?: (item: CommandItem) => void
}

/**
 * Copy-and-own Tailwind component. Command palette taking a real groups/items
 * contract — pass your own data instead of hand-editing the JSX text.
 */
export function CommandDark({ className, placeholder = 'Type a command or search…', groups, onSelect, ...props }: CommandVariant1DarkProps) {
  return (
    <div
      className={`mx-auto max-w-lg overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl ${className ?? ''}`}
      {...props}
    >
      <div className="flex items-center gap-3 border-b border-gray-800 px-4">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 shrink-0 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          aria-label="Command menu"
          className="w-full bg-transparent py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none"
        />
        <kbd className="hidden rounded border border-gray-700 bg-gray-800 px-1.5 py-0.5 text-[11px] font-medium text-gray-400 sm:inline-block">
          ESC
        </kbd>
      </div>

      <div role="listbox" aria-label="Results" className="max-h-80 overflow-y-auto p-2">
        {groups.map((group) => (
          <div key={group.heading}>
            <div className="px-2 pb-1.5 pt-2 text-xs font-medium text-gray-500">{group.heading}</div>
            {group.items.map((item) => (
              <div
                key={item.id}
                role="option"
                aria-selected={item.selected}
                tabIndex={0}
                onClick={() => onSelect?.(item)}
                className={`flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm ${
                  item.selected ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {item.icon ? (
                  <span aria-hidden="true" className="size-4 shrink-0 text-gray-400">
                    {item.icon}
                  </span>
                ) : null}
                <span className="grow">{item.label}</span>
                {item.shortcut ? (
                  <kbd className="rounded border border-gray-700 bg-gray-900 px-1.5 py-0.5 text-[11px] font-medium text-gray-400">
                    {item.shortcut}
                  </kbd>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-gray-800 bg-gray-950 px-4 py-2.5 text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-gray-700 bg-gray-900 px-1 py-0.5 text-[10px]">↑</kbd>
            <kbd className="rounded border border-gray-700 bg-gray-900 px-1 py-0.5 text-[10px]">↓</kbd>
            to navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-gray-700 bg-gray-900 px-1 py-0.5 text-[10px]">↵</kbd>
            to select
          </span>
        </div>
        <span className="font-medium">Tessera</span>
      </div>
    </div>
  )
}
