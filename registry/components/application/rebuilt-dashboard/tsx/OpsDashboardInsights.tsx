import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OpsDashboardInsightsProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function OpsDashboardInsights({
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
}: OpsDashboardInsightsProps) {
  const defaultContent = (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Throughput by hub
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">Completed outbound volume</h2>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  Today
                </span>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="grid h-64 grid-cols-[40px_minmax(0,1fr)] gap-4">
                  <div className="flex flex-col justify-between pb-7 text-[11px] font-medium text-slate-400">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 grid grid-rows-4">
                      {[0, 1, 2, 3].map((line) => (
                        <div key={line} className="border-t border-dashed border-slate-200" />
                      ))}
                    </div>
                    <div className="relative grid h-full grid-cols-4 gap-4">
                      {[
                        ['West', 84, 'bg-slate-950'],
                        ['Central', 72, 'bg-slate-700'],
                        ['East', 58, 'bg-amber-500'],
                        ['Returns', 36, 'bg-slate-300'],
                      ].map(([label, height, tone]) => (
                        <div key={label} className="grid h-full grid-rows-[auto_minmax(0,1fr)_auto] gap-3">
                          <span className="text-center text-sm font-semibold text-slate-700">{height}%</span>
                          <div className="flex h-full items-end">
                            <div className="flex h-full w-full items-end rounded-t-[1.25rem] bg-white/80 px-1.5 pt-2 shadow-sm ring-1 ring-slate-200">
                              <div
                                className={`w-full rounded-t-[1rem] ${tone}`}
                                style={{ height: `${height}%`, minHeight: '72px' }}
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-semibold text-slate-950">{label}</p>
                            <p className="text-xs text-slate-500">target pace</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ['Best hub', 'West', 'Outbound lane mix holding'],
                    ['Risk hub', 'East', 'Staffing below target pace'],
                    ['Returns drag', '36%', 'Backlog still suppressing output'],
                  ].map(([label, value, note]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {label}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-slate-950">{value}</p>
                      <p className="mt-1 text-sm text-slate-600">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Exception mix
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">What is causing delays</h2>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  74 issues
                </span>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
                <div className="relative mx-auto size-40 rounded-full bg-[conic-gradient(#0f172a_0_38%,#f59e0b_38%_67%,#e11d48_67%_84%,#cbd5e1_84%_100%)]">
                  <div className="absolute inset-6 rounded-full bg-slate-50" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <p className="text-3xl font-semibold tracking-tight text-slate-950">74</p>
                      <p className="text-sm text-slate-500">open exceptions</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ['Routing', '38%', 'Highest share of exceptions'],
                    ['Carrier capacity', '29%', 'Mostly affecting east coast'],
                    ['Inventory mismatch', '17%', 'Clustered in two hubs'],
                    ['Other', '16%', 'Long tail of smaller issues'],
                  ].map(([label, share, note], index) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`size-3 rounded-full ${
                              index === 0
                                ? 'bg-slate-950'
                                : index === 1
                                  ? 'bg-amber-500'
                                  : index === 2
                                    ? 'bg-rose-600'
                                    : 'bg-slate-300'
                            }`}
                          />
                          <p className="text-sm font-semibold text-slate-950">{label}</p>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{share}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
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
