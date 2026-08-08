import { useId, useState, type ReactNode } from 'react'

export type CollapsibleVariant1DarkProps = {
  trigger: ReactNode
  children: ReactNode
  /** Whether the panel is expanded on first render. */
  defaultOpen?: boolean
  className?: string
}

/**
 * Copy-and-own Tailwind component. A single expand/collapse section adapted for dark
 * surfaces, with a real aria-expanded/aria-controls pairing and a rotating chevron.
 */
export function CollapsibleVariant1Dark({
  trigger,
  children,
  defaultOpen = true,
  className,
}: CollapsibleVariant1DarkProps) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div className={`rounded-lg border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold text-white">{trigger}</span>

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`size-4 shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open ? (
        <div id={panelId} className="border-t border-gray-800 px-4 py-3">
          {children}
        </div>
      ) : null}
    </div>
  )
}
