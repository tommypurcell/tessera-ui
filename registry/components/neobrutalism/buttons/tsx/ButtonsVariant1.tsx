import type { HTMLAttributes } from 'react'

export type ButtonsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant1({ className, ...props }: ButtonsVariant1Props) {
  return (
    <div className={className} {...props}>
      <a
        className="border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-[4px_4px_0_0] shadow-black hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0"
        href="#"
      >
        Click Here
      </a>
    </div>
  )
}
