import type { HTMLAttributes } from 'react'

export type StepsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StepsVariant2({ className, ...props }: StepsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div>
        <h2 className="sr-only">Steps</h2>

        <div>
          <p className="text-xs font-medium text-gray-600">2/3 - Address</p>

          <div className="mt-2 overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
