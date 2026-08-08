import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CareTimelineVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CareTimelineVariant1({
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
}: CareTimelineVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">Care history</p>

      <ol className="mt-4 space-y-6">
        <li className="relative flex gap-3 pb-6 before:absolute before:left-[15px] before:top-8 before:h-full before:w-px before:bg-gray-200">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">DR</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-900">Dr. Rivera</p>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">Checkup</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-500">Annual physical &middot; Mar 14, 2026</p>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-600">Vitals normal. Recommended follow-up bloodwork in 6 months.</p>
          </div>
        </li>

        <li className="relative flex gap-3 pb-6 before:absolute before:left-[15px] before:top-8 before:h-full before:w-px before:bg-gray-200">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">LB</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-900">Quest Labs</p>
              <span className="inline-flex items-center rounded-full bg-violet-50 px-2 py-0.5 text-[11px] font-medium text-violet-700">Lab work</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-500">Comprehensive metabolic panel &middot; Feb 2, 2026</p>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-600">All markers within normal range. Results shared with Dr. Rivera.</p>
          </div>
        </li>

        <li className="relative flex gap-3 pb-6 before:absolute before:left-[15px] before:top-8 before:h-full before:w-px before:bg-gray-200">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">DR</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-900">Dr. Rivera</p>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">Prescription</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-500">Renewed allergy medication &middot; Jan 18, 2026</p>
          </div>
        </li>

        <li className="relative flex gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">DC</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-900">Dr. Chen</p>
              <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">Procedure</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-500">Minor outpatient procedure &middot; Dec 5, 2025</p>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-600">Procedure completed without complications. Follow-up not required.</p>
          </div>
        </li>
      </ol>
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
