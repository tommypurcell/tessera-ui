import type { HTMLAttributes } from 'react'

export type ButtonsVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant1Dark({ className, ...props }: ButtonsVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <a
        className="inline-flex items-center justify-center rounded-full border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none dark:border-indigo-300 dark:bg-indigo-300 dark:text-gray-900 dark:hover:bg-indigo-200 dark:focus-visible:ring-indigo-700"
        href="#"
      >
        Get started
      </a>

      <a
        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-4 focus-visible:ring-slate-200 focus-visible:outline-none dark:border-slate-600 dark:bg-gray-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-700"
        href="#"
      >
        Learn more
      </a>
    </div>
  )
}
