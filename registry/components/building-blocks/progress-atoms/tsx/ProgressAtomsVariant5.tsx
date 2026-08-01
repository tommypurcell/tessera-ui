import type { HTMLAttributes } from 'react'

export type ProgressAtomsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressAtomsVariant5({ className, ...props }: ProgressAtomsVariant5Props) {
  return (
    <div className={className} {...props}>
      <div className="grid w-64 gap-2">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-slate-900">Storage</span>
              <span className="text-xs text-slate-500">64%</span>
            </div>
            <div
              role="progressbar"
              aria-label="Storage used"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={64}
              className="h-2 overflow-hidden rounded-full bg-slate-200"
            >
              <span className="block h-full w-[64%] rounded-full bg-amber-500"></span>
            </div>
          </div>
    </div>
  )
}
