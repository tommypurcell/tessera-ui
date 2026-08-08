export type OrgChartNode = {
  id: string
  name: string
  title: string
  reports?: OrgChartNode[]
}

export type OrgChartVariant1DarkProps = {
  root: OrgChartNode
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

function PersonCard({ node }: { node: OrgChartNode }) {
  return (
    <div className="flex w-40 shrink-0 flex-col items-center gap-1.5 rounded-lg border border-gray-800 bg-gray-900 px-3 py-3 text-center shadow-sm">
      <span className="flex size-9 items-center justify-center rounded-full bg-blue-500/10 text-xs font-medium text-blue-300">
        {initials(node.name)}
      </span>
      <span className="text-sm font-medium text-gray-100">{node.name}</span>
      <span className="text-xs text-gray-500">{node.title}</span>
    </div>
  )
}

function Branch({ node }: { node: OrgChartNode }) {
  const reports = node.reports ?? []

  return (
    <div className="flex flex-col items-center">
      <PersonCard node={node} />

      {reports.length > 0 ? (
        <>
          <div className="h-4 w-px bg-gray-700" aria-hidden="true" />
          <div className="flex items-start">
            {reports.map((report, index) => (
              <div key={report.id} className="flex flex-col items-center px-3">
                <div className="relative h-px w-full bg-gray-700" aria-hidden="true">
                  <div
                    className={`absolute top-0 h-px bg-gray-700 ${
                      reports.length === 1 ? 'inset-x-0' : index === 0 ? 'right-0 left-1/2' : index === reports.length - 1 ? 'right-1/2 left-0' : 'inset-x-0'
                    }`}
                  />
                </div>
                <div className="h-4 w-px bg-gray-700" aria-hidden="true" />
                <Branch node={report} />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

/**
 * Copy-and-own Tailwind component. Hierarchical org chart adapted for
 * dark surfaces — avatar-card nodes connected by CSS border lines that
 * follow the tree structure recursively.
 */
export function OrgChartDark({ root }: OrgChartVariant1DarkProps) {
  return (
    <div role="tree" aria-label="Organization chart" className="flex justify-center overflow-x-auto rounded-lg border border-gray-800 bg-gray-950 p-8">
      <Branch node={root} />
    </div>
  )
}
