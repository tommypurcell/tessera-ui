import type { HTMLAttributes } from 'react'

export type FleetVehicleStatus = 'active' | 'idle' | 'maintenance'

export type FleetVehicle = {
  id: string
  label: string
  driver: string
  status: FleetVehicleStatus
}

export type FleetStatusGridVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  vehicles: FleetVehicle[]
}

const statusStylesDark: Record<FleetVehicleStatus, { badge: string; dot: string; label: string }> = {
  active: { badge: 'bg-green-900/50 text-green-400', dot: 'bg-green-500', label: 'Active' },
  idle: { badge: 'bg-gray-800 text-gray-300', dot: 'bg-gray-500', label: 'Idle' },
  maintenance: { badge: 'bg-yellow-900/50 text-yellow-400', dot: 'bg-yellow-500', label: 'Maintenance' },
}

/**
 * Copy-and-own Tailwind component. Fleet vehicle tile grid taking a real
 * vehicles contract — pass your own tracking data instead of hand-editing markup.
 */
export function FleetStatusGridDark({ className, vehicles, ...props }: FleetStatusGridVariant1DarkProps) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className ?? ''}`} {...props}>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="rounded-xl border border-gray-800 bg-gray-900 p-4">
          <div className="flex items-start justify-between">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-500">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25h5.322c.844 0 1.588.535 1.879 1.343m0 0L21 12h-3.75m-3.75-6L12 12"
              />
            </svg>
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${statusStylesDark[vehicle.status].badge}`}>
              <span className={`size-1.5 rounded-full ${statusStylesDark[vehicle.status].dot}`} />
              {statusStylesDark[vehicle.status].label}
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold text-white">{vehicle.label}</p>
          <p className="text-xs text-gray-500">{vehicle.driver}</p>
        </div>
      ))}
    </div>
  )
}
