import type { HTMLAttributes } from 'react'

export type InputsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function InputsVariant3({ className, ...props }: InputsVariant3Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Search">
        <span className="sr-only"> Search </span>

        <div className="flex border-2 border-black shadow-[4px_4px_0_0] shadow-black focus-within:ring-2 focus-within:ring-yellow-300">
          <input
            type="search"
            id="Search"
            className="w-full border-none bg-white text-black focus:ring-0 sm:text-sm"
          />

          <button
            type="submit"
            className="bg-yellow-300 px-4 py-2 text-xs/none font-bold tracking-wide uppercase hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-0"
          >
            Search
          </button>
        </div>
      </label>
    </div>
  )
}
