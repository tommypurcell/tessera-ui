import type { HTMLAttributes } from 'react'

export type IconFramesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function IconFramesVariant1({ className, ...props }: IconFramesVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="grid size-10 place-items-center rounded-lg bg-blue-50 text-lg text-blue-700">✦</div>
    </div>
  )
}
