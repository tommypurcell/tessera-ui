import type { HTMLAttributes } from 'react'

export type CalloutsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CalloutsVariant1({ className, ...props }: CalloutsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="flex w-96 items-start gap-2.5 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 size-4 shrink-0 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm leading-6 text-blue-900">
              <span className="font-semibold">Note.</span>
              This callout draws attention to a detail without interrupting the surrounding steps.
            </p>
          </div>
    </div>
  )
}
