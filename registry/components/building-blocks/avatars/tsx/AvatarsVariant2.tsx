import type { HTMLAttributes } from 'react'

export type AvatarsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AvatarsVariant2({ className, ...props }: AvatarsVariant2Props) {
  return (
    <div className={className} {...props}>
      <span
            aria-label="Product team"
            className="grid size-11 place-items-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700 ring-1 ring-blue-100"
          >
            PT
          </span>
    </div>
  )
}
