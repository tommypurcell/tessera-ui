import type { ReactNode } from 'react'

export type Amenity = {
  id: string
  label: string
  icon: ReactNode
  included: boolean
}

export type AmenitiesGridVariant1Props = {
  amenities: Amenity[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Icon+label feature grid — included amenities render
 * normally, excluded ones are dimmed with a strikethrough, computed from a real
 * per-item included flag.
 */
export function AmenitiesGridVariant1({ amenities, className }: AmenitiesGridVariant1Props) {
  return (
    <ul className={`grid grid-cols-2 gap-x-4 gap-y-3 ${className ?? ''}`}>
      {amenities.map((amenity) => (
        <li
          key={amenity.id}
          className={
            amenity.included
              ? 'flex items-center gap-2.5 text-sm text-gray-700'
              : 'flex items-center gap-2.5 text-sm text-gray-400 line-through decoration-gray-300'
          }
        >
          <span className={`shrink-0 ${amenity.included ? 'text-gray-500' : 'text-gray-300'}`}>{amenity.icon}</span>
          <span>{amenity.label}</span>
        </li>
      ))}
    </ul>
  )
}
