import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CandidatePipelineStageVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CandidatePipelineStageVariant1({
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
}: CandidatePipelineStageVariant1Props) {
  const defaultContent = (
    <>
<div className="w-64 rounded-lg border border-gray-200 bg-gray-50 p-3">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-violet-500"></span>
          <p className="text-sm font-semibold text-gray-900">Interview</p>
        </div>
        <span className="flex size-5 items-center justify-center rounded-full bg-gray-200 text-[11px] font-semibold text-gray-700">4</span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="rounded-md border border-gray-200 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">NP</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-900">Nadia Petrova</p>
              <p className="truncate text-xs text-gray-500">Senior Frontend Engineer</p>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">Referral</span>
            <span className="flex items-center gap-0.5 text-xs font-medium text-amber-500">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.454 1.405 1.02L10 15.591l4.069 2.485c.713.435 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
              </svg>
              4.8
            </span>
          </div>
        </div>

        <div className="rounded-md border border-gray-200 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">DK</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-900">David Kim</p>
              <p className="truncate text-xs text-gray-500">Product Designer</p>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">LinkedIn</span>
            <span className="flex items-center gap-0.5 text-xs font-medium text-amber-500">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.454 1.405 1.02L10 15.591l4.069 2.485c.713.435 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
              </svg>
              4.5
            </span>
          </div>
        </div>

        <div className="rounded-md border border-gray-200 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">RT</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-900">Ravi Teja</p>
              <p className="truncate text-xs text-gray-500">Backend Engineer</p>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">Applied</span>
          </div>
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
