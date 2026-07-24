import type { HTMLAttributes } from 'react'

export type StatsVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StatsVariant4Dark({ className, ...props }: StatsVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </span>

        <div>
          <p className="text-2xl font-medium text-gray-900 dark:text-white">$240.94</p>

          <p className="text-sm text-gray-500 dark:text-gray-400">Total Sales</p>
        </div>
      </article>

      <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6 sm:justify-between dark:border-gray-800 dark:bg-gray-900">
        <span className="rounded-full bg-blue-100 p-3 text-blue-600 sm:order-last dark:bg-blue-500/20 dark:text-blue-400">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </span>

        <div>
          <p className="text-2xl font-medium text-gray-900 dark:text-white">$240.94</p>

          <p className="text-sm text-gray-500 dark:text-gray-400">Total Sales</p>
        </div>
      </article>
    </div>
  )
}
