import type { HTMLAttributes } from 'react'

export type SelectsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SelectsVariant1({ className, ...props }: SelectsVariant1Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Headline">
        <span className="text-sm font-medium text-gray-700"> Headliner </span>

        <select
          name="Headline"
          id="Headline"
          className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
        >
          <option value="">Please select</option>
          <option value="JM">John Mayer</option>
          <option value="SRV">Stevie Ray Vaughn</option>
          <option value="JH">Jimi Hendrix</option>
          <option value="BBK">B.B King</option>
          <option value="AK">Albert King</option>
          <option value="BG">Buddy Guy</option>
          <option value="EC">Eric Clapton</option>
        </select>
      </label>
    </div>
  )
}
