export type HoverPreviewCardVariant1DarkProps = {
  linkText: string
  href: string
  previewBadge: string
  previewTitle: string
  previewDescription: string
  beforeText?: string
  afterText?: string
}

/**
 * Copy-and-own Tailwind component. Inline text link that reveals a rich
 * preview popover (badge, title, description) above it on hover, using
 * CSS group-hover rather than JS-driven positioning.
 */
export function HoverPreviewCardDark({ linkText, href, previewBadge, previewTitle, previewDescription, beforeText, afterText }: HoverPreviewCardVariant1DarkProps) {
  return (
    <p className="text-sm text-gray-300">
      {beforeText}
      <span className="group relative inline-block">
        <a href={href} className="font-medium text-blue-400 underline decoration-blue-400/40 underline-offset-2 hover:decoration-blue-400">
          {linkText}
        </a>

        <span
          role="tooltip"
          className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 w-72 -translate-x-1/2 rounded-lg border border-gray-700 bg-gray-800 p-3 opacity-0 shadow-lg transition-opacity duration-150 group-hover:visible group-hover:opacity-100"
        >
          <span className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white text-xs font-bold text-gray-900">{previewBadge}</span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-white">{previewTitle}</span>
              <span className="mt-0.5 block text-xs text-gray-400">{previewDescription}</span>
            </span>
          </span>
        </span>
      </span>
      {afterText}
    </p>
  )
}
