import type { HTMLAttributes } from 'react'

export type StatsVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StatsVariant3Dark({ className, ...props }: StatsVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Profit</p>

          <p className="text-2xl font-medium text-gray-900 dark:text-white">$240.94</p>
        </div>

        <div className="inline-flex gap-2 rounded-sm bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>

          <span className="sr-only">Increase: </span>

          <span className="text-xs font-medium"> 67.81% </span>
        </div>
      </article>

      <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Profit</p>

          <p className="text-2xl font-medium text-gray-900 dark:text-white">$240.94</p>
        </div>

        <div className="inline-flex gap-2 rounded-sm bg-red-100 p-1 text-red-600 dark:bg-red-700 dark:text-red-50">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>

          <span className="sr-only">Decrease: </span>

          <span className="text-xs font-medium"> 67.81% </span>
        </div>
      </article>
    </div>
  )
}
