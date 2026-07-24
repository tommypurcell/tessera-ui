import type { HTMLAttributes } from 'react'

export type ToastsVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ToastsVariant2Dark({ className, ...props }: ToastsVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <div
        role="alert"
        className="rounded-md border border-red-500 bg-red-50 p-4 shadow-sm dark:border-red-400 dark:bg-red-800"
      >
        <div className="flex items-start gap-4">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="-mt-0.5 size-6 text-red-700 dark:text-red-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>

          <div className="flex-1">
            <strong className="block leading-tight font-medium text-red-800 dark:text-red-100">
              Error
            </strong>

            <p className="mt-0.5 text-sm text-red-700 dark:text-red-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
