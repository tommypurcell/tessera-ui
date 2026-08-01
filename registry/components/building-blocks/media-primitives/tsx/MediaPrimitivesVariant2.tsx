import type { HTMLAttributes } from 'react'

export type MediaPrimitivesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function MediaPrimitivesVariant2({ className, ...props }: MediaPrimitivesVariant2Props) {
  return (
    <div className={className} {...props}>
      <span className="grid size-12 place-items-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">AW</span>
    </div>
  )
}
