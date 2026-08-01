import type { HTMLAttributes } from 'react'

export type CalloutsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CalloutsVariant2({ className, ...props }: CalloutsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="flex w-96 items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 size-4 shrink-0 text-emerald-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <p className="text-sm leading-6 text-emerald-900">
              <span className="font-semibold">Tip.</span>
              This callout is for a faster path or an optional shortcut worth knowing about.
            </p>
          </div>
    </div>
  )
}
