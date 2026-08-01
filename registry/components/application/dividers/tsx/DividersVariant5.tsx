import type { HTMLAttributes } from 'react'

export type DividersVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DividersVariant5({ className, ...props }: DividersVariant5Props) {
  return (
    <div className={className} {...props}>
      <span className="flex items-center">
            <span className="h-px flex-1 bg-gray-300"></span>
      
            <span className="shrink-0 ps-4 text-gray-900">Title goes here</span>
          </span>
    </div>
  )
}
