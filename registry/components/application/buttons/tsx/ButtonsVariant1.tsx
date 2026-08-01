import type { HTMLAttributes } from 'react'

export type ButtonsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant1({ className, ...props }: ButtonsVariant1Props) {
  return (
    <div className={className} {...props}>
      <button type="button">Invite teammates</button>
    </div>
  )
}
