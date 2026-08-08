import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PopoverVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PopoverVariant2Dark({
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
}: PopoverVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="relative inline-block">
            <button
              type="button"
              aria-expanded="true"
              aria-haspopup="dialog"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 py-1 pl-1 pr-3 text-sm font-medium text-gray-200 shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-100 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <img
                src="https://i.pravatar.cc/64?img=32"
                alt=""
                className="size-6 rounded-full object-cover"
              />
              Priya Shah
            </button>
      
            <div
              role="dialog"
              aria-label="Priya Shah"
              className="absolute left-0 top-full z-10 mt-2 w-72 rounded-lg border border-gray-700 bg-gray-900 p-4 text-left shadow-lg shadow-black/40"
            >
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/96?img=32"
                  alt=""
                  className="size-12 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-white">Priya Shah</h3>
                  <p className="text-sm text-gray-400">Product Design · Tessera</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Leads the design system team. Usually online weekdays 9am–6pm IST.
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800"
                >
                  View profile
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
