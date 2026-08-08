import { useState } from 'react'

export type PropertyListingCardVariant1DarkProps = {
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  saved?: boolean
  onToggleSave?: (saved: boolean) => void
}

const currency = (n: number) => `$${n.toLocaleString()}`

/**
 * Copy-and-own Tailwind component. Real-estate listing card adapted for
 * dark surfaces, with a real toggleable save/heart state.
 */
export function PropertyListingCardDark({ address, price, beds, baths, sqft, saved = false, onToggleSave }: PropertyListingCardVariant1DarkProps) {
  const [internalSaved, setInternalSaved] = useState(saved)

  function toggleSave() {
    const next = !internalSaved
    setInternalSaved(next)
    onToggleSave?.(next)
  }

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-950 to-gray-900">
        <button
          type="button"
          onClick={toggleSave}
          aria-pressed={internalSaved}
          aria-label={internalSaved ? `Remove ${address} from saved` : `Save ${address}`}
          className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full bg-gray-950/80 text-gray-300 shadow-sm hover:bg-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill={internalSaved ? 'currentColor' : 'none'}
            className={`size-4 ${internalSaved ? 'text-red-400' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <p className="text-lg font-semibold text-gray-100">{currency(price)}</p>
        <p className="truncate text-sm text-gray-400">{address}</p>

        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>{beds} bd</span>
          <span aria-hidden="true">·</span>
          <span>{baths} ba</span>
          <span aria-hidden="true">·</span>
          <span>{sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </div>
  )
}
