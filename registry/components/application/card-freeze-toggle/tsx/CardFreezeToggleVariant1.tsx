import { useState } from 'react'

export type CardFreezeToggleVariant1Props = {
  cardholderName: string
  lastFour: string
  expiry: string
  initialFrozen?: boolean
  onFrozenChange?: (frozen: boolean) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Card freeze toggle — a bank-card visual that
 * grayscales and gains a "Frozen" overlay together with a real toggled switch,
 * both driven by the same frozen state rather than independent styling.
 */
export function CardFreezeToggleVariant1({
  cardholderName,
  lastFour,
  expiry,
  initialFrozen = false,
  onFrozenChange,
  className,
}: CardFreezeToggleVariant1Props) {
  const [frozen, setFrozen] = useState(initialFrozen)

  function toggleFrozen() {
    const next = !frozen
    setFrozen(next)
    onFrozenChange?.(next)
  }

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <div className={`relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 p-4 text-white ${frozen ? 'grayscale' : ''}`}>
        <p className="text-xs font-medium text-white/70">Tessera Card</p>
        <p className="mt-4 font-mono text-lg tracking-widest">&bull;&bull;&bull;&bull; {lastFour}</p>
        <p className="mt-3 text-xs text-white/70">
          {cardholderName} &middot; {expiry}
        </p>

        {frozen ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1.5a3.75 3.75 0 0 0-3.75 3.75v3h7.5v-3A3.75 3.75 0 0 0 12 1.5Zm-5.25 6.75v-3a5.25 5.25 0 1 1 10.5 0v3h.75a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V9.75a1.5 1.5 0 0 1 1.5-1.5h.75Z"
                />
              </svg>
              Frozen
            </span>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">Freeze card</p>
          <p className="text-xs text-gray-500">{frozen ? 'Card is frozen' : 'Card is active'}</p>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={frozen}
          onClick={toggleFrozen}
          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${frozen ? 'bg-red-500' : 'bg-gray-300'}`}
        >
          <span className={`absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-[inset-inline-start] ${frozen ? 'start-5' : ''}`} />
        </button>
      </div>
    </div>
  )
}
