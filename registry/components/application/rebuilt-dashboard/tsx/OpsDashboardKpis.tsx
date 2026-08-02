import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OpsDashboardKpisProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function OpsDashboardKpis({
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
}: OpsDashboardKpisProps) {
  const kpis = [
    { label: 'Orders routed', value: '12,480', delta: '+8.2%', note: 'vs. yesterday', bars: [32, 54, 68, 44, 76, 58, 82] },
    { label: 'Late departures', value: '14', delta: '-6', note: 'lower than target', bars: [46, 38, 34, 29, 26, 18, 22] },
    { label: 'Warehouse backlog', value: '218', delta: '+3.1%', note: 'watch east region', bars: [22, 28, 31, 36, 42, 46, 52] },
    { label: 'Open incidents', value: '5', delta: '2 critical', note: 'needs escalation', bars: [14, 12, 18, 16, 22, 20, 24] },
  ] as const

  const defaultContent = (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {kpis.map(({ label, value, delta, note, bars }, index) => (
              <article
                key={label}
                className={`rounded-2xl border p-5 shadow-sm ${
                  index === 1 ? 'border-emerald-200 bg-emerald-50/60' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-slate-500">{label}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      index === 0
                        ? 'bg-sky-50 text-sky-700 ring-1 ring-sky-100'
                        : index === 1
                          ? 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200'
                          : index === 2
                            ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-100'
                            : 'bg-rose-50 text-rose-700 ring-1 ring-rose-100'
                    }`}
                  >
                    {delta}
                  </span>
                </div>
                <p className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">{value}</p>
                <p className="mt-2 text-sm text-slate-600">{note}</p>
                <div className="mt-5 flex h-12 items-end gap-1.5">
                  {bars.map((bar, barIndex) => (
                    <div
                      key={barIndex}
                      className={`flex-1 rounded-t-lg ${
                        index === 0
                          ? 'bg-sky-400/85'
                          : index === 1
                            ? 'bg-emerald-400/85'
                            : index === 2
                              ? 'bg-amber-400/85'
                              : 'bg-rose-300/85'
                      }`}
                      style={{ height: `${bar}%` }}
                    />
                  ))}
                </div>
              </article>
            ))}
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
