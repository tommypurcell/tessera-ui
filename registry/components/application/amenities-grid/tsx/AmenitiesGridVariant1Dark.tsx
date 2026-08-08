import type { ReactNode } from 'react'

export type Amenity = {
  id: string
  label: string
  icon: ReactNode
  included: boolean
}

export type AmenitiesGridVariant1DarkProps = {
  amenities: Amenity[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Icon+label feature grid adapted for dark surfaces —
 * included amenities render normally, excluded ones are dimmed with a strikethrough.
 */
export function AmenitiesGridVariant1Dark({ amenities, className }: AmenitiesGridVariant1DarkProps) {
  return (
    <ul className={`grid grid-cols-2 gap-x-4 gap-y-3 ${className ?? ''}`}>
      {amenities.map((amenity) => (
        <li
          key={amenity.id}
          className={
            amenity.included
              ? 'flex items-center gap-2.5 text-sm text-gray-200'
              : 'flex items-center gap-2.5 text-sm text-gray-600 line-through decoration-gray-700'
          }
        >
          <span className={`shrink-0 ${amenity.included ? 'text-gray-400' : 'text-gray-700'}`}>{amenity.icon}</span>
          <span>{amenity.label}</span>
        </li>
      ))}
    </ul>
  )
}
