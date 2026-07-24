import type { HTMLAttributes } from 'react'

export type BlogCardsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BlogCardsVariant1({ className, ...props }: BlogCardsVariant1Props) {
  return (
    <div className={className} {...props}>
      <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1160"
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            {' '}
            10th Oct 2022{' '}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">
              How to position your furniture for positivity
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
            quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </div>
  )
}
