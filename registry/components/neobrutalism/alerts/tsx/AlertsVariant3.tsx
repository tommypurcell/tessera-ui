import type { HTMLAttributes } from 'react'

export type AlertsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AlertsVariant3({ className, ...props }: AlertsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div
        role="alert"
        className="border-2 bg-red-100 p-4 text-red-900 shadow-[4px_4px_0_0] shadow-black"
      >
        <div className="flex items-start gap-3">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="mt-0.5 size-4"
          >
            <path
              fillRule="evenodd"
              d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              clipRule="evenodd"
            />
          </svg>

          <strong className="block flex-1 leading-tight font-semibold">
            <span className="sr-only">Error: </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eos!
          </strong>
        </div>
      </div>
    </div>
  )
}
