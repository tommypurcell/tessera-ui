import type { ReactNode } from 'react'

export type ShortcutRow = {
  label: string
  keys: string[]
}

export type KbdVariant1DarkProps = {
  title?: string
  shortcuts: ShortcutRow[]
  trigger?: { label: string; keys: string[] }
  className?: string
}

function Key({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex min-w-5 items-center justify-center rounded border border-gray-700 bg-gray-800 px-1.5 py-0.5 font-mono text-[11px] font-medium text-gray-300 shadow-[0_1px_0_#000]">
      {children}
    </kbd>
  )
}

/**
 * Copy-and-own Tailwind component (dark surface). A trigger button with an inline
 * shortcut hint, plus a list panel pairing action labels with their keyboard shortcut.
 */
export function Kbd({ title = 'Keyboard shortcuts', shortcuts, trigger, className }: KbdVariant1DarkProps) {
  return (
    <div className={`flex flex-col gap-8 ${className ?? ''}`}>
      {trigger ? (
        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          {trigger.label}
          <span className="flex items-center gap-0.5">
            {trigger.keys.map((key, i) => (
              <Key key={i}>{key}</Key>
            ))}
          </span>
        </button>
      ) : null}

      <div className="rounded-lg border border-gray-800">
        <div className="border-b border-gray-800 px-4 py-3">
          <h3 className="text-sm font-semibold text-gray-100">{title}</h3>
        </div>
        <ul className="divide-y divide-gray-800">
          {shortcuts.map((row) => (
            <li key={row.label} className="flex items-center justify-between px-4 py-2.5">
              <span className="text-sm text-gray-300">{row.label}</span>
              <span className="flex items-center gap-0.5">
                {row.keys.map((key, i) => (
                  <Key key={i}>{key}</Key>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
