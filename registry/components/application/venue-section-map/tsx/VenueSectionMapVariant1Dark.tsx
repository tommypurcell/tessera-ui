export type VenueSectionTier = 'platinum' | 'gold' | 'silver'

export type VenueSection = {
  id: string
  label: string
  tier: VenueSectionTier
  price: number
  soldOut?: boolean
}

export type VenueSectionMapVariant1DarkProps = {
  sections: VenueSection[]
  selectedId?: string
  onSelect?: (id: string) => void
  className?: string
}

const tierStyles: Record<VenueSectionTier, { fill: string; hover: string; text: string; legendDot: string; legendLabel: string }> = {
  platinum: {
    fill: 'bg-violet-600',
    hover: 'hover:bg-violet-500',
    text: 'text-violet-100',
    legendDot: 'bg-violet-500',
    legendLabel: 'Platinum',
  },
  gold: {
    fill: 'bg-amber-600',
    hover: 'hover:bg-amber-500',
    text: 'text-amber-50',
    legendDot: 'bg-amber-600',
    legendLabel: 'Gold',
  },
  silver: {
    fill: 'bg-sky-600',
    hover: 'hover:bg-sky-500',
    text: 'text-sky-50',
    legendDot: 'bg-sky-600',
    legendLabel: 'Silver',
  },
}

const formatUsd = (n: number) => `$${n}`

/**
 * Copy-and-own Tailwind component (dark surface). Zoomed-out venue map:
 * clickable blocks represent whole seating sections, colored by price tier,
 * with a legend mapping tier to price.
 */
export function VenueSectionMap({ sections, selectedId, onSelect, className }: VenueSectionMapVariant1DarkProps) {
  const tiersUsed = Array.from(new Set(sections.map((s) => s.tier)))

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`}>
      <div className="mb-4 rounded-md bg-gray-100 py-1.5 text-center text-xs font-medium uppercase tracking-wide text-gray-900">
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
                className="flex h-16 cursor-not-allowed flex-col items-center justify-center rounded-md bg-gray-800 text-gray-600"
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
                isSelected ? 'ring-2 ring-violet-400 ring-offset-2 ring-offset-gray-900' : styles.hover
              }`}
            >
              <span className="text-xs font-semibold">{section.label}</span>
              <span className={`text-[11px] ${styles.text}`}>{formatUsd(section.price)}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">
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
            <span className="size-2.5 rounded-sm bg-gray-800"></span>
            Sold out
          </span>
        ) : null}
      </div>
    </div>
  )
}
