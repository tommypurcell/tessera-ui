import type { HTMLAttributes } from 'react'

export type ShapesVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ShapesVariant5({ className, ...props }: ShapesVariant5Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-block size-10 rounded-xl bg-blue-50"></span>
    </div>
  )
}
