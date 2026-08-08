export type SegmentedPageControlVariant1Props = {
  count: number
  activeIndex: number
  onChange?: (index: number) => void
  label?: string
}

/**
 * Copy-and-own Tailwind component. Dot-style page indicator for paged mobile
 * carousels, with the active dot elongated into a pill. Each dot is a real
 * button so it can also serve as a direct jump-to-slide control.
 */
export function SegmentedPageControl({ count, activeIndex, onChange, label = 'Slides' }: SegmentedPageControlVariant1Props) {
  return (
    <div role="tablist" aria-label={label} className="flex items-center gap-1.5">
      {Array.from({ length: count }, (_, index) => {
        const isActive = index === activeIndex
        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={isActive ? `Go to slide ${index + 1}, current slide` : `Go to slide ${index + 1}`}
            onClick={() => onChange?.(index)}
            className={`rounded-full transition-all ${isActive ? 'h-2 w-5 bg-white' : 'size-2 bg-white/40'}`}
          />
        )
      })}
    </div>
  )
}
