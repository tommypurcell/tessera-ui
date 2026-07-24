import type { HTMLAttributes } from 'react'

export type BlogCardsVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BlogCardsVariant2Dark({ className, ...props }: BlogCardsVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <article className="group">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=1160"
          className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-50 dark:shadow-gray-700/25"
        />

        <div className="p-4">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Finding the Journey to Mordor
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
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
