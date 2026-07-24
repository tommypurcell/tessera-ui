import type { HTMLAttributes } from 'react'

export type ButtonsVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant2Dark({ className, ...props }: ButtonsVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <a
        className="border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-[4px_4px_0_0] shadow-black hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-white dark:focus:ring-yellow-600"
        href="#"
      >
        Click Here
      </a>
    </div>
  )
}
