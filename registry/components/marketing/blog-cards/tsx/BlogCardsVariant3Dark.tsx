import type { HTMLAttributes } from 'react'

export type BlogCardsVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BlogCardsVariant3Dark({ className, ...props }: BlogCardsVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1160"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
            quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          <a
            href="#"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  )
}
