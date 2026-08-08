export type TypingIndicatorVariant1Props = {
  /** Names of everyone currently typing; drives both the label and pluralization. */
  names: string[]
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

function label(names: string[]) {
  if (names.length === 1) return `${names[0]} is typing…`
  if (names.length === 2) return `${names[0]} and ${names[1]} are typing…`
  return `${names[0]} and ${names.length - 1} others are typing…`
}

/**
 * Copy-and-own Tailwind component. Animated "X is typing…" indicator for
 * chat threads — the label pluralizes from a real `names` array, and the
 * bouncing dots use staggered CSS animation-delay, not a static icon.
 */
export function TypingIndicator({ names }: TypingIndicatorVariant1Props) {
  if (names.length === 0) return null

  return (
    <div role="status" aria-live="polite" className="flex items-center gap-2">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-medium text-blue-700">
        {initials(names[0])}
      </span>

      <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-3.5 py-2.5">
        <span className="flex items-center gap-1">
          <span className="size-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:0ms]" />
          <span className="size-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
          <span className="size-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
        </span>
      </div>

      <span className="sr-only">{label(names)}</span>
    </div>
  )
}
