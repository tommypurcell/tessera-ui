import type { HTMLAttributes } from 'react'

export type ShapesVariant6Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ShapesVariant6({ className, ...props }: ShapesVariant6Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-block size-8 rotate-45 rounded-md bg-indigo-500"></span>
    </div>
  )
}
