import type { HTMLAttributes } from 'react'

export type ToastsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ToastsVariant4({ className, ...props }: ToastsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div role="alert" className="rounded-md border border-blue-500 bg-blue-50 p-4 shadow-sm">
        <div className="flex items-start gap-4">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="-mt-0.5 size-6 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>

          <div className="flex-1">
            <strong className="block leading-tight font-medium text-blue-800"> Info </strong>

            <p className="mt-0.5 text-sm text-blue-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
