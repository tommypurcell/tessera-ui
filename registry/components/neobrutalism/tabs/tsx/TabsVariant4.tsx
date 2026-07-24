import type { HTMLAttributes } from 'react'

export type TabsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TabsVariant4({ className, ...props }: TabsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div className="flex gap-8">
        <div className="border-r-2 border-black py-2">
          <div role="tablist" className="-mr-0.5 flex flex-col">
            <button
              role="tab"
              aria-selected="true"
              className="border-2 border-black bg-yellow-200 px-6 py-2 font-semibold text-black focus:ring-2 focus:ring-yellow-300 focus:outline-0"
            >
              General
            </button>

            <button
              role="tab"
              aria-selected="false"
              className="border-2 border-transparent px-6 py-2 font-semibold text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-yellow-300 focus:outline-0"
            >
              Privacy
            </button>

            <button
              role="tab"
              aria-selected="false"
              className="border-2 border-transparent px-6 py-2 font-semibold text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-yellow-300 focus:outline-0"
            >
              Security
            </button>
          </div>
        </div>

        <div role="tabpanel" className="flex-1 py-2">
          <p className="text-black">
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
