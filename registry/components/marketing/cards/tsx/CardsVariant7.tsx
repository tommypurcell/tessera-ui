import type { HTMLAttributes } from 'react'

export type CardsVariant7Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CardsVariant7({ className, ...props }: CardsVariant7Props) {
  return (
    <div className={className} {...props}>
      <a href="#" className="block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?auto=format&fit=crop&q=80&w=1160"
          className="h-56 w-full rounded-se-3xl rounded-es-3xl object-cover sm:h-64 lg:h-72"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">Company Name</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
        </div>
      </a>
    </div>
  )
}
