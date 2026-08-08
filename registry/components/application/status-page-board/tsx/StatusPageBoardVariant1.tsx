import type { HTMLAttributes } from 'react'

export type ServiceStatus = 'operational' | 'degraded' | 'outage'

export type StatusPageService = {
  id: string
  name: string
  status: ServiceStatus
  uptimeBars: ServiceStatus[]
}

export type StatusPageGroup = {
  id: string
  label: string
  services: StatusPageService[]
}

export type StatusPageBoardVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  overallLabel: string
  overallStatus: ServiceStatus
  groups: StatusPageGroup[]
  footerLabel?: string
}

const statusStyles: Record<ServiceStatus, { dot: string; badge: string; bar: string; label: string }> = {
  operational: { dot: 'bg-green-500', badge: 'bg-green-100 text-green-700', bar: 'bg-green-400', label: 'Operational' },
  degraded: { dot: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-700', bar: 'bg-yellow-400', label: 'Degraded' },
  outage: { dot: 'bg-red-500', badge: 'bg-red-100 text-red-700', bar: 'bg-red-400', label: 'Outage' },
}

/**
 * Copy-and-own Tailwind component. Grouped service-status board taking a real
 * groups/services contract — pass your own monitoring data instead of hand-editing markup.
 */
export function StatusPageBoard({ className, overallLabel, overallStatus, groups, footerLabel = 'Uptime over last 6 hours', ...props }: StatusPageBoardVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white ${className ?? ''}`} {...props}>
      <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-3">
        <span className={`size-2 rounded-full ${statusStyles[overallStatus].dot}`} />
        <span className="text-sm font-medium text-gray-900">{overallLabel}</span>
      </div>

      <div className="divide-y divide-gray-100">
        {groups.map((group) => (
          <div key={group.id}>
            <div className="px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-gray-400">{group.label}</div>
            {group.services.map((service) => (
              <div key={service.id} className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-gray-700">{service.name}</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-0.5" aria-hidden="true">
                    {service.uptimeBars.map((bar, index) => (
                      <span key={index} className={`h-3 w-1 rounded-sm ${statusStyles[bar].bar}`} />
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[service.status].badge}`}>
                    <span className={`size-1.5 rounded-full ${statusStyles[service.status].dot}`} />
                    {statusStyles[service.status].label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 px-4 py-2.5 text-xs text-gray-400">{footerLabel}</div>
    </div>
  )
}
