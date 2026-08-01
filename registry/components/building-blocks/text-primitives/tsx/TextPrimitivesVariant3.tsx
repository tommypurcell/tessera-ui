import type { HTMLAttributes } from 'react'

export type TextPrimitivesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextPrimitivesVariant3({ className, ...props }: TextPrimitivesVariant3Props) {
  return (
    <div className={className} {...props}>
      <p className="max-w-xs text-sm leading-6 text-slate-600">
            Visible to everyone with workspace access.
          </p>
    </div>
  )
}
