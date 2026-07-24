import type { HTMLAttributes } from 'react'

export type SkipLinksVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkipLinksVariant3({ className, ...props }: SkipLinksVariant3Props) {
  return (
    <div className={className} {...props}>
      <nav
        className="absolute inset-x-0 top-0 flex -translate-y-full items-center gap-3 rounded-sm bg-gray-100 p-4 transition-transform focus-within:translate-y-0"
        aria-label="Skip to"
      >
        <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Skip to:</p>

        <div className="flex flex-wrap gap-2">
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
