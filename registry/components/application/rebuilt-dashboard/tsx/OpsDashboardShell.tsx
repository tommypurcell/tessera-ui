import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OpsDashboardShellProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function OpsDashboardShell({
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
}: OpsDashboardShellProps) {
  const defaultContent = (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid items-start lg:grid-cols-[240px_minmax(0,1fr)]">
              <aside className="border-b border-slate-200 bg-slate-50 p-5 lg:border-r lg:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    O
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Ops Console</p>
                    <p className="text-xs text-slate-500">Northstar Logistics</p>
                  </div>
                </div>

                <nav aria-label="Dashboard navigation" className="mt-8 space-y-1">
                  {[
                    { label: 'Overview', active: true },
                    { label: 'Shipments', active: false },
                    { label: 'Fulfillment', active: false },
                    { label: 'Inventory', active: false },
                    { label: 'Incidents', active: false },
                  ].map(({ label, active }) => (
                    <a
                      key={label}
                      href="#"
                      aria-current={active ? 'page' : undefined}
                      className={`block rounded-xl px-3 py-2.5 text-sm ${
                        active
                          ? 'bg-white font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200'
                          : 'text-slate-600 transition hover:bg-white hover:text-slate-950'
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Shift
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">AM operations</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Handoff window closes in 48 minutes.
                  </p>
                </div>
              </aside>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Operations dashboard
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                      Keep the network on schedule.
                    </h1>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
                    >
                      Export report
                    </button>
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Open incident room
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 pt-5 lg:auto-rows-fr lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,.85fr)]">
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-medium text-slate-500">Today at a glance</p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
                      Dispatch volume is ahead of target, but two hubs are slipping on same-day
                      fulfillment. Exception handling needs to clear before the 2:30 PM outbound
                      cutoff.
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        ['Outbound plan', '92%', 'ahead of target'],
                        ['Exceptions aging', '74', 'needs attention'],
                        ['Carrier reserve', '11 lanes', 'ready to deploy'],
                      ].map(([label, value, note]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {label}
                          </p>
                          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{value}</p>
                          <p className="mt-1 text-sm text-slate-600">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Service health
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-2xl font-semibold tracking-tight text-slate-950">97.4%</p>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                        Stable
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">On-time fulfillment this week</p>
                    <div className="mt-5 grid grid-cols-7 gap-2">
                      {[68, 76, 72, 81, 88, 84, 92].map((height, index) => (
                        <div key={height} className="flex flex-col items-center gap-2">
                          <div className="flex h-16 w-full items-end rounded-xl bg-slate-100 px-1.5 pb-1.5">
                            <div
                              className={`w-full rounded-lg ${
                                index >= 5 ? 'bg-emerald-400' : 'bg-slate-300'
                              }`}
                              style={{ height: `${height}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-medium text-slate-400">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {[
                        ['Carrier SLA', '94.2%', 'Holding steady'],
                        ['Hub uptime', '99.1%', 'No active outage'],
                      ].map(([label, value, note]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {label}
                          </p>
                          <div className="mt-2 flex items-end justify-between gap-3">
                            <p className="text-lg font-semibold text-slate-950">{value}</p>
                            <p className="text-xs font-medium text-slate-500">{note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Live checkpoints
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-950">
                          The next 90 minutes
                        </p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        6 active
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      {[
                        ['10:15', 'Overflow carrier approval'],
                        ['11:00', 'East hub staffing check'],
                        ['11:30', 'Outbound cutoff audit'],
                      ].map(([time, item]) => (
                        <div key={time} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-sm font-semibold text-slate-950">{time}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {[
                        ['Next risk window', '11:20–11:45'],
                        ['Pending approvals', '3 decisions'],
                        ['Coverage buffer', '42 minutes'],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {label}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-slate-950">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Team focus
                    </p>
                    <div className="mt-4 space-y-4">
                      {[
                        ['Exception queue', '68%', 'Reduce east coast aging before noon'],
                        ['Pickup overbooking', '34%', 'Keep risk below alert threshold'],
                        ['Returns audit', '82%', 'Confirm afternoon coverage'],
                      ].map(([label, value, note]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-sm font-semibold text-slate-950">{label}</p>
                            <span className="text-sm font-semibold text-slate-600">{value}</span>
                          </div>
                          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={`h-full rounded-full ${
                                label === 'Pickup overbooking' ? 'bg-amber-400' : 'bg-slate-950'
                              }`}
                              style={{ width: value }}
                            />
                          </div>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
