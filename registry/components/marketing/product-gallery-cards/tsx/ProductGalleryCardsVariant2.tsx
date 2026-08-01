import type { HTMLAttributes } from 'react'

export type ProductGalleryCardsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProductGalleryCardsVariant2({ className, ...props }: ProductGalleryCardsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="max-w-60 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <figure className="cycle-gallery">
              <span className="absolute top-2 left-2 z-10 rounded-full bg-gray-950 px-2 py-0.5 text-xs font-medium text-white">New</span>
              <img alt="Plain white t-shirt, worn" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400" />
              <img alt="Sage green t-shirts on a rack" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400" />
            </figure>
            <div className="p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-sm font-semibold text-gray-950">Classic White Tee</h2>
                <span className="text-sm font-medium text-gray-600">$24</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">A no-fuss staple cut from soft, breathable cotton.</p>
            </div>
          </div>
    </div>
  )
}
