import type { HTMLAttributes } from 'react'

export type LayoutPrimitivesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LayoutPrimitivesVariant2({ className, ...props }: LayoutPrimitivesVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="max-w-[34ch] text-sm leading-6 text-slate-600">
              Keep long-form supporting text inside a narrower readable container.
            </p>
          </div>
    </div>
  )
}
