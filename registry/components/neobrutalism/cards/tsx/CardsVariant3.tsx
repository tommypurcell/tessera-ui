import type { HTMLAttributes } from 'react'

export type CardsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CardsVariant3({ className, ...props }: CardsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="group/card relative">
        <span className="absolute inset-0 border-2 border-dashed border-black bg-white"></span>

        <a
          href="#"
          className="group/link relative flex h-72 flex-col justify-end border-2 border-black bg-white p-4 text-black group-hover/card:-translate-2 after:absolute hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6"
        >
          <span className="inline-flex items-center gap-1.5">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                clipRule="evenodd"
              />
            </svg>

            <time dateTime="2025-04-01" className="text-xs/none font-semibold uppercase">
              April 1, 2025
            </time>
          </span>

          <h3 className="mt-1 text-xl font-semibold">
            How I built my first website with Nuxt, Tailwind CSS and Vercel
          </h3>

          <p className="mt-2 line-clamp-2 hidden text-pretty group-hover/link:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a,
            ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </a>
      </div>
    </div>
  )
}
