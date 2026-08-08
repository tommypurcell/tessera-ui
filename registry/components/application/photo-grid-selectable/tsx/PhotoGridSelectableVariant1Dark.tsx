import { useState } from 'react'

export type SelectablePhoto = {
  id: string
  gradientClassName: string
  altLabel: string
}

export type PhotoGridSelectableVariant1DarkProps = {
  photos: SelectablePhoto[]
  onSelectionChange?: (selectedIds: string[]) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the selectable photo grid.
 */
export function PhotoGridSelectableVariant1Dark({ photos, onSelectionChange, className }: PhotoGridSelectableVariant1DarkProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      onSelectionChange?.(Array.from(next))
      return next
    })
  }

  function clear() {
    setSelected(new Set())
    onSelectionChange?.([])
  }

  return (
    <div className={className}>
      {selected.size > 0 ? (
        <div className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-900">
          <span className="font-medium">{selected.size} selected</span>
          <button type="button" onClick={clear} className="text-xs font-medium text-gray-600 hover:text-gray-900">
            Clear
          </button>
        </div>
      ) : null}

      <ul className="mt-2 grid grid-cols-3 gap-1.5">
        {photos.map((photo) => {
          const isSelected = selected.has(photo.id)
          return (
            <li
              key={photo.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              aria-label={`Select ${photo.altLabel}`}
              onClick={() => toggle(photo.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  toggle(photo.id)
                }
              }}
              className={`relative aspect-square cursor-pointer overflow-hidden rounded-md bg-gradient-to-br ${photo.gradientClassName} ${
                isSelected ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-950' : ''
              }`}
            >
              {isSelected ? (
                <span className="absolute top-1.5 right-1.5 flex size-5 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
