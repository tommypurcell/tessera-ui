import { useState } from 'react'

export type ApprovalRequestCardVariant1DarkProps = {
  requesterName: string
  requesterAvatarSrc: string
  resource: string
  note?: string
  requestedAt: string
  expiresIn?: string
  onApprove?: () => void
  onReject?: () => void
  className?: string
}

type Resolution = 'pending' | 'approved' | 'rejected'

/**
 * Copy-and-own Tailwind component. Access/approval request card adapted for dark
 * surfaces — requester, resource, an optional note, and Approve/Reject actions that
 * resolve to a real decided state.
 */
export function ApprovalRequestCardVariant1Dark({
  requesterName,
  requesterAvatarSrc,
  resource,
  note,
  requestedAt,
  expiresIn,
  onApprove,
  onReject,
  className,
}: ApprovalRequestCardVariant1DarkProps) {
  const [resolution, setResolution] = useState<Resolution>('pending')

  const handleApprove = () => {
    setResolution('approved')
    onApprove?.()
  }

  const handleReject = () => {
    setResolution('rejected')
    onReject?.()
  }

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-4 shadow-sm ${className ?? ''}`}>
      <div className="flex items-start gap-3">
        <img src={requesterAvatarSrc} alt="" className="size-9 shrink-0 rounded-full" />

        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-200">
            <span className="font-semibold text-white">{requesterName}</span> requested access to{' '}
            <span className="font-semibold text-white">{resource}</span>
          </p>
          <p className="mt-0.5 text-xs text-gray-500">
            Requested {requestedAt}
            {expiresIn ? ` · Expires in ${expiresIn}` : ''}
          </p>
        </div>

        <span
          className={
            resolution === 'approved'
              ? 'shrink-0 rounded-full bg-emerald-950 px-2 py-0.5 text-xs font-medium text-emerald-400'
              : resolution === 'rejected'
                ? 'shrink-0 rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-400'
                : 'shrink-0 rounded-full bg-amber-950 px-2 py-0.5 text-xs font-medium text-amber-400'
          }
        >
          {resolution === 'approved' ? 'Approved' : resolution === 'rejected' ? 'Rejected' : 'Pending'}
        </span>
      </div>

      {note ? <p className="mt-3 rounded-md bg-gray-900 p-2.5 text-sm text-gray-400">"{note}"</p> : null}

      {resolution === 'pending' ? (
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-md border border-gray-700 bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={handleApprove}
            className="rounded-md bg-emerald-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
          >
            Approve
          </button>
        </div>
      ) : null}
    </div>
  )
}
