import type { HTMLAttributes } from 'react'

export type DividersVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DividersVariant4Dark({ className, ...props }: DividersVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <span className="flex items-center">
            <span className="shrink-0 pe-4 text-gray-900 dark:text-white"> Title goes here </span>
      
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
          </span>
    </div>
  )
}
