import { useState } from 'react'

export type PropertyListingCardVariant1Props = {
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
 * Copy-and-own Tailwind component. Real-estate listing card with a
 * price, bed/bath/sqft spec row, and a real toggleable save/heart state
 * — the heart's filled/outline appearance always matches the actual
 * `saved` state.
 */
export function PropertyListingCard({ address, price, beds, baths, sqft, saved = false, onToggleSave }: PropertyListingCardVariant1Props) {
  const [internalSaved, setInternalSaved] = useState(saved)

  function toggleSave() {
    const next = !internalSaved
    setInternalSaved(next)
    onToggleSave?.(next)
  }

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-50">
        <button
          type="button"
          onClick={toggleSave}
          aria-pressed={internalSaved}
          aria-label={internalSaved ? `Remove ${address} from saved` : `Save ${address}`}
          className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill={internalSaved ? 'currentColor' : 'none'}
            className={`size-4 ${internalSaved ? 'text-red-500' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <p className="text-lg font-semibold text-gray-900">{currency(price)}</p>
        <p className="truncate text-sm text-gray-600">{address}</p>

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
