import type { HTMLAttributes } from 'react'

export type AvatarsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AvatarsVariant1({ className, ...props }: AvatarsVariant1Props) {
  return (
    <div className={className} {...props}>
      <span
            aria-label="Ava Wilson"
            className="grid size-10 place-items-center rounded-full bg-slate-900 text-sm font-semibold tracking-wide text-white"
          >
            AW
          </span>
    </div>
  )
}
