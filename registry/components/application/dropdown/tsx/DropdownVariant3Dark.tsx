import type { HTMLAttributes } from 'react'

export type DropdownVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DropdownVariant3Dark({ className, ...props }: DropdownVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="relative inline-flex">
        <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
          <button
            type="button"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Product
          </button>

          <button
            type="button"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="Menu"
          >
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
          </button>
        </span>

        <div
          role="menu"
          className="absolute end-0 top-12 z-auto w-56 divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-600 dark:bg-gray-800"
        >
          <div>
            <p className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400">General</p>

            <a
              href="#"
              className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
              role="menuitem"
            >
              Storefront
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
              role="menuitem"
            >
              Warehouse
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
              role="menuitem"
            >
              Stock
            </a>
          </div>

          <div>
            <p className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400">Actions</p>

            <button
              type="button"
              className="block w-full px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 ltr:text-left rtl:text-right dark:text-red-600 dark:hover:bg-red-700/20"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
