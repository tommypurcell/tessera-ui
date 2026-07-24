import type { HTMLAttributes } from 'react'

export type SelectsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SelectsVariant3({ className, ...props }: SelectsVariant3Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Headline">
        <span className="text-sm font-medium text-gray-700"> Headliner </span>

        <div className="relative">
          <input
            type="text"
            id="Headline"
            list="HeadlineList"
            placeholder="Please select"
            className="mt-0.5 w-full rounded border-gray-300 pe-8 shadow-sm sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
          />

          <span className="absolute inset-y-0 right-0 grid w-8 place-content-center text-gray-700">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>

        <datalist id="HeadlineList">
          <option value="JM">John Mayer</option>
          <option value="SRV">Stevie Ray Vaughn</option>
          <option value="JH">Jimi Hendrix</option>
          <option value="BBK">B.B King</option>
          <option value="AK">Albert King</option>
          <option value="BG">Buddy Guy</option>
          <option value="EC">Eric Clapton</option>
        </datalist>
      </label>
    </div>
  )
}
