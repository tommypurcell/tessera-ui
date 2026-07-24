import type { HTMLAttributes } from 'react'

export type InputsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function InputsVariant2({ className, ...props }: InputsVariant2Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Email" className="text-black">
        <span className="text-sm font-semibold"> Email </span>

        <div className="relative mt-0.5">
          <input
            type="email"
            id="Email"
            className="w-full border-2 border-black bg-white pe-8 shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 sm:text-sm"
          />

          <span className="absolute top-1 right-1 grid size-8 place-content-center bg-black text-white">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M11.89 4.111a5.5 5.5 0 1 0 0 7.778.75.75 0 1 1 1.06 1.061A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 0 0 2 0 5.48 5.48 0 0 0-1.61-3.889ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </label>
    </div>
  )
}
