import type { HTMLAttributes } from 'react'

export type TabsVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TabsVariant2Dark({ className, ...props }: TabsVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="border-b-2 border-black dark:border-white">
        <div role="tablist" className="-mb-0.5 flex">
          <button
            role="tab"
            aria-selected="true"
            className="border-2 border-black bg-yellow-200 px-6 py-2 font-semibold text-black focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:border-white dark:bg-yellow-700 dark:text-white dark:focus:ring-yellow-600"
          >
            Profile
          </button>

          <button
            role="tab"
            aria-selected="false"
            className="border-2 border-transparent px-6 py-2 font-semibold text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-yellow-600"
          >
            Account
          </button>

          <button
            role="tab"
            aria-selected="false"
            className="border-2 border-transparent px-6 py-2 font-semibold text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-yellow-600"
          >
            Notifications
          </button>
        </div>
      </div>

      <div
        role="tabpanel"
        className="-mt-0.5 border-2 border-black p-4 shadow-[4px_4px_0_0] shadow-black dark:border-white dark:shadow-white"
      >
        <p className="text-black dark:text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
          dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste
          odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos,
          temporibus perspiciatis!
        </p>
      </div>
    </div>
  )
}
