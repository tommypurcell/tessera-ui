import type { HTMLAttributes } from 'react'

export type TypographyPrimitivesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TypographyPrimitivesVariant3({ className, ...props }: TypographyPrimitivesVariant3Props) {
  return (
    <div className={className} {...props}>
      <p className="max-w-[34ch] text-sm leading-6 text-slate-600">
            Use helper text to explain a field or setting without overpowering the primary value.
          </p>
    </div>
  )
}
