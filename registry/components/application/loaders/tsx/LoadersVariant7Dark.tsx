import type { HTMLAttributes } from 'react'

export type LoadersVariant7DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LoadersVariant7Dark({ className, ...props }: LoadersVariant7DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="flex gap-2" role="status" aria-label="Loading">
        <span
          className="size-3 animate-bounce rounded-full bg-indigo-600 dark:bg-indigo-300"
          aria-hidden="true"
        ></span>
        <span
          className="size-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:0.2s] dark:bg-indigo-300"
          aria-hidden="true"
        ></span>
        <span
          className="size-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:0.4s] dark:bg-indigo-300"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  )
}
