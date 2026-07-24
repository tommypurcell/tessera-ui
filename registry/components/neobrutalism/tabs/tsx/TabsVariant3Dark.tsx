import type { HTMLAttributes } from 'react'

export type TabsVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TabsVariant3Dark({ className, ...props }: TabsVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <div>
        <div role="tablist" className="-mb-0.5 flex gap-3">
          <button
            role="tab"
            aria-selected="true"
            className="border-2 border-black bg-yellow-200 px-6 py-2 font-semibold text-black shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:border-white dark:bg-yellow-700 dark:text-white dark:shadow-white dark:focus:ring-yellow-600"
          >
            Profile
          </button>

          <button
            role="tab"
            aria-selected="false"
            className="border-2 border-black px-6 py-2 font-semibold text-black shadow-[4px_4px_0_0] shadow-black hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:border-white dark:text-white dark:shadow-white dark:focus:ring-yellow-600"
          >
            Account
          </button>

          <button
            role="tab"
            aria-selected="false"
            className="border-2 border-black px-6 py-2 font-semibold text-black shadow-[4px_4px_0_0] shadow-black hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 dark:border-white dark:text-white dark:shadow-white dark:focus:ring-yellow-600"
          >
            Notifications
          </button>
        </div>
      </div>

      <div role="tabpanel" className="mt-4">
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
