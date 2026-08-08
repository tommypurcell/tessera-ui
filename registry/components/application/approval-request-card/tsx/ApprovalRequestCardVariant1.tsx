import { useState } from 'react'

export type ApprovalRequestCardVariant1Props = {
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
 * Copy-and-own Tailwind component. Access/approval request card — requester, resource,
 * an optional note, and Approve/Reject actions that resolve to a real decided state.
 */
export function ApprovalRequestCardVariant1({
  requesterName,
  requesterAvatarSrc,
  resource,
  note,
  requestedAt,
  expiresIn,
  onApprove,
  onReject,
  className,
}: ApprovalRequestCardVariant1Props) {
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
    <div className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${className ?? ''}`}>
      <div className="flex items-start gap-3">
        <img src={requesterAvatarSrc} alt="" className="size-9 shrink-0 rounded-full" />

        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-900">
            <span className="font-semibold">{requesterName}</span> requested access to{' '}
            <span className="font-semibold">{resource}</span>
          </p>
          <p className="mt-0.5 text-xs text-gray-500">
            Requested {requestedAt}
            {expiresIn ? ` · Expires in ${expiresIn}` : ''}
          </p>
        </div>

        <span
          className={
            resolution === 'approved'
              ? 'shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700'
              : resolution === 'rejected'
                ? 'shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600'
                : 'shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700'
          }
        >
          {resolution === 'approved' ? 'Approved' : resolution === 'rejected' ? 'Rejected' : 'Pending'}
        </span>
      </div>

      {note ? <p className="mt-3 rounded-md bg-gray-50 p-2.5 text-sm text-gray-600">"{note}"</p> : null}

      {resolution === 'pending' ? (
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-md border border-gray-300 bg-white px-3.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={handleApprove}
            className="rounded-md bg-emerald-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Approve
          </button>
        </div>
      ) : null}
    </div>
  )
}
