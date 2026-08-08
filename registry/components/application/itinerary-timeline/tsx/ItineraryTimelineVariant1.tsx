import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ItineraryTimelineVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ItineraryTimelineVariant1({
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
}: ItineraryTimelineVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">Lisbon trip</p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Day 1 &middot; Mar 14</p>
        <ol className="mt-2 space-y-3">
          <li className="flex gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium text-gray-900">Flight to Lisbon</p>
                <span className="shrink-0 text-xs text-gray-500">9:40 AM</span>
              </div>
              <p className="text-xs text-gray-500">TAP Air Portugal &middot; JFK &rarr; LIS</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium text-gray-900">Check in — Baixa House Hotel</p>
                <span className="shrink-0 text-xs text-gray-500">3:00 PM</span>
              </div>
              <p className="text-xs text-gray-500">Rua da Prata 12, Lisbon</p>
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Day 2 &middot; Mar 15</p>
        <ol className="mt-2 space-y-3">
          <li className="flex gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium text-gray-900">Belém Tower &amp; Jerónimos walking tour</p>
                <span className="shrink-0 text-xs text-gray-500">10:00 AM</span>
              </div>
              <p className="text-xs text-gray-500">Praça do Império, Belém</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium text-gray-900">Dinner — Cervejaria Ramiro</p>
                <span className="shrink-0 text-xs text-gray-500">7:30 PM</span>
              </div>
              <p className="text-xs text-gray-500">Av. Almirante Reis 1, Lisbon</p>
            </div>
          </li>
        </ol>
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
