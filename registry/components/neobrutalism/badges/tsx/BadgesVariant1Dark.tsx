import type { HTMLAttributes } from 'react'

export type BadgesVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BadgesVariant1Dark({ className, ...props }: BadgesVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <span className="border-2 border-black bg-blue-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-blue-800 dark:text-white dark:shadow-white">
        Info
      </span>

      <span className="border-2 border-black bg-green-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-green-800 dark:text-white dark:shadow-white">
        Success
      </span>

      <span className="border-2 border-black bg-red-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-red-800 dark:text-white dark:shadow-white">
        Error
      </span>
    </div>
  )
}
