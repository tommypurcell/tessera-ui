import type { HTMLAttributes } from 'react'

export type CalloutsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CalloutsVariant3({ className, ...props }: CalloutsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="flex w-96 items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 size-4 shrink-0 text-amber-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <p className="text-sm leading-6 text-amber-900">
              <span className="font-semibold">Warning.</span>
              This callout marks a step that can break something if skipped or done out of order.
            </p>
          </div>
    </div>
  )
}
