import type { HTMLAttributes } from 'react'

export type MediaPrimitivesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function MediaPrimitivesVariant3({ className, ...props }: MediaPrimitivesVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="relative aspect-video w-72 overflow-hidden rounded-2xl bg-slate-300">
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent px-4 py-3 text-sm text-white">
              Team workspace preview
            </div>
          </div>
    </div>
  )
}
