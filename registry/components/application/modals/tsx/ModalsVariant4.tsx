import type { HTMLAttributes } from 'react'

export type ModalsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ModalsVariant4({ className, ...props }: ModalsVariant4Props) {
  return (
    <div className={className} {...props}>
      <button
            data-modal-open
            className="rounded border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-900"
          >
            Open
          </button>
      
          <dialog
            closedby="any"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
            className="m-auto max-w-xl rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/50"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">Modal Title</h2>
      
                <button
                  type="button"
                  data-modal-close
                  className="-me-4 -mt-4 rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
                  aria-label="Close"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
      
              <p id="modalDescription" className="text-pretty text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu
                consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
      
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  data-modal-close
                  className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
                >
                  Cancel
                </button>
      
                <button
                  type="button"
                  data-modal-close
                  className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
                >
                  Done
                </button>
              </div>
            </div>
          </dialog>
    </div>
  )
}
