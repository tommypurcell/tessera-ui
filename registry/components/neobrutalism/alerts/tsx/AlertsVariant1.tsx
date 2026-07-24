import type { HTMLAttributes } from 'react'

export type AlertsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AlertsVariant1({ className, ...props }: AlertsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div
        role="alert"
        className="border-2 bg-blue-100 p-4 text-blue-900 shadow-[4px_4px_0_0] shadow-black"
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
              d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
              clipRule="evenodd"
            />
          </svg>

          <strong className="block flex-1 leading-tight font-semibold">
            <span className="sr-only">Info: </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eos!
          </strong>
        </div>
      </div>
    </div>
  )
}
