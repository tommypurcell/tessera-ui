import type { HTMLAttributes } from 'react'

export type BadgesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BadgesVariant2({ className, ...props }: BadgesVariant2Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black">
        <span className="size-2 bg-green-600"></span>
        Success
      </span>

      <span className="inline-flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black">
        <span className="size-2 bg-red-600"></span>
        Error
      </span>
    </div>
  )
}
