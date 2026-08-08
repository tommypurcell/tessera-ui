import type { HTMLAttributes, ReactNode } from 'react'

export type EventLogType = 'success' | 'info' | 'error'

export type EventLogRow = {
  id: string
  name: string
  type: EventLogType
  timestamp: string
  expanded?: boolean
  payload: string
}

export type EventLogTableVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  rows: EventLogRow[]
  onToggle?: (row: EventLogRow) => void
}

const typeStyles: Record<EventLogType, { badge: string; icon: ReactNode }> = {
  success: {
    badge: 'bg-green-100 text-green-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    ),
  },
  info: {
    badge: 'bg-blue-100 text-blue-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
      />
    ),
  },
  error: {
    badge: 'bg-red-100 text-red-600',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />,
  },
}

/**
 * Copy-and-own Tailwind component. Timestamped event log table with an
 * expandable JSON payload row, taking a real rows contract — pass your own analytics data instead of hand-editing markup.
 */
export function EventLogTable({ className, rows, onToggle, ...props }: EventLogTableVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="w-8 px-3 py-2.5" />
            <th scope="col" className="px-2 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Event
            </th>
            <th scope="col" className="px-2 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Timestamp
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row) => (
            <>
              <tr key={row.id}>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    aria-expanded={row.expanded}
                    aria-label={row.expanded ? `Collapse payload for ${row.name}` : `Expand payload for ${row.name}`}
                    onClick={() => onToggle?.(row)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d={row.expanded ? 'm19.5 8.25-7.5 7.5-7.5-7.5' : 'm8.25 4.5 7.5 7.5-7.5 7.5'} />
                    </svg>
                  </button>
                </td>
                <td className="whitespace-nowrap px-2 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`flex size-5 shrink-0 items-center justify-center rounded ${typeStyles[row.type].badge}`}>
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
                        {typeStyles[row.type].icon}
                      </svg>
                    </span>
                    <code className="text-sm font-medium text-gray-900">{row.name}</code>
                  </div>
                </td>
                <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500">{row.timestamp}</td>
              </tr>
              {row.expanded ? (
                <tr key={`${row.id}-payload`}>
                  <td colSpan={3} className="bg-gray-50 px-3 py-3">
                    <pre className="overflow-x-auto pl-8 font-mono text-[13px] leading-relaxed text-gray-600">{row.payload}</pre>
                  </td>
                </tr>
              ) : null}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
