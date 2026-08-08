import type { ReactNode } from 'react'

export type CommandMenuResultRowVariant1Props = {
  icon: ReactNode
  avatarSrc?: string
  title: string
  meta?: string
  keyHint?: string
  badge?: string
  selected?: boolean
  disabled?: boolean
  onSelect?: () => void
}

/**
 * Copy-and-own Tailwind component. Reusable result-row primitive for command palettes,
 * comboboxes, and search results: icon or avatar, title + meta text, and a trailing
 * kbd hint or category badge. Distinct from the generic Item row — this variant is
 * built for role="option" inside a role="listbox", not a standalone settings row.
 */
export function CommandMenuResultRow({
  icon,
  avatarSrc,
  title,
  meta,
  keyHint,
  badge,
  selected = false,
  disabled = false,
  onSelect,
}: CommandMenuResultRowVariant1Props) {
  return (
    <li role="option" aria-selected={selected} aria-disabled={disabled || undefined}>
      <button
        type="button"
        disabled={disabled}
        onClick={onSelect}
        className={`flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-left ${
          disabled ? 'cursor-not-allowed opacity-50' : selected ? 'bg-indigo-50' : 'hover:bg-gray-50'
        }`}
      >
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${
            avatarSrc
              ? 'overflow-hidden rounded-full bg-gray-100'
              : selected
                ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-gray-200'
                : 'bg-gray-100 text-gray-500'
          }`}
        >
          {avatarSrc ? <img src={avatarSrc} alt="" className="h-7 w-7 rounded-full object-cover" /> : icon}
        </span>

        <span className="min-w-0 flex-1">
          <span className={`block truncate text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-900'}`}>{title}</span>
          {meta ? <span className={`block truncate text-xs ${disabled ? 'text-gray-400' : 'text-gray-500'}`}>{meta}</span> : null}
        </span>

        {keyHint ? (
          <kbd className="shrink-0 rounded border border-gray-300 bg-white px-1.5 py-0.5 font-mono text-[11px] text-gray-500 shadow-[0_1px_0_#d1d5db]">
            {keyHint}
          </kbd>
        ) : badge ? (
          <span className="shrink-0 rounded bg-gray-100 px-1.5 py-0.5 text-[11px] font-medium text-gray-500">{badge}</span>
        ) : null}
      </button>
    </li>
  )
}
