import type { HTMLAttributes } from 'react'

export type RebuiltMotionVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RebuiltMotionVariant1({ className, ...props }: RebuiltMotionVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="grid w-full max-w-2xl gap-4">
            <div
              className="overflow-hidden rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600"
            >
              <div className="whitespace-nowrap">
                Clear signals · Calm motion · Better focus &nbsp; · &nbsp; Clear signals · Calm motion ·
                Better focus
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="row-span-2 rounded-2xl bg-slate-900 p-5 text-white">
                Focus<br /><span className="text-sm text-slate-300">A quiet primary surface.</span>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4 text-blue-900">Compose</div>
              <div className="rounded-2xl border border-slate-200 p-4">Ship</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold tabular-nums">48,240</span
              ><span className="text-sm text-emerald-700">+12.8%</span>
            </div>
            <div className="relative h-px overflow-hidden bg-slate-200">
              <span className="absolute inset-y-0 left-0 w-1/4 bg-blue-500"></span>
            </div>
          </div>
    </div>
  )
}
