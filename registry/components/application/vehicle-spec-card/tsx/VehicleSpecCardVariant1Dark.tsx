import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type VehicleSpecCardVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function VehicleSpecCardVariant1Dark({
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
}: VehicleSpecCardVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-slate-700 to-slate-900">
        <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-gray-900/90 px-2 py-0.5 text-[11px] font-medium text-gray-200 shadow-sm ring-1 ring-gray-700">Certified</span>
      </div>

      <div className="p-4">
        <p className="text-sm font-semibold text-white">2023 Audi A4 Premium</p>
        <p className="text-xs text-gray-400">Glacier White Metallic &middot; VIN ending 4821</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-200">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            18,240 mi
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-200">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.67 0-1.189-.578-1.119-1.243l1.263-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            Gasoline
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-200">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            Automatic
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-700 pt-3">
          <p className="text-lg font-semibold text-white">$31,450</p>
          <button type="button" className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-900 shadow-sm hover:bg-gray-200">View listing</button>
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
