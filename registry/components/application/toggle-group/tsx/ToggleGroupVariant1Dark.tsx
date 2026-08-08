import type { HTMLAttributes, ReactNode } from 'react'

export type ToggleGroupItem = {
  /** Stable identifier returned by onChange. */
  value: string
  /** Accessible label; also rendered when the item has no icon. */
  label: string
  /** Optional leading/only glyph. Decorative — the label supplies the accessible name. */
  icon?: ReactNode
}

export type ToggleGroupVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  /** Group label announced to assistive tech (aria-label on the container). */
  label: string
  items: ToggleGroupItem[]
  /** Currently selected value (single-select). */
  value: string
  onChange?: (value: string) => void
}

/**
 * Copy-and-own Tailwind component. Single-select segmented control adapted for
 * dark surfaces. Contrast of the active button meets WCAG AA on gray-900.
 */
export function ToggleGroup({
  className,
  label,
  items,
  value,
  onChange,
  ...props
}: ToggleGroupVariant1DarkProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex rounded-md border border-gray-800 bg-gray-900 p-1 ${className ?? ''}`}
      {...props}
    >
      {items.map((item) => {
        const pressed = item.value === value
        return (
          <button
            key={item.value}
            type="button"
            aria-pressed={pressed}
            aria-label={item.icon ? item.label : undefined}
            onClick={() => onChange?.(item.value)}
            className={`inline-flex size-9 items-center justify-center rounded-sm transition-colors focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              pressed
                ? 'bg-gray-800 text-white shadow-sm ring-1 ring-gray-700'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {item.icon ?? item.label}
          </button>
        )
      })}
    </div>
  )
}
