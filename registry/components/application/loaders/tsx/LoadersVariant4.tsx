import type { HTMLAttributes } from 'react'

export type LoadersVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LoadersVariant4({ className, ...props }: LoadersVariant4Props) {
  return (
    <div className={className} {...props}>
      <div className="w-full max-w-sm" role="status">
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-[80%] animate-pulse bg-indigo-600"></div>
            </div>
      
            <p className="mt-4 text-center font-medium text-gray-700">Loading...</p>
          </div>
    </div>
  )
}
