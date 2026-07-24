import type { HTMLAttributes } from 'react'

export type ProductCollectionsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProductCollectionsVariant2({
  className,
  ...props
}: ProductCollectionsVariant2Props) {
  return (
    <div className={className} {...props}>
      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque
              iure dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1160"
                  alt=""
                  className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1160"
                  alt=""
                  className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1160"
                  alt=""
                  className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1160"
                  alt=""
                  className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
