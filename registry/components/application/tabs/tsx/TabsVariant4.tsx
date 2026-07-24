import type { HTMLAttributes } from 'react'

export type TabsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TabsVariant4({ className, ...props }: TabsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div role="tablist" className="flex gap-2">
        <button
          role="tab"
          aria-selected="true"
          className="border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
        >
          Overview
        </button>

        <button
          role="tab"
          aria-selected="false"
          className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700"
        >
          Analytics
        </button>

        <button
          role="tab"
          aria-selected="false"
          className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700"
        >
          Reports
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
