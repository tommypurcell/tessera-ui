import type { HTMLAttributes } from 'react'

export type ToggleGroupPillItem = {
  /** Stable identifier returned by onChange. */
  value: string
  /** Visible and accessible label. */
  label: string
}

export type ToggleGroupVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  /** Group label announced to assistive tech (aria-label on the container). */
  label: string
  items: ToggleGroupPillItem[]
  /** Currently selected value (single-select). */
  value: string
  onChange?: (value: string) => void
}

/**
 * Copy-and-own Tailwind component. Pill-shaped single-select toggle group
 * adapted for dark surfaces.
 */
export function ToggleGroup({
  className,
  label,
  items,
  value,
  onChange,
  ...props
}: ToggleGroupVariant3DarkProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex gap-1 rounded-full border border-gray-800 bg-gray-900 p-1 text-sm font-medium ${className ?? ''}`}
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
              pressed ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
