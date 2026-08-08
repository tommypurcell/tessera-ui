import { useState, type ReactNode } from 'react'

export type DietaryOption = {
  id: string
  label: string
  icon: ReactNode
  /** Tailwind color used for the selected state, e.g. "emerald" or "amber". Defaults to emerald. */
  selectedColor?: 'emerald' | 'amber'
}

const SELECTED_CLASS: Record<'emerald' | 'amber', string> = {
  emerald: 'inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500',
  amber: 'inline-flex items-center gap-1.5 rounded-full bg-amber-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-500',
}

export type DietaryFilterChipsVariant1DarkProps = {
  options: DietaryOption[]
  defaultSelected?: string[]
  onChange?: (selectedIds: string[]) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Multi-select dietary-preference chips adapted for
 * dark surfaces — each chip shows an icon and label and toggles independently.
 */
export function DietaryFilterChipsVariant1Dark({
  options,
  defaultSelected = [],
  onChange,
  className,
}: DietaryFilterChipsVariant1DarkProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set(defaultSelected))

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      onChange?.(Array.from(next))
      return next
    })
  }

  return (
    <div
      role="group"
      aria-label="Filter by dietary preference"
      className={`flex flex-wrap gap-2 ${className ?? ''}`}
    >
      {options.map((option) => {
        const isSelected = selected.has(option.id)
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => toggle(option.id)}
            className={
              isSelected
                ? SELECTED_CLASS[option.selectedColor ?? 'emerald']
                : 'inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-200 hover:bg-gray-800'
            }
          >
            {option.icon}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
