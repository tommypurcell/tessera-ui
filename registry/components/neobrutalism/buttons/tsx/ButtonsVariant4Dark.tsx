import type { HTMLAttributes } from 'react'

export type ButtonsVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant4Dark({ className, ...props }: ButtonsVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <a
        className="relative bg-white px-5 py-3 font-semibold text-black after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-black hover:text-white hover:after:h-full focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:bg-gray-900 dark:text-white dark:after:bg-white dark:hover:text-gray-900 dark:focus:ring-yellow-600"
        href="#"
      >
        <span className="relative z-10"> Click Here </span>
      </a>
    </div>
  )
}
