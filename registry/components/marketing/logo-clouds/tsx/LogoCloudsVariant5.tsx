import type { HTMLAttributes } from 'react'

export type LogoCloudsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LogoCloudsVariant5({ className, ...props }: LogoCloudsVariant5Props) {
  return (
    <div className={className} {...props}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              Trusted by teams shipping fast
            </p>
            <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Northlane</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Vaultform</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Ridgeline</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Circuiton</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Fernwell</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Basecove</span>
            </div>
          </div>
    </div>
  )
}
