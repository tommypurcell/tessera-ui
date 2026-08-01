import type { HTMLAttributes } from 'react'

export type ProductGalleryCardsVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProductGalleryCardsVariant1Dark({ className, ...props }: ProductGalleryCardsVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="max-w-60 overflow-hidden rounded-xl border border-gray-800 shadow-sm">
            <figure className="cycle-gallery">
              <img alt="Sage green t-shirt, worn" src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?auto=format&fit=crop&q=80&w=400" />
              <img alt="Sage green t-shirts on a rack" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400" />
            </figure>
            <div className="bg-gray-900 p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-sm font-semibold text-gray-100">Sage Cotton Tee</h2>
                <span className="text-sm font-medium text-gray-400">$28</span>
              </div>
              <p className="mt-1 text-sm text-gray-400">Heavyweight cotton with a relaxed, garment-dyed finish.</p>
            </div>
          </div>
    </div>
  )
}
