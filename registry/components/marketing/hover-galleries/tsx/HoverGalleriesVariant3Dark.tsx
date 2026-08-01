import type { HTMLAttributes } from 'react'

export type HoverGalleriesVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function HoverGalleriesVariant3Dark({ className, ...props }: HoverGalleriesVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <figure className="zoom-gallery rounded-xl border border-gray-800">
            <img alt="Sage green t-shirt, worn" src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?auto=format&fit=crop&q=80&w=400" />
            <img alt="Sage green t-shirts on a rack" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400" />
            <img alt="Plain white t-shirt, worn" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400" />
          </figure>
    </div>
  )
}
