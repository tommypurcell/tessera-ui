import type { HTMLAttributes } from 'react'

export type TabsVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TabsVariant3Dark({ className, ...props }: TabsVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="flex gap-4">
        <div className="border-r border-gray-200 dark:border-gray-700">
          <div role="tablist" className="-me-px flex flex-col gap-1">
            <button
              role="tab"
              aria-selected="true"
              className="border-r-2 border-blue-600 px-4 py-2 text-left text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:hover:text-blue-500"
            >
              General
            </button>

            <button
              role="tab"
              aria-selected="false"
              className="border-r-2 border-transparent px-4 py-2 text-left text-sm font-medium text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
            >
              Privacy
            </button>

            <button
              role="tab"
              aria-selected="false"
              className="border-r-2 border-transparent px-4 py-2 text-left text-sm font-medium text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
            >
              Security
            </button>
          </div>
        </div>

        <div role="tabpanel" className="flex-1">
          <p className="text-gray-700 dark:text-gray-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
            dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste
            odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos,
            temporibus perspiciatis!
          </p>
        </div>
      </div>
    </div>
  )
}
