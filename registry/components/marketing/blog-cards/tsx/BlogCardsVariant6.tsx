import type { HTMLAttributes } from 'react'

export type BlogCardsVariant6Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BlogCardsVariant6({ className, ...props }: BlogCardsVariant6Props) {
  return (
    <div className={className} {...props}>
      <article className="flex bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
          >
            <span>2022</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?auto=format&fit=crop&q=80&w=1160"
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold text-gray-900 uppercase">
                Finding the right guitar for your style - 5 tips
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa
              eius atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
            >
              Read Blog
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
