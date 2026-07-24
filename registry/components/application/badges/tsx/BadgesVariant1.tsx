import type { HTMLAttributes } from 'react'

export type BadgesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BadgesVariant1({ className, ...props }: BadgesVariant1Props) {
  return (
    <div className={className} {...props}>
      <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
        Live
      </span>

      <span className="rounded-full border border-purple-500 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
        Live
      </span>
    </div>
  )
}
