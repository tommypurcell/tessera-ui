'use client'

import { useMemo, useState, type HTMLAttributes, type ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OpsDashboardWorkspaceProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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

type DashboardTab = 'overview' | 'network' | 'capacity' | 'exceptions' | 'incidents'

const tabs: Array<{
  id: DashboardTab
  label: string
  eyebrow: string
  title: string
  summary: string
}> = [
  {
    id: 'overview',
    label: 'Overview',
    eyebrow: 'Operations dashboard',
    title: 'Keep the network on schedule.',
    summary:
      'The AM shift is ahead on outbound throughput, but exception clearing still needs attention before cutoff.',
  },
  {
    id: 'network',
    label: 'Network',
    eyebrow: 'Shipment flow',
    title: 'See where the network is constraining flow.',
    summary:
      'Lane performance, route backlog, and shipment queues are grouped here so the network team has a focused surface.',
  },
  {
    id: 'capacity',
    label: 'Capacity',
    eyebrow: 'Resource planning',
    title: 'Balance staffing, docks, and carrier reserve.',
    summary:
      'Capacity planning needs its own view so staffing, dock loading, and reserve coverage can be assessed together.',
  },
  {
    id: 'exceptions',
    label: 'Exceptions',
    eyebrow: 'Delay analysis',
    title: 'Focus the team on the exceptions that matter.',
    summary:
      'The exception view brings root causes, aging work, and recovery progress together without unrelated dashboard noise.',
  },
  {
    id: 'incidents',
    label: 'Incident room',
    eyebrow: 'Escalation control',
    title: 'Coordinate current escalations and handoff.',
    summary:
      'The incident room isolates active disruptions, ownership, SLAs, and next-shift notes into one operational workspace.',
  },
]

function Surface({
  title,
  eyebrow,
  actions,
  children,
}: {
  title: string
  eyebrow: string
  actions?: ReactNode
  children: ReactNode
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">{title}</h2>
        </div>
        {actions}
      </div>
      <div className="mt-6">{children}</div>
    </article>
  )
}

function StatCard({
  label,
  value,
  note,
  tone = 'slate',
}: {
  label: string
  value: string
  note: string
  tone?: 'slate' | 'sky' | 'emerald' | 'amber' | 'rose'
}) {
  const toneClass =
    tone === 'sky'
      ? 'bg-sky-50 text-sky-700 ring-sky-100'
      : tone === 'emerald'
        ? 'bg-emerald-50 text-emerald-700 ring-emerald-100'
        : tone === 'amber'
          ? 'bg-amber-50 text-amber-700 ring-amber-100'
          : tone === 'rose'
            ? 'bg-rose-50 text-rose-700 ring-rose-100'
            : 'bg-slate-100 text-slate-700 ring-slate-200'

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-2xl font-semibold tracking-tight text-slate-950">{value}</p>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${toneClass}`}>{note}</span>
      </div>
    </div>
  )
}

function OverviewView() {
  const kpis = [
    { label: 'Orders routed', value: '12,480', note: 'vs. yesterday', bars: [32, 54, 68, 44, 76, 58, 82], tone: 'sky' },
    { label: 'Late departures', value: '14', note: 'lower than target', bars: [46, 38, 34, 29, 26, 18, 22], tone: 'emerald' },
    { label: 'Warehouse backlog', value: '218', note: 'watch east region', bars: [22, 28, 31, 36, 42, 46, 52], tone: 'amber' },
    { label: 'Open incidents', value: '5', note: 'needs escalation', bars: [14, 12, 18, 16, 22, 20, 24], tone: 'rose' },
  ] as const

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)]">
        <Surface eyebrow="Today at a glance" title="What needs intervention before noon">
          <p className="max-w-3xl text-sm leading-7 text-slate-600">
            Dispatch volume is ahead of target, but east coast exceptions and pickup overbooking
            still threaten the 2:30 PM outbound cutoff.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <StatCard label="Outbound plan" value="92%" note="ahead" tone="sky" />
            <StatCard label="Exceptions aging" value="74" note="watch" tone="amber" />
            <StatCard label="Carrier reserve" value="11 lanes" note="ready" tone="emerald" />
          </div>
        </Surface>

        <Surface
          eyebrow="Service health"
          title="On-time fulfillment is holding"
          actions={
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Stable
            </span>
          }
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,.8fr)]">
            <div>
              <p className="text-4xl font-semibold tracking-tight text-slate-950">97.4%</p>
              <p className="mt-2 text-sm text-slate-600">On-time fulfillment this week</p>
              <div className="mt-5 grid grid-cols-7 gap-2">
                {[68, 76, 72, 81, 88, 84, 92].map((height, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-full items-end rounded-xl bg-slate-100 px-1.5 pb-1.5">
                      <div
                        className={`w-full rounded-lg ${index >= 5 ? 'bg-emerald-400' : 'bg-slate-300'}`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <StatCard label="Carrier SLA" value="94.2%" note="steady" tone="emerald" />
              <StatCard label="Hub uptime" value="99.1%" note="clean" tone="sky" />
              <StatCard label="Critical queues" value="2" note="active" tone="rose" />
            </div>
          </div>
        </Surface>
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        {kpis.map(({ label, value, note, bars, tone }) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">{value}</p>
            <p className="mt-2 text-sm text-slate-600">{note}</p>
            <div className="mt-5 flex h-12 items-end gap-1.5">
              {bars.map((bar, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-t-lg ${
                    tone === 'sky'
                      ? 'bg-sky-400/85'
                      : tone === 'emerald'
                        ? 'bg-emerald-400/85'
                        : tone === 'amber'
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

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
        <Surface eyebrow="Throughput by hub" title="Completed outbound volume">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
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
          </div>
        </Surface>

        <Surface eyebrow="Exception mix" title="What is causing delays">
          <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
            <div className="relative mx-auto size-40 rounded-full bg-[conic-gradient(#0f172a_0_38%,#f59e0b_38%_67%,#e11d48_67%_84%,#cbd5e1_84%_100%)]">
              <div className="absolute inset-6 rounded-full bg-white" />
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
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`size-3 rounded-full ${
                          index === 0 ? 'bg-slate-950' : index === 1 ? 'bg-amber-500' : index === 2 ? 'bg-rose-600' : 'bg-slate-300'
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
        </Surface>
      </div>
    </div>
  )
}

function NetworkView() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)]">
      <Surface eyebrow="Lane health" title="How shipments are moving through the network">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Priority east', '412 loads', '8 late'],
            ['Central ground', '288 loads', '2 late'],
            ['Returns reverse', '164 loads', '12 delayed'],
          ].map(([label, value, note]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-slate-950">{value}</p>
              <p className="mt-2 text-sm text-slate-600">{note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-slate-950">Route performance by lane</p>
            <span className="text-xs font-semibold text-slate-500">loads on-time</span>
          </div>
          <div className="mt-5 space-y-3">
            {[
              ['East corridor', 91],
              ['Midwest relay', 86],
              ['South parcel', 79],
              ['West express', 95],
              ['Returns reverse', 62],
            ].map(([label, value], index) => (
              <div key={label} className="grid grid-cols-[110px_minmax(0,1fr)_36px] items-center gap-3">
                <p className="text-sm text-slate-600">{label}</p>
                <div className="h-10 rounded-xl bg-white ring-1 ring-slate-200">
                  <div
                    className={`h-full rounded-xl ${
                      index === 4 ? 'bg-amber-400' : index === 3 ? 'bg-emerald-400' : 'bg-sky-400'
                    }`}
                    style={{ width: `${value}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-slate-700">{value}%</p>
              </div>
            ))}
          </div>
        </div>
      </Surface>

      <Surface eyebrow="Shipment queues" title="What is stacking up right now">
        <div className="space-y-4">
          {[
            ['Dock 3 releases', '41 shipments waiting for carrier assignment', '10:20 AM checkpoint'],
            ['East cross-dock', '19 shipments blocked on exception review', '11:00 AM staffing check'],
            ['Returns intake', '27 units waiting for barcode remediation', '11:30 AM audit'],
          ].map(([label, detail, note]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-950">{label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{note}</p>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  )
}

function CapacityView() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <Surface eyebrow="Staffing coverage" title="Where capacity is tightest">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['East hub pick team', '82%', 'Below target', 'amber'],
            ['Central dock labor', '94%', 'Healthy', 'emerald'],
            ['Returns audit', '76%', 'Needs backup', 'rose'],
            ['Carrier dispatch desk', '88%', 'Stable', 'sky'],
          ].map(([label, value, note, tone]) => (
            <StatCard
              key={label}
              label={label}
              value={value}
              note={note}
              tone={tone as 'sky' | 'emerald' | 'amber' | 'rose'}
            />
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-950">Dock utilization</p>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[78, 64, 91, 56].map((value, index) => (
              <div key={index}>
                <div className="flex items-end gap-3">
                  <div className="flex h-28 flex-1 items-end rounded-2xl bg-white px-2 pb-2 ring-1 ring-slate-200">
                    <div
                      className={`w-full rounded-xl ${index === 2 ? 'bg-amber-400' : 'bg-slate-900'}`}
                      style={{ height: `${value}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{value}%</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{['Dock A', 'Dock B', 'Dock C', 'Dock D'][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </Surface>

      <Surface eyebrow="Reserve strategy" title="Carrier and labor reserve">
        <div className="space-y-4">
          {[
            ['Overflow carrier capacity', '11 lanes available', 'Can absorb east hub variance'],
            ['Flexible labor pool', '18 staff-hours open', 'Deploy to exception clearing if aging worsens'],
            ['Returns specialist backup', '2 auditors on-call', 'Use only if barcode queue exceeds threshold'],
          ].map(([label, value, note]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-slate-950">{label}</p>
                <span className="text-sm font-semibold text-slate-700">{value}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{note}</p>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  )
}

function ExceptionsView() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.06fr)_minmax(0,.94fr)]">
      <Surface eyebrow="Aging work" title="What the team should clear first">
        <div className="space-y-4">
          {[
            ['East hub barcode mismatch', '31 blocked orders', '82%', 'rose'],
            ['Carrier pickup overbooked', '14 shipments at risk', '56%', 'amber'],
            ['Returns queue growth', '8 staff-hours behind', '48%', 'amber'],
            ['Inventory routing mismatch', '9 exception cases', '41%', 'sky'],
          ].map(([label, detail, score, tone]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-slate-950">{label}</p>
                <span className="text-sm font-semibold text-slate-700">{score}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{detail}</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                <div
                  className={`h-full rounded-full ${
                    tone === 'rose' ? 'bg-rose-400' : tone === 'amber' ? 'bg-amber-400' : 'bg-sky-400'
                  }`}
                  style={{ width: score as string }}
                />
              </div>
            </div>
          ))}
        </div>
      </Surface>

      <Surface eyebrow="Root causes" title="Where delay volume is coming from">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="grid gap-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:items-center">
            <div className="relative mx-auto size-36 rounded-full bg-[conic-gradient(#0f172a_0_35%,#f59e0b_35%_61%,#0ea5e9_61%_79%,#e11d48_79%_100%)]">
              <div className="absolute inset-5 rounded-full bg-slate-50" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <p className="text-3xl font-semibold text-slate-950">74</p>
                  <p className="text-xs text-slate-500">active cases</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                ['Routing', '35%', 'Hub reassignments and lane mapping'],
                ['Carrier capacity', '26%', 'Mostly east coast pickup compression'],
                ['Scanning', '18%', 'Barcode mismatch and remediation'],
                ['Inventory', '21%', 'Short-pick and location errors'],
              ].map(([label, share, note], index) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`size-3 rounded-full ${
                          index === 0 ? 'bg-slate-950' : index === 1 ? 'bg-amber-500' : index === 2 ? 'bg-sky-400' : 'bg-rose-500'
                        }`}
                      />
                      <p className="text-sm font-semibold text-slate-950">{label}</p>
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{share}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Surface>
    </div>
  )
}

function IncidentsView() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
      <Surface eyebrow="Incident room" title="Current escalations">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ['Open', '2'],
            ['Watching', '3'],
            ['Escalation SLA', '41m'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          {[
            ['Priority lane congestion', 'Carrier ETA instability across 2 routes', 'Alicia', 'now'],
            ['API sync retry loop', 'Three warehouse updates waiting to settle', 'Mason', '15 min'],
            ['East hub staging overflow', 'Temporary dock compression building after cutoff prep', 'Priya', '30 min'],
          ].map(([title, detail, owner, eta]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{owner}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">{eta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Surface>

      <Surface eyebrow="Handoff" title="What the next shift needs">
        <div className="space-y-3">
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
      </Surface>
    </div>
  )
}

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function OpsDashboardWorkspace({
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
}: OpsDashboardWorkspaceProps) {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview')

  const active = useMemo(() => tabs.find((tab) => tab.id === activeTab) ?? tabs[0], [activeTab])

  const defaultContent = (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid items-start lg:grid-cols-[240px_minmax(0,1fr)]">
              <aside className="border-b border-slate-200 bg-slate-50 p-5 lg:sticky lg:top-0 lg:min-h-[calc(100vh-6rem)] lg:border-r lg:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    O
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Ops Console</p>
                    <p className="text-xs text-slate-500">Northstar Logistics</p>
                  </div>
                </div>

                <nav aria-label="Workspace navigation" className="mt-8 space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={activeTab === tab.id}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition ${
                        activeTab === tab.id
                          ? 'bg-white font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200'
                          : 'text-slate-600 hover:bg-white hover:text-slate-950'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className="text-xs text-slate-400">{tab.id === 'overview' ? 'Live' : 'View'}</span>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Shift</p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">AM operations</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Handoff window closes in 48 minutes.</p>
                </div>
              </aside>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{active.eyebrow}</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{active.title}</h1>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{active.summary}</p>
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

                <div className="pt-5">
                  {activeTab === 'overview' && <OverviewView />}
                  {activeTab === 'network' && <NetworkView />}
                  {activeTab === 'capacity' && <CapacityView />}
                  {activeTab === 'exceptions' && <ExceptionsView />}
                  {activeTab === 'incidents' && <IncidentsView />}
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
