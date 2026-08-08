export type DepartmentHeadcount = {
  department: string
  filled: number
  openRoles: number
}

export type OrgHeadcountChartVariant1DarkProps = {
  title?: string
  departments: DepartmentHeadcount[]
}

/**
 * Copy-and-own Tailwind component. Department headcount bar chart
 * adapted for dark surfaces, with an open-roles overlay segment — bar
 * and overlay widths are computed from real numbers.
 */
export function OrgHeadcountChartDark({ title, departments }: OrgHeadcountChartVariant1DarkProps) {
  const maxTotal = Math.max(...departments.map((d) => d.filled + d.openRoles), 1)

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6">
      {title ? <h2 className="text-sm font-medium text-gray-100">{title}</h2> : null}

      <div className="flex flex-col gap-3">
        {departments.map((dept) => {
          const total = dept.filled + dept.openRoles
          const filledPct = (dept.filled / maxTotal) * 100
          const openPct = (dept.openRoles / maxTotal) * 100

          return (
            <div key={dept.department} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-gray-300">{dept.department}</span>
                <span className="text-xs text-gray-500">
                  {dept.filled} filled{dept.openRoles > 0 ? ` + ${dept.openRoles} open` : ''}
                </span>
              </div>

              <div className="flex h-5 w-full overflow-hidden rounded-sm bg-gray-800">
                <div
                  className="h-5 bg-blue-500"
                  style={{ width: `${filledPct}%` }}
                  role="img"
                  aria-label={`${dept.department}: ${dept.filled} filled roles`}
                />
                {dept.openRoles > 0 ? (
                  <div
                    className="h-5 border-2 border-dashed border-blue-400/60 bg-blue-500/10"
                    style={{ width: `${openPct}%` }}
                    role="img"
                    aria-label={`${dept.department}: ${dept.openRoles} open roles`}
                  />
                ) : null}
              </div>

              <span className="text-xs text-gray-500">{total} total headcount</span>
            </div>
          )
        })}
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2.5 rounded-sm bg-blue-500" />
          Filled
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2.5 rounded-sm border-2 border-dashed border-blue-400/60 bg-blue-500/10" />
          Open roles
        </span>
      </div>
    </div>
  )
}
