import type { HTMLAttributes } from 'react'

export type AvatarsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AvatarsVariant3({ className, ...props }: AvatarsVariant3Props) {
  return (
    <div className={className} {...props}>
      <span className="relative inline-flex">
            <span
              aria-label="Maya Chen"
              className="grid size-11 place-items-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700"
            >
              MC
            </span>
            <span
              aria-hidden="true"
              className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-white bg-emerald-500"
            ></span>
          </span>
    </div>
  )
}
