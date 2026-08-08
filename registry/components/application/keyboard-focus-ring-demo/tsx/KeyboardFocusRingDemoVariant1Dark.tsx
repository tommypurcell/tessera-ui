import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type KeyboardFocusRingDemoVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function KeyboardFocusRingDemoVariant1Dark({
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
}: KeyboardFocusRingDemoVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-sm">
      <p className="text-sm font-semibold text-white">Tab order</p>
      <p className="mt-1 text-xs text-gray-400">Each control shows its position in the keyboard tab sequence.</p>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="relative">
          <span className="absolute -left-2 -top-2 z-10 flex size-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-gray-900">1</span>
          <button type="button" className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm outline outline-2 outline-offset-2 outline-blue-400">Save changes</button>
        </div>

        <div className="relative">
          <span className="absolute -left-2 -top-2 z-10 flex size-4 items-center justify-center rounded-full bg-gray-600 text-[10px] font-bold text-white">2</span>
          <a href="#" className="rounded-sm text-sm font-medium text-gray-300 underline decoration-gray-600 underline-offset-2">Cancel</a>
        </div>

        <div className="relative">
          <span className="absolute -left-2 -top-2 z-10 flex size-4 items-center justify-center rounded-full bg-gray-600 text-[10px] font-bold text-white">3</span>
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input type="checkbox" defaultChecked className="size-4 rounded border-gray-600 bg-gray-800 text-gray-100 focus:ring-gray-100" />
            Notify team
          </label>
        </div>

        <div className="relative">
          <span className="absolute -left-2 -top-2 z-10 flex size-4 items-center justify-center rounded-full bg-gray-600 text-[10px] font-bold text-white">4</span>
          <input type="text" defaultValue="acme-workspace" className="h-9 w-36 rounded-md border border-gray-700 bg-gray-800 px-2.5 text-sm text-white shadow-sm" />
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-md bg-white/5 p-3 text-xs text-gray-400">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mt-0.5 size-3.5 shrink-0 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
        The visible ring on "Save changes" shows the current keyboard focus — it appears for keyboard users only, not on mouse click.
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
