import type { HTMLAttributes } from 'react'

export type TextareasVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextareasVariant2Dark({ className, ...props }: TextareasVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <div>
        <label htmlFor="Notes">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Notes </span>

          <div className="relative mt-0.5 overflow-hidden rounded border border-gray-300 shadow-sm focus-within:ring focus-within:ring-blue-600 dark:border-gray-600">
            <textarea
              id="Notes"
              className="w-full resize-none border-none focus:ring-0 sm:text-sm dark:bg-gray-900 dark:text-white"
              rows={4}
            ></textarea>

            <div className="flex items-center justify-end gap-2 p-1.5">
              <button
                type="button"
                className="rounded border border-transparent px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              >
                Clear
              </button>

              <button
                type="button"
                className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
              >
                Save
              </button>
            </div>
          </div>
        </label>
      </div>
    </div>
  )
}
