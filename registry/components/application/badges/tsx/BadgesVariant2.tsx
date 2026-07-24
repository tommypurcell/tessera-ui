import type { HTMLAttributes } from 'react'

export type BadgesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BadgesVariant2({ className, ...props }: BadgesVariant2Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p className="text-sm whitespace-nowrap">Euro</p>
      </span>

      <span className="inline-flex items-center justify-center rounded-full border border-purple-500 px-2.5 py-0.5 text-purple-700">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p className="text-sm whitespace-nowrap">Euro</p>
      </span>
    </div>
  )
}
