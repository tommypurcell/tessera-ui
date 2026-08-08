import type { ReactNode } from 'react'

export type ShortcutRow = {
  label: string
  keys: string[]
}

export type KbdVariant1Props = {
  title?: string
  shortcuts: ShortcutRow[]
  trigger?: { label: string; keys: string[] }
  className?: string
}

function Key({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex min-w-5 items-center justify-center rounded border border-gray-300 bg-gray-50 px-1.5 py-0.5 font-mono text-[11px] font-medium text-gray-600 shadow-[0_1px_0_#d1d5db]">
      {children}
    </kbd>
  )
}

/**
 * Copy-and-own Tailwind component. A trigger button with an inline shortcut hint,
 * plus a list panel pairing action labels with their keyboard shortcut. Uses the
 * native <kbd> element so shortcuts are announced and styled semantically.
 */
export function Kbd({ title = 'Keyboard shortcuts', shortcuts, trigger, className }: KbdVariant1Props) {
  return (
    <div className={`flex flex-col gap-8 ${className ?? ''}`}>
      {trigger ? (
        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          {trigger.label}
          <span className="flex items-center gap-0.5">
            {trigger.keys.map((key, i) => (
              <Key key={i}>{key}</Key>
            ))}
          </span>
        </button>
      ) : null}

      <div className="rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 px-4 py-3">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {shortcuts.map((row) => (
            <li key={row.label} className="flex items-center justify-between px-4 py-2.5">
              <span className="text-sm text-gray-700">{row.label}</span>
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
