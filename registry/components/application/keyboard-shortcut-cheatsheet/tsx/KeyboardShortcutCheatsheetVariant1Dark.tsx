import { useEffect, type ReactNode } from 'react'

export type ShortcutEntry = {
  label: string
  keys: string[]
}

export type ShortcutGroup = {
  title: string
  shortcuts: ShortcutEntry[]
}

export type KeyboardShortcutCheatsheetVariant1DarkProps = {
  open: boolean
  onClose: () => void
  groups: ShortcutGroup[]
  className?: string
}

function Key({ children }: { children: ReactNode }) {
  return (
    <kbd className="rounded border border-gray-700 bg-gray-800 px-1.5 py-0.5 font-mono text-[11px] text-gray-300 shadow-[0_1px_0_#000]">
      {children}
    </kbd>
  )
}

/**
 * Copy-and-own Tailwind component (dark surface). Modal dialog listing every
 * keyboard shortcut grouped under a heading. Closes on Escape, backdrop click,
 * or the close button.
 */
export function KeyboardShortcutCheatsheet({ open, onClose, groups, className }: KeyboardShortcutCheatsheetVariant1DarkProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cheatsheet-title"
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-lg rounded-xl border border-gray-800 bg-gray-900 shadow-xl ${className ?? ''}`}
      >
        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
          <h2 id="cheatsheet-title" className="text-sm font-semibold text-gray-100">
            Keyboard shortcuts
          </h2>
          <button type="button" aria-label="Close" onClick={onClose} className="rounded-md p-1 text-gray-500 hover:bg-gray-800 hover:text-gray-300">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 px-5 py-5">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">{group.title}</h3>
              <ul className="flex flex-col gap-2">
                {group.shortcuts.map((s) => (
                  <li key={s.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{s.label}</span>
                    <span className="flex items-center gap-0.5">
                      {s.keys.map((key, i) => (
                        <Key key={i}>{key}</Key>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 px-5 py-3">
          <p className="text-xs text-gray-400">
            Press <Key>?</Key> anytime to open this list.
          </p>
        </div>
      </div>
    </div>
  )
}
