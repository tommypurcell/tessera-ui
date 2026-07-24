import type { HTMLAttributes } from 'react'

export type StepsVariant5DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StepsVariant5Dark({ className, ...props }: StepsVariant5DarkProps) {
  return (
    <div className={className} {...props}>
      <div>
        <h2 className="sr-only">Steps</h2>

        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200 dark:after:bg-gray-700">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2 bg-white p-2 dark:bg-gray-900">
              <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold dark:bg-gray-800">
                1
              </span>

              <span className="hidden sm:block"> Details </span>
            </li>

            <li className="flex items-center gap-2 bg-white p-2 dark:bg-gray-900">
              <span className="size-6 rounded-full bg-blue-500 text-center text-[10px]/6 font-bold text-white">
                2
              </span>

              <span className="hidden sm:block"> Address </span>
            </li>

            <li className="flex items-center gap-2 bg-white p-2 dark:bg-gray-900">
              <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold dark:bg-gray-800">
                3
              </span>

              <span className="hidden sm:block"> Payment </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
