import type { HTMLAttributes } from 'react'

export type ModalsVariant5DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ModalsVariant5Dark({ className, ...props }: ModalsVariant5DarkProps) {
  return (
    <div className={className} {...props}>
      <button
            data-modal-open
            className="rounded border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            Open
          </button>
      
          <dialog
            closedby="any"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
            className="m-auto max-w-xl rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/50 dark:bg-gray-900 dark:backdrop:bg-white/50"
          >
            <div className="flex flex-col gap-4">
              <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                Modal Title
              </h2>
      
              <p id="modalDescription" className="text-pretty text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu
                consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
      
              <label htmlFor="Confirm" className="block">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Please type "Confirm" to complete action
                </span>
      
                <input
                  type="text"
                  id="Confirm"
                  className="mt-0.5 w-full rounded border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:ring-indigo-300"
                />
              </label>
      
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  data-modal-close
                  className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-indigo-300 dark:focus:ring-offset-gray-900 dark:focus-visible:ring-indigo-300 dark:focus-visible:ring-offset-gray-900"
                >
                  Cancel
                </button>
      
                <button
                  type="button"
                  data-modal-close
                  className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-blue-200 dark:focus:ring-indigo-300 dark:focus:ring-offset-gray-900 dark:focus-visible:ring-indigo-300 dark:focus-visible:ring-offset-gray-900"
                >
                  Done
                </button>
              </div>
            </div>
          </dialog>
    </div>
  )
}
