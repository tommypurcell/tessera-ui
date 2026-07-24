import type { HTMLAttributes } from 'react'

export type TabsVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TabsVariant1Dark({ className, ...props }: TabsVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="-mb-px border-b border-gray-200 dark:border-gray-700">
        <div role="tablist" className="flex gap-1">
          <button
            role="tab"
            aria-selected="true"
            className="border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:hover:text-blue-500"
          >
            Profile
          </button>

          <button
            role="tab"
            aria-selected="false"
            className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
          >
            Account
          </button>

          <button
            role="tab"
            aria-selected="false"
            className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
          >
            Notifications
          </button>
        </div>
      </div>

      <div role="tabpanel" className="mt-4">
        <p className="text-gray-700 dark:text-gray-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
          dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste
          odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos,
          temporibus perspiciatis!
        </p>
      </div>
    </div>
  )
}
