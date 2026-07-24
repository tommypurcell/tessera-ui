import type { HTMLAttributes } from 'react'

export type VerticalMenuVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function VerticalMenuVariant2Dark({ className, ...props }: VerticalMenuVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="group flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            <span className="text-sm font-medium"> General </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <span className="text-sm font-medium"> Teams </span>

            <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-gray-700 dark:group-hover:text-gray-300">
              5
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <span className="text-sm font-medium"> Billing </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <span className="text-sm font-medium"> Invoices </span>

            <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-gray-700 dark:group-hover:text-gray-300">
              3
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <span className="text-sm font-medium"> Account </span>
          </a>
        </li>
      </ul>
    </div>
  )
}
