import type { HTMLAttributes } from 'react'

export type SkipLinksVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkipLinksVariant2({ className, ...props }: SkipLinksVariant2Props) {
  return (
    <div className={className} {...props}>
      <nav
        className="absolute top-0 left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-full rounded-sm bg-gray-100 p-4 transition-transform focus-within:translate-y-4"
        aria-label="Skip to"
      >
        <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Skip to:</p>

        <div className="mt-1 flex flex-wrap gap-2">
          <a
            href="#mainNavigation"
            className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 active:text-blue-600"
          >
            Navigation
          </a>

          <a
            href="#mainContent"
            className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 active:text-blue-600"
          >
            Content
          </a>

          <a
            href="#mainFooter"
            className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 active:text-blue-600"
          >
            Footer
          </a>
        </div>
      </nav>
    </div>
  )
}
