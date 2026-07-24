import type { HTMLAttributes } from 'react'

export type CardsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CardsVariant3({ className, ...props }: CardsVariant3Props) {
  return (
    <div className={className} {...props}>
      <a href="#" className="group relative block bg-black">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?auto=format&fit=crop&q=80&w=1160"
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>

          <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic
                asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
                Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
