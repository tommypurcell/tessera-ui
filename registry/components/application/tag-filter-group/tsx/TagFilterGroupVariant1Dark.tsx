import { useState } from 'react'

export type TagFilterOption = {
  id: string
  label: string
}

export type TagFilterGroupVariant1DarkProps = {
  options: TagFilterOption[]
  defaultSelected?: string[]
  onChange?: (selectedIds: string[]) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Multi-select tag filter pills adapted for dark
 * surfaces — each tag toggles independently, driven by real aria-pressed state.
 */
export function TagFilterGroupVariant1Dark({
  options,
  defaultSelected = [],
  onChange,
  className,
}: TagFilterGroupVariant1DarkProps) {
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
    <div role="group" aria-label="Filter by tag" className={`flex flex-wrap gap-2 ${className ?? ''}`}>
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
                ? 'rounded-full bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-500'
                : 'rounded-full border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-200 hover:bg-gray-800'
            }
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
