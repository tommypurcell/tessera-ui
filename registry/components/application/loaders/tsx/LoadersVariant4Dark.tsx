import type { HTMLAttributes } from 'react'

export type LoadersVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LoadersVariant4Dark({ className, ...props }: LoadersVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="w-full max-w-sm" role="status">
        <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div className="h-full w-[80%] animate-pulse bg-indigo-600 dark:bg-indigo-300"></div>
        </div>

        <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-200">Loading...</p>
      </div>
    </div>
  )
}
