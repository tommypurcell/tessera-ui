import type { HTMLAttributes } from 'react'

export type BlogCardsVariant7Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BlogCardsVariant7({ className, ...props }: BlogCardsVariant7Props) {
  return (
    <div className={className} {...props}>
      <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1160"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-linear-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-white/90">
              {' '}
              10th Oct 2022{' '}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">
                How to position your furniture for positivity
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa
              eius atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
