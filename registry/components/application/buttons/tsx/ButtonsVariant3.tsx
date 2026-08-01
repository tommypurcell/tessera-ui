import type { HTMLAttributes } from 'react'

export type ButtonsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ButtonsVariant3({ className, ...props }: ButtonsVariant3Props) {
  return (
    <div className={className} {...props}>
      <button type="button" aria-label="Download report"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 20h14" /></svg></button>
          <button type="button" aria-label="More actions"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h.01M12 12h.01M19 12h.01" /></svg></button>
    </div>
  )
}
