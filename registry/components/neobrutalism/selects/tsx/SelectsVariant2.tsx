import type { HTMLAttributes } from 'react'

export type SelectsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SelectsVariant2({ className, ...props }: SelectsVariant2Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Headline" className="text-black">
        <span className="text-sm font-semibold"> Headliner </span>

        <select
          name="Headline"
          id="Headline"
          className="mt-0.5 w-full border-2 border-black bg-white placeholder-black shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 sm:text-sm"
        >
          <option value="">Please select</option>

          <optgroup label="A">
            <option value="AK">Albert King</option>
          </optgroup>

          <optgroup label="B">
            <option value="BBK">B.B King</option>
            <option value="BG">Buddy Guy</option>
          </optgroup>

          <optgroup label="E">
            <option value="EC">Eric Clapton</option>
          </optgroup>

          <optgroup label="J">
            <option value="JM">John Mayer</option>
            <option value="JH">Jimi Hendrix</option>
          </optgroup>

          <optgroup label="S">
            <option value="SRV">Stevie Ray Vaughn</option>
          </optgroup>
        </select>
      </label>
    </div>
  )
}
