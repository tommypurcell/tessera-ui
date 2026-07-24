import type { HTMLAttributes } from 'react'

export type ButtonsVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant2Dark({ className, ...props }: ButtonsVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <a
        className="inline-flex items-center gap-2 rounded-full border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none dark:border-indigo-300 dark:bg-indigo-300 dark:text-gray-900 dark:hover:bg-indigo-200 dark:focus-visible:ring-indigo-700"
        href="#"
      >
        <span>Start free</span>

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 rtl:rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </a>

      <a
        className="inline-flex items-center gap-2 rounded-full border border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none dark:border-indigo-300 dark:text-indigo-300 dark:hover:bg-indigo-800 dark:focus-visible:ring-indigo-700"
        href="#"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 rtl:rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>

        <span>See options</span>
      </a>
    </div>
  )
}
