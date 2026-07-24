import type { HTMLAttributes } from 'react'

export type DividersVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DividersVariant1({ className, ...props }: DividersVariant1Props) {
  return (
    <div className={className} {...props}>
      <hr className="w-80 border-0 border-t border-slate-300" />
    </div>
  )
}
