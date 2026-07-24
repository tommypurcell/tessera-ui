import type { HTMLAttributes } from 'react'

export type InputsVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function InputsVariant3Dark({ className, ...props }: InputsVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Search">
        <span className="sr-only"> Search </span>

        <div className="flex border-2 border-black shadow-[4px_4px_0_0] shadow-black focus-within:ring-2 focus-within:ring-yellow-300 dark:border-white dark:shadow-white dark:focus-within:ring-yellow-600">
          <input
            type="search"
            id="Search"
            className="w-full border-none bg-white text-black focus:ring-0 sm:text-sm dark:bg-gray-900 dark:text-white"
          />

          <button
            type="submit"
            className="bg-yellow-300 px-4 py-2 text-xs/none font-bold tracking-wide uppercase hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-0 dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:bg-yellow-500"
          >
            Search
          </button>
        </div>
      </label>
    </div>
  )
}
