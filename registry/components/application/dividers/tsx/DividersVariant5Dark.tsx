import type { HTMLAttributes } from 'react'

export type DividersVariant5DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DividersVariant5Dark({ className, ...props }: DividersVariant5DarkProps) {
  return (
    <div className={className} {...props}>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></span>

        <span className="shrink-0 ps-4 text-gray-900 dark:text-white"> Title goes here </span>
      </span>
    </div>
  )
}
