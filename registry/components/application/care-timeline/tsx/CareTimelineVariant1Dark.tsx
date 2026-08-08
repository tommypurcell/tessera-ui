import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CareTimelineVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CareTimelineVariant1Dark({
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
}: CareTimelineVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-sm">
      <p className="text-sm font-semibold text-white">Care history</p>

      <ol className="mt-4 space-y-6">
        <li className="relative flex gap-3 pb-6 before:absolute before:left-[15px] before:top-8 before:h-full before:w-px before:bg-gray-700">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-900 text-xs font-semibold text-blue-300">DR</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-white">Dr. Rivera</p>
              <span className="inline-flex items-center rounded-full bg-blue-950 px-2 py-0.5 text-[11px] font-medium text-blue-300">Checkup</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-400">Annual physical &middot; Mar 14, 2026</p>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-400">Vitals normal. Recommended follow-up bloodwork in 6 months.</p>
          </div>
        </li>

        <li className="relative flex gap-3 pb-6 before:absolute before:left-[15px] before:top-8 before:h-full before:w-px before:bg-gray-700">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-900 text-xs font-semibold text-violet-300">LB</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-white">Quest Labs</p>
              <span className="inline-flex items-center rounded-full bg-violet-950 px-2 py-0.5 text-[11px] font-medium text-violet-300">Lab work</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-400">Comprehensive metabolic panel &middot; Feb 2, 2026</p>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-400">All markers within normal range. Results shared with Dr. Rivera.</p>
          </div>
        </li>

        <li className="relative flex gap-3 pb-6 before:absolute before:left-[15px] before:top-8 before:h-full before:w-px before:bg-gray-700">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-xs font-semibold text-emerald-300">DR</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-white">Dr. Rivera</p>
              <span className="inline-flex items-center rounded-full bg-emerald-950 px-2 py-0.5 text-[11px] font-medium text-emerald-300">Prescription</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-400">Renewed allergy medication &middot; Jan 18, 2026</p>
          </div>
        </li>

        <li className="relative flex gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-900 text-xs font-semibold text-amber-300">DC</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-white">Dr. Chen</p>
              <span className="inline-flex items-center rounded-full bg-amber-950 px-2 py-0.5 text-[11px] font-medium text-amber-300">Procedure</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-400">Minor outpatient procedure &middot; Dec 5, 2025</p>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-400">Procedure completed without complications. Follow-up not required.</p>
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
