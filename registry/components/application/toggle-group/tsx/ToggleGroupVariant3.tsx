import type { HTMLAttributes } from 'react'

export type ToggleGroupPillItem = {
  /** Stable identifier returned by onChange. */
  value: string
  /** Visible and accessible label. */
  label: string
}

export type ToggleGroupVariant3Props = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  /** Group label announced to assistive tech (aria-label on the container). */
  label: string
  items: ToggleGroupPillItem[]
  /** Currently selected value (single-select). */
  value: string
  onChange?: (value: string) => void
}

/**
 * Copy-and-own Tailwind component. Pill-shaped single-select toggle group
 * (e.g. a Day/Week/Month view switcher) driven by a typed items array and a
 * controlled value.
 */
export function ToggleGroup({
  className,
  label,
  items,
  value,
  onChange,
  ...props
}: ToggleGroupVariant3Props) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex gap-1 rounded-full border border-gray-200 bg-gray-100 p-1 text-sm font-medium ${className ?? ''}`}
      {...props}
    >
      {items.map((item) => {
        const pressed = item.value === value
        return (
          <button
            key={item.value}
            type="button"
            aria-pressed={pressed}
            onClick={() => onChange?.(item.value)}
            className={`rounded-full px-4 py-1.5 transition-colors focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              pressed ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
