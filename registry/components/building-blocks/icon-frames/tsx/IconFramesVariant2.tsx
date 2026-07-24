import type { HTMLAttributes } from 'react'

export type IconFramesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function IconFramesVariant2({ className, ...props }: IconFramesVariant2Props) {
  return (
    <div className={className} {...props}>
      <div
            className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-lg text-slate-600"
          >
            ⌘
          </div>
    </div>
  )
}
