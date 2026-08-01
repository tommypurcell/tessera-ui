import type { HTMLAttributes } from 'react'

export type MediaPrimitivesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function MediaPrimitivesVariant1({ className, ...props }: MediaPrimitivesVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="aspect-video w-72 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <div className="grid h-full place-items-center text-sm text-slate-500">Preview frame</div>
          </div>
    </div>
  )
}
