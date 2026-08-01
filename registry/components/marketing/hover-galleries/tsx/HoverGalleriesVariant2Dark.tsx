import type { HTMLAttributes } from 'react'

export type HoverGalleriesVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function HoverGalleriesVariant2Dark({ className, ...props }: HoverGalleriesVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <figure className="slide-gallery rounded-xl border border-gray-800">
            <div className="track">
              <img alt="Black leather jacket on a hanger" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400" />
              <img alt="Rust bomber jacket on a hanger" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400" />
              <img alt="Olive utility jacket, worn outdoors" src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=400" />
            </div>
          </figure>
    </div>
  )
}
