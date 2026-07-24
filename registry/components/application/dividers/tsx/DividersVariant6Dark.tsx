import type { HTMLAttributes } from 'react'

export type DividersVariant6DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DividersVariant6Dark({ className, ...props }: DividersVariant6DarkProps) {
  return (
    <div className={className} {...props}>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300 dark:to-gray-600"></span>

        <span className="shrink-0 ps-4 text-gray-900 dark:text-white"> Title goes here </span>
      </span>
    </div>
  )
}
