import type { HTMLAttributes } from 'react'

export type TeamSectionsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TeamSectionsVariant3({ className, ...props }: TeamSectionsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900">Eric Johnson</h3>

              <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900">Eric Johnson</h3>

              <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900">Eric Johnson</h3>

              <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900">Eric Johnson</h3>

              <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900">Eric Johnson</h3>

              <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900">Eric Johnson</h3>

              <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
