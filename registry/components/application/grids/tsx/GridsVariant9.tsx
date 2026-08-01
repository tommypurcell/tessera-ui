import type { HTMLAttributes } from 'react'

export type GridsVariant9Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function GridsVariant9({ className, ...props }: GridsVariant9Props) {
  return (
    <div className={className} {...props}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
            <div className="h-32 rounded bg-gray-300"></div>
            <div className="h-32 rounded bg-gray-300"></div>
          </div>
    </div>
  )
}
