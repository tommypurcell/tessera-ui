import type { HTMLAttributes } from 'react'

export type NotificationChannel = {
  id: string
  label: string
}

export type NotificationCell = {
  checked: boolean
  disabled?: boolean
}

export type NotificationEventRow = {
  id: string
  label: string
  cells: Record<string, NotificationCell>
}

export type NotificationPreferencesGridVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  title: string
  description: string
  channels: NotificationChannel[]
  rows: NotificationEventRow[]
  footerNote?: string
  onToggle?: (rowId: string, channelId: string, checked: boolean) => void
}

/**
 * Copy-and-own Tailwind component. Channel-by-event notification matrix
 * taking a real channels/rows contract — pass your own preference data instead of hand-editing markup.
 */
export function NotificationPreferencesGrid({
  className,
  title,
  description,
  channels,
  rows,
  footerNote,
  onToggle,
  ...props
}: NotificationPreferencesGridVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white ${className ?? ''}`} {...props}>
      <div className="border-b border-gray-200 px-5 py-4">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="mt-0.5 text-xs text-gray-500">{description}</p>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-xs font-medium uppercase tracking-wide text-gray-400">
            <th scope="col" className="px-5 py-2.5 text-left">
              Event
            </th>
            {channels.map((channel) => (
              <th key={channel.id} scope="col" className="px-3 py-2.5 text-center">
                {channel.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="px-5 py-3 text-sm text-gray-700">{row.label}</td>
              {channels.map((channel) => {
                const cell = row.cells[channel.id]
                return (
                  <td key={channel.id} className="px-3 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={cell.checked}
                      disabled={cell.disabled}
                      onChange={(event) => onToggle?.(row.id, channel.id, event.target.checked)}
                      aria-label={`${row.label} via ${channel.label}${cell.disabled ? ' (unavailable)' : ''}`}
                      className={`size-4 rounded focus:ring-gray-500 ${cell.disabled ? 'border-gray-200 text-gray-300' : 'border-gray-300 text-gray-900'}`}
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {footerNote ? <div className="border-t border-gray-200 px-5 py-2.5 text-xs text-gray-400">{footerNote}</div> : null}
    </div>
  )
}
