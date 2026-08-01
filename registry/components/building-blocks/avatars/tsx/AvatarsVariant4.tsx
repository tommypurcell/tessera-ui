import type { HTMLAttributes } from 'react'

export type AvatarsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AvatarsVariant4({ className, ...props }: AvatarsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div className="flex -space-x-3">
            <span
              aria-label="Ava Wilson"
              className="grid size-10 place-items-center rounded-full border-2 border-white bg-slate-900 text-xs font-semibold text-white"
            >
              AW
            </span>
            <span
              aria-label="Maya Chen"
              className="grid size-10 place-items-center rounded-full border-2 border-white bg-blue-50 text-xs font-semibold text-blue-700"
            >
              MC
            </span>
            <span
              aria-label="Noah Patel"
              className="grid size-10 place-items-center rounded-full border-2 border-white bg-amber-100 text-xs font-semibold text-amber-800"
            >
              NP
            </span>
          </div>
    </div>
  )
}
