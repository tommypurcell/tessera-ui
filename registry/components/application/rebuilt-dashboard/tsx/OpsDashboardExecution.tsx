import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OpsDashboardExecutionProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function OpsDashboardExecution({
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
}: OpsDashboardExecutionProps) {
  const defaultContent = (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)]">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Execution queue
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">Work that should move next</h2>
                </div>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
                >
                  Review all
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <caption className="sr-only">Execution queue table</caption>
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">Task</th>
                      <th scope="col" className="px-6 py-4">Owner</th>
                      <th scope="col" className="px-6 py-4">Priority</th>
                      <th scope="col" className="px-6 py-4">Due</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ['Re-route delayed east coast batch', 'Alicia', 'Critical', '10:15 AM'],
                      ['Approve overflow carrier capacity', 'Mason', 'High', '11:00 AM'],
                      ['Clear barcode exception backlog', 'Priya', 'High', '12:30 PM'],
                      ['Review damaged returns audit', 'Jon', 'Medium', '3:00 PM'],
                    ].map(([task, owner, priority, due], index) => (
                      <tr key={task} className={index === 0 ? 'bg-rose-50/40' : undefined}>
                        <th scope="row" className="px-6 py-4 font-medium text-slate-950">{task}</th>
                        <td className="px-6 py-4 text-slate-600">{owner}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              priority === 'Critical'
                                ? 'bg-rose-50 text-rose-700 ring-1 ring-rose-100'
                                : priority === 'High'
                                  ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-100'
                                  : 'bg-slate-100 text-slate-700 ring-1 ring-slate-200'
                            }`}
                          >
                            {priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{due}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:grid-cols-3">
                {[
                  ['Critical due soon', '2 tasks'],
                  ['Owners engaged', '4 people'],
                  ['Median queue age', '38 min'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-4">
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Incident room
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">Current escalations</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ['Open', '2'],
                    ['Watching', '3'],
                    ['Escalation SLA', '41m'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    ['Priority lane congestion', 'Carrier ETA instability across 2 routes'],
                    ['API sync retry loop', 'Three warehouse updates waiting to settle'],
                  ].map(([title, detail]) => (
                    <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm font-semibold text-slate-950">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Next handoff
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">Shift notes to carry forward</h2>
                <div className="mt-5 space-y-3">
                  {[
                    ['Staffing check', 'Confirm east hub staffing before the final outbound push.'],
                    ['Remediation watch', 'Keep an eye on barcode remediation throughput after lunch.'],
                    ['Carrier backup', 'Re-check carrier backup allocation if delays exceed the current threshold.'],
                  ].map(([title, detail]) => (
                    <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-950">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
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
