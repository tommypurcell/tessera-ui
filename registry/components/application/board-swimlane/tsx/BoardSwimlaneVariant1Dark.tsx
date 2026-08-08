import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type BoardSwimlaneVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function BoardSwimlaneVariant1Dark({
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
}: BoardSwimlaneVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <div className="grid grid-cols-[140px_1fr_1fr_1fr] border-b border-gray-700 bg-white/5 text-xs font-semibold uppercase tracking-wide text-gray-400">
        <div className="px-3 py-2">Team</div>
        <div className="border-l border-gray-700 px-3 py-2">To Do</div>
        <div className="border-l border-gray-700 px-3 py-2">In Progress</div>
        <div className="border-l border-gray-700 px-3 py-2">Done</div>
      </div>

      <div className="grid grid-cols-[140px_1fr_1fr_1fr] border-b border-gray-700">
        <div className="flex items-center gap-2 px-3 py-3">
          <span className="size-2 rounded-full bg-violet-400"></span>
          <span className="text-sm font-medium text-white">Design</span>
        </div>
        <div className="space-y-2 border-l border-gray-700 p-2">
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-200 shadow-sm">Icon set refresh</div>
        </div>
        <div className="space-y-2 border-l border-gray-700 p-2">
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-200 shadow-sm">Empty-state illustrations</div>
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-200 shadow-sm">Dark mode audit</div>
        </div>
        <div className="space-y-2 border-l border-gray-700 p-2">
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-500 shadow-sm line-through">Button variants</div>
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr_1fr_1fr]">
        <div className="flex items-center gap-2 px-3 py-3">
          <span className="size-2 rounded-full bg-blue-400"></span>
          <span className="text-sm font-medium text-white">Engineering</span>
        </div>
        <div className="space-y-2 border-l border-gray-700 p-2">
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-200 shadow-sm">Rate limiting</div>
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-200 shadow-sm">Webhook retries</div>
        </div>
        <div className="space-y-2 border-l border-gray-700 p-2">
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-200 shadow-sm">Registry search index</div>
        </div>
        <div className="space-y-2 border-l border-gray-700 p-2">
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-500 shadow-sm line-through">CLI auth flow</div>
          <div className="rounded-md border border-gray-700 bg-gray-800 p-2 text-xs text-gray-500 shadow-sm line-through">Theme scan v1</div>
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
