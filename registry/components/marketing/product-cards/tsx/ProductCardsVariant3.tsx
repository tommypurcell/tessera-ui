import type { HTMLAttributes } from 'react'

export type ProductCardsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProductCardsVariant3({ className, ...props }: ProductCardsVariant3Props) {
  return (
    <div className={className} {...props}>
      <a href="#" className="group block">
        <img
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&q=80&w=1160"
          alt=""
          className="h-87.5 w-full object-cover sm:h-112.5"
        />

        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              Small Headphones
            </h3>

            <p className="mt-1.5 text-xs text-pretty text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta
              quisquam voluptatem nemo.
            </p>
          </div>

          <p className="text-gray-900">$299</p>
        </div>
      </a>
    </div>
  )
}
