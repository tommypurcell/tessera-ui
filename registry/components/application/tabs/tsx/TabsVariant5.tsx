import type { HTMLAttributes } from 'react'

export type TabsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TabsVariant5({ className, ...props }: TabsVariant5Props) {
  return (
    <div className={className} {...props}>
      <div role="tablist" className="flex gap-2">
        <button
          role="tab"
          aria-selected="true"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Featured
        </button>

        <button
          role="tab"
          aria-selected="false"
          className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300"
        >
          Popular
        </button>

        <button
          role="tab"
          aria-selected="false"
          className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300"
        >
          Trending
        </button>
      </div>

      <div role="tabpanel" className="mt-4">
        <p className="text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
          dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste
          odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos,
          temporibus perspiciatis!
        </p>
      </div>
    </div>
  )
}
