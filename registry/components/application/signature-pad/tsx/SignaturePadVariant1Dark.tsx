import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SignaturePadVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Replaces the component's default content while preserving its outer container. */
  children?: ReactNode
  /** Transforms the default content without copying the component's internal markup. */
  renderContent?: (defaultContent: ReactNode) => ReactNode
  /** Renders immediately before the main content. */
  before?: ReactNode
  /** Renders immediately after the main content. */
  after?: ReactNode
  /** Selects an application state. The default state preserves the original component UI. */
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

/**
 * Copy-and-own Tailwind component with content slots and explicit application states.
 * Omitting the optional props preserves the original markup and visual design.
 */
export function SignaturePadVariant1Dark({
  className,
  children,
  renderContent,
  before,
  after,
  state = 'default',
  loadingContent,
  emptyContent,
  errorContent,
  ...props
}: SignaturePadVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm">
            <span className="block text-sm font-medium text-gray-300" id="signature-pad-label-dark">Sign below</span>
            <div className="relative mt-1.5 h-40 w-full rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
              <svg
                aria-hidden="true"
                viewBox="0 0 320 160"
                className="absolute inset-0 size-full text-white"
              >
                <path
                  d="M30 110 C 50 60, 70 60, 85 100 S 120 130, 135 90 S 160 40, 180 95 S 210 140, 230 85 S 260 45, 280 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                role="img"
                aria-label="Signature drawing area"
                className="absolute inset-x-4 bottom-3 border-t border-dashed border-gray-700"
              ></div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-gray-400">Draw your signature using your mouse or finger.</p>
              <div className="flex shrink-0 gap-2">
                <button type="button" className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-200 hover:bg-gray-800">
                  Undo
                </button>
                <button type="button" className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-200 hover:bg-gray-800">
                  Clear
                </button>
              </div>
            </div>
          </div>
    </>
  )
  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? <span role="status">Loading…</span>)
      : state === 'empty'
        ? (emptyContent ?? <span>No content available.</span>)
        : state === 'error'
          ? (errorContent ?? <span role="alert">Something went wrong.</span>)
          : renderContent
            ? renderContent(defaultContent)
            : defaultContent)

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
