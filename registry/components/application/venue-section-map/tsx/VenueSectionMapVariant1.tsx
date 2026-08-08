export type VenueSectionTier = 'platinum' | 'gold' | 'silver'

export type VenueSection = {
  id: string
  label: string
  tier: VenueSectionTier
  price: number
  soldOut?: boolean
}

export type VenueSectionMapVariant1Props = {
  sections: VenueSection[]
  selectedId?: string
  onSelect?: (id: string) => void
  className?: string
}

const tierStyles: Record<VenueSectionTier, { fill: string; hover: string; text: string; legendDot: string; legendLabel: string }> = {
  platinum: {
    fill: 'bg-violet-600',
    hover: 'hover:bg-violet-600',
    text: 'text-violet-100',
    legendDot: 'bg-violet-500',
    legendLabel: 'Platinum',
  },
  gold: {
    fill: 'bg-amber-500',
    hover: 'hover:bg-amber-600',
    text: 'text-amber-50',
    legendDot: 'bg-amber-500',
    legendLabel: 'Gold',
  },
  silver: {
    fill: 'bg-sky-500',
    hover: 'hover:bg-sky-600',
    text: 'text-sky-50',
    legendDot: 'bg-sky-500',
    legendLabel: 'Silver',
  },
}

const formatUsd = (n: number) => `$${n}`

/**
 * Copy-and-own Tailwind component. Zoomed-out venue map: clickable blocks
 * represent whole seating sections (not individual seats), colored by price
 * tier, with a legend mapping tier to price. Distinct from Seat Map
 * Selector, which lets a user pick individual numbered seats within a single
 * small section rather than choosing among a venue's sections.
 */
export function VenueSectionMap({ sections, selectedId, onSelect, className }: VenueSectionMapVariant1Props) {
  const tiersUsed = Array.from(new Set(sections.map((s) => s.tier)))

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`}>
      <div className="mb-4 rounded-md bg-gray-900 py-1.5 text-center text-xs font-medium uppercase tracking-wide text-white">
        Stage
      </div>

      <div className="grid grid-cols-3 gap-2">
        {sections.map((section) => {
          const isSelected = section.id === selectedId
          const styles = tierStyles[section.tier]

          if (section.soldOut) {
            return (
              <button
                key={section.id}
                type="button"
                disabled
                aria-label={`Section ${section.label}, price tier ${styles.legendLabel}, $${section.price}, sold out`}
                className="flex h-16 cursor-not-allowed flex-col items-center justify-center rounded-md bg-gray-100 text-gray-400"
              >
                <span className="text-xs font-semibold">{section.label}</span>
                <span className="text-[11px]">Sold out</span>
              </button>
            )
          }

          return (
            <button
              key={section.id}
              type="button"
              aria-pressed={isSelected}
              aria-label={`Section ${section.label}, price tier ${styles.legendLabel}, $${section.price}${isSelected ? ', selected' : ''}`}
              onClick={() => onSelect?.(section.id)}
              className={`flex h-16 flex-col items-center justify-center rounded-md text-white ${styles.fill} ${
                isSelected ? 'ring-2 ring-violet-700 ring-offset-2' : styles.hover
              }`}
            >
              <span className="text-xs font-semibold">{section.label}</span>
              <span className={`text-[11px] ${styles.text}`}>{formatUsd(section.price)}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-4 border-t border-gray-100 pt-3 text-xs text-gray-500">
        {tiersUsed.map((tier) => {
          const priceForTier = sections.find((s) => s.tier === tier)?.price
          return (
            <span key={tier} className="flex items-center gap-1.5">
              <span className={`size-2.5 rounded-sm ${tierStyles[tier].legendDot}`}></span>
              {tierStyles[tier].legendLabel} &middot; {formatUsd(priceForTier ?? 0)}
            </span>
          )
        })}
        {sections.some((s) => s.soldOut) ? (
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm bg-gray-100"></span>
            Sold out
          </span>
        ) : null}
      </div>
    </div>
  )
}
