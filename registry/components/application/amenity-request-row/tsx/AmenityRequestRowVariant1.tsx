export type AmenityRequestStatus = 'pending' | 'in_progress' | 'complete' | 'cancelled'

export type AmenityRequest = {
  id: string
  label: string
  room: string
  requestedAgo: string
  status: AmenityRequestStatus
  icon: React.ReactNode
}

export type AmenityRequestRowVariant1Props = {
  requests: AmenityRequest[]
}

const statusStyles: Record<AmenityRequestStatus, { label: string; className: string }> = {
  pending: { label: 'Pending', className: 'bg-amber-50 text-amber-700' },
  in_progress: { label: 'In progress', className: 'bg-blue-50 text-blue-700' },
  complete: { label: 'Complete', className: 'bg-emerald-50 text-emerald-700' },
  cancelled: { label: 'Cancelled', className: 'bg-red-50 text-red-700' },
}

/**
 * Copy-and-own Tailwind component. Hotel amenity/service request list with
 * an icon, room and request label, elapsed time, and a status pill.
 */
export function AmenityRequestRow({ requests }: AmenityRequestRowVariant1Props) {
  return (
    <ul className="w-full max-w-md divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
      {requests.map((request) => {
        const status = statusStyles[request.status]
        return (
          <li key={request.id} className="flex items-center gap-3 p-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">{request.icon}</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">
                {request.label} &middot; Room {request.room}
              </p>
              <p className="text-xs text-gray-500">Requested {request.requestedAgo}</p>
            </div>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${status.className}`}>{status.label}</span>
          </li>
        )
      })}
    </ul>
  )
}
