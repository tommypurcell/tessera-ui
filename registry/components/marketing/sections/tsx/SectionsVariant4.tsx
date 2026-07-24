import type { HTMLAttributes } from 'react'

export type SectionsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SectionsVariant4({ className, ...props }: SectionsVariant4Props) {
  return (
    <div className={className} {...props}>
      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-prose">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p className="mt-4 text-pretty text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                sequi.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?auto=format&fit=crop&q=80&w=1160"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  )
}
