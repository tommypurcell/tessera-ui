import type { HTMLAttributes } from 'react'

export type ButtonsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant2({ className, ...props }: ButtonsVariant2Props) {
  return (
    <div className={className} {...props}>
      <button type="button">Save as draft</button>
    </div>
  )
}
