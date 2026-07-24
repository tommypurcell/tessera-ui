import type { HTMLAttributes } from 'react'

export type BadgesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BadgesVariant1({ className, ...props }: BadgesVariant1Props) {
  return (
    <div className={className} {...props}>
      <span className="border-2 border-black bg-blue-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black">
        Info
      </span>

      <span className="border-2 border-black bg-green-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black">
        Success
      </span>

      <span className="border-2 border-black bg-red-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black">
        Error
      </span>
    </div>
  )
}
