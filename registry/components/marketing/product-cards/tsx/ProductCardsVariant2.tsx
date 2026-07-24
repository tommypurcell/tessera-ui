import type { HTMLAttributes } from 'react'

export type ProductCardsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProductCardsVariant2({ className, ...props }: ProductCardsVariant2Props) {
  return (
    <div className={className} {...props}>
      <a href="#" className="group block overflow-hidden">
        <div className="relative h-87.5 sm:h-112.5">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1160"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1160"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            Limited Edition Sports Trainer
          </h3>

          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">$189.99</p>

            <p className="text-xs tracking-wide uppercase">6 Colors</p>
          </div>
        </div>
      </a>
    </div>
  )
}
