import type { HTMLAttributes } from 'react'

export type SkipLinksVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkipLinksVariant1({ className, ...props }: SkipLinksVariant1Props) {
  return (
    <div className={className} {...props}>
      <a
        href="#mainContent"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full rounded-sm bg-blue-700 px-12 py-3 text-sm font-semibold text-white transition-transform hover:bg-blue-600 focus:translate-y-4 active:bg-blue-600"
      >
        Skip to main content
      </a>
    </div>
  )
}
