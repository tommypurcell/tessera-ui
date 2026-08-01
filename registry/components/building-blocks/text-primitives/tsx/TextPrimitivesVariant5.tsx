import type { HTMLAttributes } from 'react'

export type TextPrimitivesVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextPrimitivesVariant5({ className, ...props }: TextPrimitivesVariant5Props) {
  return (
    <div className={className} {...props}>
      <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">12 seats</span> left in this workspace
          </p>
    </div>
  )
}
