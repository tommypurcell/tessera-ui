import type { HTMLAttributes } from 'react'

export type ButtonsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant5({ className, ...props }: ButtonsVariant5Props) {
  return (
    <div className={className} {...props}>
      <a
        className="border-2 border-black bg-white px-5 py-3 font-semibold text-black ring-2 ring-black ring-offset-2 ring-offset-yellow-300 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0"
        href="#"
      >
        Click Here
      </a>
    </div>
  )
}
