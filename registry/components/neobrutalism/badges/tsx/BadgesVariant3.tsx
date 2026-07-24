import type { HTMLAttributes } from 'react'

export type BadgesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BadgesVariant3({ className, ...props }: BadgesVariant3Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-flex items-center gap-3 border-2 border-black bg-white px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black">
        New Message
        <button
          type="button"
          className="bg-black p-0.5 text-white shadow-[2px_2px_0_0] shadow-black hover:translate-0.5 hover:shadow-none focus:ring-2 focus:ring-yellow-300"
          aria-label="Remove"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
          </svg>
        </button>
      </span>
    </div>
  )
}
