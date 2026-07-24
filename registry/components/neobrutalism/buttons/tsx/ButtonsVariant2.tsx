import type { HTMLAttributes } from 'react'

export type ButtonsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant2({ className, ...props }: ButtonsVariant2Props) {
  return (
    <div className={className} {...props}>
      <a
        className="border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-[4px_4px_0_0] shadow-black hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0"
        href="#"
      >
        Click Here
      </a>
    </div>
  )
}
