import type { HTMLAttributes } from 'react'

export type ButtonsVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant3Dark({ className, ...props }: ButtonsVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <a
        className="inline-flex size-12 items-center justify-center rounded-full border border-indigo-600 bg-indigo-600 text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none dark:border-indigo-300 dark:bg-indigo-300 dark:text-gray-900 dark:hover:bg-indigo-200 dark:focus-visible:ring-indigo-700"
        href="#"
      >
        <span className="sr-only">Add to cart</span>

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </a>

      <a
        className="inline-flex size-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-4 focus-visible:ring-slate-200 focus-visible:outline-none dark:border-slate-600 dark:bg-gray-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-700"
        href="#"
      >
        <span className="sr-only">Add to cart</span>

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </a>
    </div>
  )
}
