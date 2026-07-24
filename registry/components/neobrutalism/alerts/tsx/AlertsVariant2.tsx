import type { HTMLAttributes } from 'react'

export type AlertsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AlertsVariant2({ className, ...props }: AlertsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div
        role="alert"
        className="border-2 bg-green-100 p-4 text-green-900 shadow-[4px_4px_0_0] shadow-black"
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
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
              clipRule="evenodd"
            />
          </svg>

          <strong className="block flex-1 leading-tight font-semibold">
            <span className="sr-only">Success: </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eos!
          </strong>
        </div>
      </div>
    </div>
  )
}
