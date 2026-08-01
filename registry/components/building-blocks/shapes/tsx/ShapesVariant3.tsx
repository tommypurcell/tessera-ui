import type { HTMLAttributes } from 'react'

export type ShapesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ShapesVariant3({ className, ...props }: ShapesVariant3Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-block size-10 rounded-md bg-slate-100"></span>
    </div>
  )
}
