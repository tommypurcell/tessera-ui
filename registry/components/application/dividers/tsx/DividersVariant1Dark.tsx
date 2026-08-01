import type { HTMLAttributes } from 'react'

export type DividersVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DividersVariant1Dark({ className, ...props }: DividersVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <span className="flex items-center">
            <span className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></span>
      
            <span className="shrink-0 px-4 text-gray-900 dark:text-white"> Title goes here </span>
      
            <span className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></span>
          </span>
    </div>
  )
}
