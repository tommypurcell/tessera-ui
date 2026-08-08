export type DepartmentHeadcount = {
  department: string
  filled: number
  openRoles: number
}

export type OrgHeadcountChartVariant1Props = {
  title?: string
  departments: DepartmentHeadcount[]
}

/**
 * Copy-and-own Tailwind component. Department headcount bar chart with
 * an open-roles overlay segment — the filled bar width and the
 * open-roles outline segment are both computed from real numbers
 * relative to the largest total across departments, so bars are always
 * proportionally accurate.
 */
export function OrgHeadcountChart({ title, departments }: OrgHeadcountChartVariant1Props) {
  const maxTotal = Math.max(...departments.map((d) => d.filled + d.openRoles), 1)

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6">
      {title ? <h2 className="text-sm font-medium text-gray-900">{title}</h2> : null}

      <div className="flex flex-col gap-3">
        {departments.map((dept) => {
          const total = dept.filled + dept.openRoles
          const filledPct = (dept.filled / maxTotal) * 100
          const openPct = (dept.openRoles / maxTotal) * 100

          return (
            <div key={dept.department} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-gray-700">{dept.department}</span>
                <span className="text-xs text-gray-500">
                  {dept.filled} filled{dept.openRoles > 0 ? ` + ${dept.openRoles} open` : ''}
                </span>
              </div>

              <div className="flex h-5 w-full overflow-hidden rounded-sm bg-gray-100">
                <div
                  className="h-5 bg-blue-600"
                  style={{ width: `${filledPct}%` }}
                  role="img"
                  aria-label={`${dept.department}: ${dept.filled} filled roles`}
                />
                {dept.openRoles > 0 ? (
                  <div
                    className="h-5 border-2 border-dashed border-blue-300 bg-blue-50"
                    style={{ width: `${openPct}%` }}
                    role="img"
                    aria-label={`${dept.department}: ${dept.openRoles} open roles`}
                  />
                ) : null}
              </div>

              <span className="text-xs text-gray-400">{total} total headcount</span>
            </div>
          )
        })}
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2.5 rounded-sm bg-blue-600" />
          Filled
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2.5 rounded-sm border-2 border-dashed border-blue-300 bg-blue-50" />
          Open roles
        </span>
      </div>
    </div>
  )
}
