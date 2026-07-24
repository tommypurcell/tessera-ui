import type { HTMLAttributes } from 'react'

export type VerticalMenuVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function VerticalMenuVariant1Dark({ className, ...props }: VerticalMenuVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            General
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Teams
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Billing
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Invoices
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Invoices
          </a>
        </li>
      </ul>
    </div>
  )
}
