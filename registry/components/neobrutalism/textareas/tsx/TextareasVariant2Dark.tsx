import type { HTMLAttributes } from 'react'

export type TextareasVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextareasVariant2Dark({ className, ...props }: TextareasVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Notes" className="text-black dark:text-white">
        <span className="text-sm font-semibold"> Notes </span>

        <div className="relative mt-0.5 overflow-hidden border-2 border-black shadow-[4px_4px_0_0] shadow-black focus-within:ring-2 focus-within:ring-yellow-300 dark:border-white dark:shadow-white dark:focus-within:ring-yellow-600">
          <textarea
            id="Notes"
            className="w-full resize-none border-0 bg-white focus:ring-0 sm:text-sm dark:bg-gray-900"
            rows={4}
          ></textarea>

          <div className="flex items-center justify-end gap-3 border-t-2 border-black p-3 dark:border-white">
            <button
              type="button"
              className="border-2 px-3 py-1.5 text-sm font-semibold text-black shadow-[2px_2px_0_0] shadow-black hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:text-white dark:shadow-white dark:hover:bg-yellow-700 dark:focus:ring-yellow-600"
            >
              Clear
            </button>

            <button
              type="button"
              className="border-2 bg-yellow-200 px-3 py-1.5 text-sm font-semibold text-black shadow-[2px_2px_0_0] shadow-black hover:bg-yellow-400 focus:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:bg-yellow-700 dark:text-white dark:shadow-white dark:hover:bg-yellow-500 dark:focus:bg-yellow-700 dark:focus:ring-yellow-600"
            >
              Save
            </button>
          </div>
        </div>
      </label>
    </div>
  )
}
