import type { HTMLAttributes } from 'react'

export type ButtonsVariant5DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant5Dark({ className, ...props }: ButtonsVariant5DarkProps) {
  return (
    <div className={className} {...props}>
      <a
        className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-indigo-600 underline decoration-slate-300 decoration-2 underline-offset-4 transition-colors hover:text-indigo-700 hover:decoration-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none dark:text-indigo-300 dark:decoration-slate-600 dark:hover:text-indigo-200 dark:hover:decoration-indigo-400 dark:focus-visible:ring-indigo-700"
        href="#"
      >
        View details
      </a>

      <a
        className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-4 focus-visible:ring-slate-200 focus-visible:outline-none dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-700"
        href="#"
      >
        Save draft
      </a>
    </div>
  )
}
