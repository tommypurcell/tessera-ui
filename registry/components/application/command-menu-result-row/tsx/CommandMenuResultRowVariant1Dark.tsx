import type { ReactNode } from 'react'

export type CommandMenuResultRowVariant1DarkProps = {
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
 * Copy-and-own Tailwind component (dark surface). Reusable result-row primitive for
 * command palettes, comboboxes, and search results: icon or avatar, title + meta
 * text, and a trailing kbd hint or category badge.
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
}: CommandMenuResultRowVariant1DarkProps) {
  return (
    <li role="option" aria-selected={selected} aria-disabled={disabled || undefined}>
      <button
        type="button"
        disabled={disabled}
        onClick={onSelect}
        className={`flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-left ${
          disabled ? 'cursor-not-allowed opacity-50' : selected ? 'bg-indigo-500/10' : 'hover:bg-gray-800'
        }`}
      >
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${
            avatarSrc
              ? 'overflow-hidden rounded-full bg-gray-800'
              : selected
                ? 'bg-gray-800 text-indigo-300 shadow-sm ring-1 ring-gray-700'
                : 'bg-gray-800 text-gray-400'
          }`}
        >
          {avatarSrc ? <img src={avatarSrc} alt="" className="h-7 w-7 rounded-full object-cover" /> : icon}
        </span>

        <span className="min-w-0 flex-1">
          <span className={`block truncate text-sm font-medium ${disabled ? 'text-gray-500' : 'text-gray-100'}`}>{title}</span>
          {meta ? <span className={`block truncate text-xs ${disabled ? 'text-gray-500' : 'text-gray-400'}`}>{meta}</span> : null}
        </span>

        {keyHint ? (
          <kbd className="shrink-0 rounded border border-gray-700 bg-gray-800 px-1.5 py-0.5 font-mono text-[11px] text-gray-300 shadow-[0_1px_0_#000]">
            {keyHint}
          </kbd>
        ) : badge ? (
          <span className="shrink-0 rounded bg-gray-800 px-1.5 py-0.5 text-[11px] font-medium text-gray-400">{badge}</span>
        ) : null}
      </button>
    </li>
  )
}
