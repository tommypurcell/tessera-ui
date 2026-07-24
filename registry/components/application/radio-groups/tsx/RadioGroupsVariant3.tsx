import type { HTMLAttributes } from 'react'

export type RadioGroupsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RadioGroupsVariant3({ className, ...props }: RadioGroupsVariant3Props) {
  return (
    <div className={className} {...props}>
      <fieldset className="flex flex-wrap gap-3">
        <legend className="sr-only">Color</legend>

        <label
          htmlFor="ColorBlack"
          className="block size-8 rounded-full bg-black shadow-sm has-checked:ring-2 has-checked:ring-black has-checked:ring-offset-2"
        >
          <input
            type="radio"
            name="ColorOption"
            value="ColorBlack"
            id="ColorBlack"
            className="sr-only"
            checked
          />

          <span className="sr-only">Black</span>
        </label>

        <label
          htmlFor="ColorRed"
          className="block size-8 rounded-full bg-red-500 shadow-sm has-checked:ring-2 has-checked:ring-red-500 has-checked:ring-offset-2"
        >
          <input
            type="radio"
            name="ColorOption"
            value="ColorRed"
            id="ColorRed"
            className="sr-only"
          />

          <span className="sr-only">Red</span>
        </label>

        <label
          htmlFor="ColorBlue"
          className="block size-8 rounded-full bg-blue-500 shadow-sm has-checked:ring-2 has-checked:ring-blue-500 has-checked:ring-offset-2"
        >
          <input
            type="radio"
            name="ColorOption"
            value="ColorBlue"
            id="ColorBlue"
            className="sr-only"
          />

          <span className="sr-only">Blue</span>
        </label>

        <label
          htmlFor="ColorGold"
          className="block size-8 rounded-full bg-amber-500 shadow-sm has-checked:ring-2 has-checked:ring-amber-500 has-checked:ring-offset-2"
        >
          <input
            type="radio"
            name="ColorOption"
            value="ColorGold"
            id="ColorGold"
            className="sr-only"
          />

          <span className="sr-only">Gold</span>
        </label>
      </fieldset>
    </div>
  )
}
