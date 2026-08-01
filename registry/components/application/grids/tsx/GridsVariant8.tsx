import type { HTMLAttributes } from 'react'

export type GridsVariant8Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function GridsVariant8({ className, ...props }: GridsVariant8Props) {
  return (
    <div className={className} {...props}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            <div className="h-32 rounded bg-gray-300"></div>
            <div className="h-32 rounded bg-gray-300 lg:col-span-2"></div>
            <div className="h-32 rounded bg-gray-300"></div>
          </div>
    </div>
  )
}
