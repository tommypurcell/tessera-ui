import { useEffect, useRef, useState } from 'react'

export type Environment = {
  id: string
  label: string
  color: 'gray' | 'amber' | 'emerald' | 'rose'
}

export type EnvironmentSwitcherVariant1DarkProps = {
  environments: Environment[]
  activeId: string
  onSelect?: (id: string) => void
  className?: string
}

const dotColor: Record<Environment['color'], string> = {
  gray: 'bg-gray-500',
  amber: 'bg-amber-500',
  emerald: 'bg-emerald-500',
  rose: 'bg-rose-500',
}

const activeRowBg: Record<Environment['color'], string> = {
  gray: 'bg-gray-800',
  amber: 'bg-amber-500/10',
  emerald: 'bg-emerald-500/10',
  rose: 'bg-rose-500/10',
}

/**
 * Copy-and-own Tailwind component (dark surface). Trigger button showing the
 * current environment with a colored status dot, opening a dropdown listing
 * every environment with its own dot and a checkmark on the active one.
 */
export function EnvironmentSwitcher({ environments, activeId, onSelect, className }: EnvironmentSwitcherVariant1DarkProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const active = environments.find((e) => e.id === activeId) ?? environments[0]

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={`relative inline-flex ${className ?? ''}`}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
      >
        <span className={`h-2 w-2 rounded-full ${dotColor[active.color]}`} aria-hidden="true" />
        {active.label}
        <svg className="h-3.5 w-3.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <div className="absolute left-0 top-full z-10 mt-2 w-52 rounded-lg border border-gray-800 bg-gray-900 py-1 shadow-lg">
          {environments.map((env) => {
            const isActive = env.id === activeId
            return (
              <button
                key={env.id}
                type="button"
                onClick={() => {
                  onSelect?.(env.id)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm ${
                  isActive ? `${activeRowBg[env.color]} font-medium text-gray-100` : 'text-gray-200 hover:bg-gray-800'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${dotColor[env.color]}`} aria-hidden="true" />
                  {env.label}
                </span>
                {isActive ? (
                  <svg className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
