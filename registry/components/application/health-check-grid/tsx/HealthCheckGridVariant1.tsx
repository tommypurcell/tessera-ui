export type ServiceStatus = 'operational' | 'degraded' | 'outage'

export type ServiceHealth = {
  id: string
  name: string
  status: ServiceStatus
  /** Latency in milliseconds, or omit for an outage with no response. */
  latencyMs?: number
}

export type HealthCheckGridVariant1Props = {
  services: ServiceHealth[]
  className?: string
}

const STATUS_LABEL: Record<ServiceStatus, string> = {
  operational: 'Operational',
  degraded: 'Degraded',
  outage: 'Outage',
}

const STATUS_TEXT_CLASS: Record<ServiceStatus, string> = {
  operational: 'text-gray-500',
  degraded: 'text-amber-700',
  outage: 'text-red-700',
}

const STATUS_DOT_CLASS: Record<ServiceStatus, string> = {
  operational: 'bg-emerald-500',
  degraded: 'bg-amber-500',
  outage: 'bg-red-500',
}

/**
 * Copy-and-own Tailwind component. Service health tile grid — a status dot, service
 * name, and status/latency text per tile, with a live-pulse animation on operational
 * services.
 */
export function HealthCheckGridVariant1({ services, className }: HealthCheckGridVariant1Props) {
  return (
    <ul className={`grid grid-cols-2 gap-3 ${className ?? ''}`}>
      {services.map((service) => (
        <li
          key={service.id}
          className={
            service.status === 'outage'
              ? 'rounded-lg border border-red-200 bg-red-50 p-3 shadow-sm'
              : 'rounded-lg border border-gray-200 bg-white p-3 shadow-sm'
          }
        >
          <div className="flex items-center gap-2">
            {service.status === 'operational' ? (
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
            ) : (
              <span className={`size-2 rounded-full ${STATUS_DOT_CLASS[service.status]}`} />
            )}
            <span className="text-sm font-medium text-gray-900">{service.name}</span>
          </div>
          <p className={`mt-1 text-xs ${STATUS_TEXT_CLASS[service.status]}`}>
            {STATUS_LABEL[service.status]}
            {' · '}
            {service.latencyMs != null ? `${service.latencyMs}ms` : 'no response'}
          </p>
        </li>
      ))}
    </ul>
  )
}
