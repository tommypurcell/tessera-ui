import type { HTMLAttributes } from 'react'

export type ButtonsVariant5DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant5Dark({ className, ...props }: ButtonsVariant5DarkProps) {
  return (
    <div className={className} {...props}>
      <a
        className="border-2 border-black bg-white px-5 py-3 font-semibold text-black ring-2 ring-black ring-offset-2 ring-offset-yellow-300 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:border-white dark:bg-gray-900 dark:text-white dark:ring-white dark:ring-offset-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-600"
        href="#"
      >
        Click Here
      </a>
    </div>
  )
}
