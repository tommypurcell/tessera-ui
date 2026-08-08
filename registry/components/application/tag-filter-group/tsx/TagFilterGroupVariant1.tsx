import { useState } from 'react'

export type TagFilterOption = {
  id: string
  label: string
}

export type TagFilterGroupVariant1Props = {
  options: TagFilterOption[]
  defaultSelected?: string[]
  onChange?: (selectedIds: string[]) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Multi-select tag filter pills — each tag toggles
 * independently, driven by real aria-pressed state, for filtering a list by facet.
 */
export function TagFilterGroupVariant1({
  options,
  defaultSelected = [],
  onChange,
  className,
}: TagFilterGroupVariant1Props) {
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
                ? 'rounded-full bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700'
                : 'rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50'
            }
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
