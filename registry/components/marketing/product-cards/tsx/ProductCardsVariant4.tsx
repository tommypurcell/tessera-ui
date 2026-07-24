import type { HTMLAttributes } from 'react'

export type ProductCardsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProductCardsVariant4({ className, ...props }: ProductCardsVariant4Props) {
  return (
    <div className={className} {...props}>
      <a href="#" className="group block">
        <img
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&q=80&w=1160"
          alt=""
          className="aspect-square w-full rounded-sm object-cover"
        />

        <div className="mt-3">
          <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
            Simple Watch
          </h3>

          <p className="mt-1 text-sm text-gray-700">$150</p>
        </div>
      </a>
    </div>
  )
}
