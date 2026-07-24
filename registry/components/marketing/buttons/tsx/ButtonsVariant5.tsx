import type { HTMLAttributes } from 'react'

export type ButtonsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant5({ className, ...props }: ButtonsVariant5Props) {
  return (
    <div className={className} {...props}>
      <a
        className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-indigo-600 underline decoration-slate-300 decoration-2 underline-offset-4 transition-colors hover:text-indigo-700 hover:decoration-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none"
        href="#"
      >
        View details
      </a>

      <a
        className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-4 focus-visible:ring-slate-200 focus-visible:outline-none"
        href="#"
      >
        Save draft
      </a>
    </div>
  )
}
