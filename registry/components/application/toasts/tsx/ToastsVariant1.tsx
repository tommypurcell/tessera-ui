import type { HTMLAttributes } from 'react'

export type ToastsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ToastsVariant1({ className, ...props }: ToastsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div role="alert" className="rounded-md border border-green-500 bg-green-50 p-4 shadow-sm">
        <div className="flex items-start gap-4">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="-mt-0.5 size-6 text-green-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="flex-1">
            <strong className="block leading-tight font-medium text-green-800"> Success </strong>

            <p className="mt-0.5 text-sm text-green-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
