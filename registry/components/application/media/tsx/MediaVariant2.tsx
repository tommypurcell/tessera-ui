import type { HTMLAttributes } from 'react'

export type MediaVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function MediaVariant2({ className, ...props }: MediaVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center gap-4">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              className="size-20 rounded object-cover"
            />
      
            <div>
              <h3 className="font-medium text-gray-900 sm:text-lg">Title goes here</h3>
      
              <p className="mt-0.5 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                nesciunt quas non animi.
              </p>
            </div>
          </div>
    </div>
  )
}
