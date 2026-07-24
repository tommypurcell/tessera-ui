import type { HTMLAttributes } from 'react'

export type StepsVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StepsVariant2Dark({ className, ...props }: StepsVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <div>
        <h2 className="sr-only">Steps</h2>

        <div>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-300">2/3 - Address</p>

          <div className="mt-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
