import type { HTMLAttributes } from 'react'

export type DividersVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DividersVariant2({ className, ...props }: DividersVariant2Props) {
  return (
    <div className={className} {...props}>
      <span className="flex items-center">
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300"></span>
      
            <span className="shrink-0 px-4 text-gray-900">Title goes here</span>
      
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300"></span>
          </span>
    </div>
  )
}
