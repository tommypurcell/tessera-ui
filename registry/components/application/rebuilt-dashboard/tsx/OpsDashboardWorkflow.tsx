import type { HTMLAttributes } from 'react'

export type OpsDashboardWorkflowProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function OpsDashboardWorkflow({ className, ...props }: OpsDashboardWorkflowProps) {
  return (
    <div className={className} {...props}>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)]">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Fulfillment pipeline
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">Where orders are sitting right now</h2>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  Updated 2 min ago
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {[
                  ['Queued', '1,240', 'Normal'],
                  ['Picking', '860', 'Healthy'],
                  ['Packed', '620', 'On pace'],
                  ['Exceptions', '74', 'Needs review'],
                ].map(([label, value, note], index) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
                    <p className={`mt-2 text-sm ${index === 3 ? 'text-amber-700' : 'text-slate-600'}`}>
                      {note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Cutoff readiness</span>
                  <span>82%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[82%] rounded-full bg-slate-950" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ['West hub', 'On track'],
                    ['Central hub', 'Watch staffing'],
                    ['East hub', 'Delayed'],
                  ].map(([hub, status], index) => (
                    <div key={hub} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm font-medium text-slate-500">{hub}</p>
                      <p
                        className={`mt-2 text-sm font-semibold ${
                          index === 2
                            ? 'text-rose-700'
                            : index === 1
                              ? 'text-amber-700'
                              : 'text-emerald-700'
                        }`}
                      >
                        {status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Wait time by division
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-950">Average exception resolution</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">minutes</span>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ['East hub', 49],
                    ['Neurology', 45],
                    ['North lane', 41],
                    ['Returns', 38],
                    ['Central hub', 36],
                  ].map(([label, value], index) => (
                    <div key={label} className="grid grid-cols-[96px_minmax(0,1fr)_32px] items-center gap-3">
                      <p className="text-sm text-slate-600">{label}</p>
                      <div className="h-9 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                        <div
                          className={`h-full rounded-xl ${
                            index === 0 ? 'bg-emerald-400' : index === 1 ? 'bg-sky-400' : 'bg-slate-900'
                          }`}
                          style={{ width: `${(value as number) * 2}%` }}
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-700">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Bottlenecks
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950">The issues that deserve attention first</h2>

              <div className="mt-6 space-y-4">
                {[
                  ['Inbound labeling mismatch', '31 blocked orders', 'High', '82%'],
                  ['Carrier pickup overbooked', '14 shipments at risk', 'Medium', '56%'],
                  ['Returns queue growth', '8 staff-hours behind', 'Medium', '48%'],
                ].map(([title, detail, priority, score], index) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold text-slate-950">{title}</p>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          index === 0
                            ? 'bg-rose-50 text-rose-700 ring-1 ring-rose-100'
                            : 'bg-amber-50 text-amber-700 ring-1 ring-amber-100'
                        }`}
                      >
                        {priority}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{detail}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                        <div
                          className={`h-full rounded-full ${index === 0 ? 'bg-rose-400' : 'bg-amber-400'}`}
                          style={{ width: score as string }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-500">{score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
