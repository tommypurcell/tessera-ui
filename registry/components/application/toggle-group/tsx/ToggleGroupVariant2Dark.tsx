import type { HTMLAttributes, ReactNode } from 'react'

export type ToggleGroupMultiItem = {
  /** Stable identifier included in the onChange array when active. */
  value: string
  /** Accessible label announced to assistive tech. */
  label: string
  /** Visible content (glyph or short text). */
  content: ReactNode
}

export type ToggleGroupVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  /** Group label announced to assistive tech (aria-label on the container). */
  label: string
  items: ToggleGroupMultiItem[]
  /** Currently active values (multi-select). */
  values: string[]
  onChange?: (values: string[]) => void
}

/**
 * Copy-and-own Tailwind component. Multi-select toggle group adapted for dark
 * surfaces. Each item toggles independently and onChange returns the full
 * array of active values.
 */
export function ToggleGroup({
  className,
  label,
  items,
  values,
  onChange,
  ...props
}: ToggleGroupVariant2DarkProps) {
  const toggle = (value: string) =>
    onChange?.(values.includes(value) ? values.filter((v) => v !== value) : [...values, value])

  return (
    <div role="group" aria-label={label} className={`inline-flex ${className ?? ''}`} {...props}>
      {items.map((item, index) => {
        const pressed = values.includes(item.value)
        const first = index === 0
        const last = index === items.length - 1
        return (
          <button
            key={item.value}
            type="button"
            aria-pressed={pressed}
            aria-label={item.label}
            onClick={() => toggle(item.value)}
            className={`inline-flex size-9 items-center justify-center border border-gray-700 transition-colors focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              first ? 'rounded-s-md' : '-ms-px'
            } ${last ? 'rounded-e-md' : ''} ${
              pressed ? 'bg-blue-500/20 text-blue-300' : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
          >
            {item.content}
          </button>
        )
      })}
    </div>
  )
}
