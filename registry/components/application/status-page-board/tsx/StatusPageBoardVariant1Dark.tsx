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

export type StatusPageBoardVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  overallLabel: string
  overallStatus: ServiceStatus
  groups: StatusPageGroup[]
  footerLabel?: string
}

const statusStylesDark: Record<ServiceStatus, { dot: string; badge: string; bar: string; label: string }> = {
  operational: { dot: 'bg-green-500', badge: 'bg-green-900/50 text-green-400', bar: 'bg-green-500', label: 'Operational' },
  degraded: { dot: 'bg-yellow-500', badge: 'bg-yellow-900/50 text-yellow-400', bar: 'bg-yellow-500', label: 'Degraded' },
  outage: { dot: 'bg-red-500', badge: 'bg-red-900/50 text-red-400', bar: 'bg-red-500', label: 'Outage' },
}

/**
 * Copy-and-own Tailwind component. Grouped service-status board taking a real
 * groups/services contract — pass your own monitoring data instead of hand-editing markup.
 */
export function StatusPageBoardDark({ className, overallLabel, overallStatus, groups, footerLabel = 'Uptime over last 6 hours', ...props }: StatusPageBoardVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`} {...props}>
      <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
        <span className={`size-2 rounded-full ${statusStylesDark[overallStatus].dot}`} />
        <span className="text-sm font-medium text-white">{overallLabel}</span>
      </div>

      <div className="divide-y divide-gray-800">
        {groups.map((group) => (
          <div key={group.id}>
            <div className="px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-gray-500">{group.label}</div>
            {group.services.map((service) => (
              <div key={service.id} className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-gray-300">{service.name}</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-0.5" aria-hidden="true">
                    {service.uptimeBars.map((bar, index) => (
                      <span key={index} className={`h-3 w-1 rounded-sm ${statusStylesDark[bar].bar}`} />
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${statusStylesDark[service.status].badge}`}>
                    <span className={`size-1.5 rounded-full ${statusStylesDark[service.status].dot}`} />
                    {statusStylesDark[service.status].label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 px-4 py-2.5 text-xs text-gray-500">{footerLabel}</div>
    </div>
  )
}
