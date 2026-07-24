import type { HTMLAttributes } from 'react'

export type ProductCardsVariant7Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProductCardsVariant7({ className, ...props }: ProductCardsVariant7Props) {
  return (
    <div className={className} {...props}>
      <a href="#" className="relative block rounded-se-3xl border border-gray-100">
        <span className="absolute -top-px -right-px rounded-se-3xl rounded-es-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase">
          Save 10%
        </span>

        <img
          src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=1160"
          alt=""
          className="h-80 w-full rounded-se-3xl object-cover"
        />

        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

          <p className="mt-2 text-pretty text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum
            in eum vitae aliquid at sed dignissimos.
          </p>

          <span className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900">
            Buy now
          </span>
        </div>
      </a>
    </div>
  )
}
