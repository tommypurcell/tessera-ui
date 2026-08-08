import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MapListingSplitVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MapListingSplitVariant1Dark({
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
}: MapListingSplitVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="flex h-96 w-full max-w-2xl overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <div className="w-64 shrink-0 overflow-y-auto border-r border-gray-700">
        <div className="flex gap-3 border-b border-gray-800 p-3">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-700 to-blue-900 text-xs font-bold text-white">1</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">Sunset Loft</p>
            <p className="text-xs text-gray-400">2 bed &middot; 1 bath</p>
            <p className="mt-0.5 text-xs font-semibold text-white">$2,400/mo</p>
          </div>
        </div>

        <div className="flex gap-3 border-b border-gray-800 bg-white/5 p-3 ring-1 ring-inset ring-gray-100">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-violet-700 to-violet-900 text-xs font-bold text-white">2</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">Harbor View</p>
            <p className="text-xs text-gray-400">1 bed &middot; 1 bath</p>
            <p className="mt-0.5 text-xs font-semibold text-white">$1,950/mo</p>
          </div>
        </div>

        <div className="flex gap-3 border-b border-gray-800 p-3">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-amber-700 to-amber-900 text-xs font-bold text-white">3</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">Garden Studio</p>
            <p className="text-xs text-gray-400">Studio &middot; 1 bath</p>
            <p className="mt-0.5 text-xs font-semibold text-white">$1,600/mo</p>
          </div>
        </div>

        <div className="flex gap-3 p-3">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-emerald-700 to-emerald-900 text-xs font-bold text-white">4</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">Riverside Flat</p>
            <p className="text-xs text-gray-400">3 bed &middot; 2 bath</p>
            <p className="mt-0.5 text-xs font-semibold text-white">$3,100/mo</p>
          </div>
        </div>
      </div>

      <div className="relative flex-1 bg-gray-800">
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

        <span className="absolute left-[22%] top-[30%] flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[11px] font-bold text-gray-900 shadow">1</span>
        <span className="absolute left-[52%] top-[42%] flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900 shadow-lg ring-4 ring-white/20">2</span>
        <span className="absolute left-[68%] top-[65%] flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[11px] font-bold text-gray-900 shadow">3</span>
        <span className="absolute left-[35%] top-[72%] flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[11px] font-bold text-gray-900 shadow">4</span>
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
