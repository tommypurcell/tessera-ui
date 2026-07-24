import type { HTMLAttributes } from 'react'

export type InputsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function InputsVariant1({ className, ...props }: InputsVariant1Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Email" className="text-black">
        <span className="text-sm font-semibold"> Email </span>

        <input
          type="email"
          id="Email"
          className="mt-0.5 w-full border-2 border-black bg-white shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 sm:text-sm"
        />
      </label>
    </div>
  )
}
