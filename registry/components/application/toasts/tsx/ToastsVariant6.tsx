import type { HTMLAttributes } from 'react'

export type ToastsVariant6Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ToastsVariant6({ className, ...props }: ToastsVariant6Props) {
  return (
    <div className={className} {...props}>
      <div role="alert" className="border-s-4 border-blue-700 bg-blue-50 p-4">
        <div className="flex items-center gap-2 text-blue-700">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>

          <strong className="block leading-tight font-medium text-blue-800"> Info </strong>
        </div>

        <p className="mt-1 text-sm text-blue-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, dignissimos.
        </p>
      </div>
    </div>
  )
}
