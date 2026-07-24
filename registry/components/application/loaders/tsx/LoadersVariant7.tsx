import type { HTMLAttributes } from 'react'

export type LoadersVariant7Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LoadersVariant7({ className, ...props }: LoadersVariant7Props) {
  return (
    <div className={className} {...props}>
      <div className="flex gap-2" role="status" aria-label="Loading">
        <span
          className="size-3 animate-bounce rounded-full bg-indigo-600"
          aria-hidden="true"
        ></span>
        <span
          className="size-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:0.2s]"
          aria-hidden="true"
        ></span>
        <span
          className="size-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:0.4s]"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  )
}
