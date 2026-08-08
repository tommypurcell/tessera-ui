import type { HTMLAttributes } from 'react'

export type AuditTrailChange = {
  before: string
  after: string
}

export type AuditTrailEntry = {
  id: string
  actorInitials: string
  actorName: string
  action: string
  target: string
  timestamp: string
  change?: AuditTrailChange
  note?: string
  destructive?: boolean
}

export type AuditTrailRowVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  entries: AuditTrailEntry[]
}

/**
 * Copy-and-own Tailwind component. Compliance audit-trail list taking a real
 * actor/action/change contract — pass your own log data instead of hand-editing markup.
 */
export function AuditTrailRow({ className, entries, ...props }: AuditTrailRowVariant1Props) {
  return (
    <div className={`flex flex-col divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white ${className ?? ''}`} {...props}>
      {entries.map((entry) => (
        <div key={entry.id} className="flex items-start gap-3 px-4 py-3.5">
          <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-medium ${entry.destructive ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600'}`}>
            {entry.actorInitials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">{entry.actorName}</span> {entry.action} <span className="font-medium text-gray-900">{entry.target}</span>
            </p>
            {entry.change ? (
              <div className="mt-1.5 flex items-center gap-2 rounded-md bg-gray-50 px-2.5 py-1.5 text-xs">
                <span className="rounded bg-red-50 px-1.5 py-0.5 text-red-700 line-through decoration-red-400">{entry.change.before}</span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3 shrink-0 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                <span className="rounded bg-green-50 px-1.5 py-0.5 text-green-700">{entry.change.after}</span>
              </div>
            ) : null}
            {entry.note ? (
              <div className="mt-1.5 rounded-md bg-gray-50 px-2.5 py-1.5 text-xs text-gray-500">
                <code>{entry.note}</code>
              </div>
            ) : null}
          </div>
          <span className="shrink-0 text-xs text-gray-400">{entry.timestamp}</span>
        </div>
      ))}
    </div>
  )
}
