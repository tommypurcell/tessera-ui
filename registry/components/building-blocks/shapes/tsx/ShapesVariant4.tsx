import type { HTMLAttributes } from 'react'

export type ShapesVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ShapesVariant4({ className, ...props }: ShapesVariant4Props) {
  return (
    <div className={className} {...props}>
      <span className="size-10 rounded-full border-4 border-blue-200"></span>
    </div>
  )
}
