export type ServiceReminderItem = {
  id: string
  name: string
  statusLabel: string
  urgency: 'overdue' | 'upcoming' | 'ok'
  onSchedule?: () => void
}

export type ServiceReminderRowVariant2DarkProps = {
  title: string
  items: ServiceReminderItem[]
}

const urgencyButtonClasses: Record<ServiceReminderItem['urgency'], string> = {
  overdue: 'bg-red-600 text-white hover:bg-red-500',
  upcoming: 'border border-gray-700 text-gray-200 hover:bg-gray-800',
  ok: 'border border-gray-700 text-gray-200 hover:bg-gray-800',
}

const urgencyTextClasses: Record<ServiceReminderItem['urgency'], string> = {
  overdue: 'text-red-400',
  upcoming: 'text-amber-400',
  ok: 'text-gray-400',
}

const urgencyButtonLabel: Record<ServiceReminderItem['urgency'], string> = {
  overdue: 'Schedule now',
  upcoming: 'Schedule',
  ok: 'Schedule',
}

/**
 * Copy-and-own Tailwind component. List of maintenance reminders with
 * urgency states, adapted for dark surfaces.
 */
export function ServiceReminderRow({ title, items }: ServiceReminderRowVariant2DarkProps) {
  return (
    <div className="w-full max-w-md rounded-lg border border-gray-800 bg-gray-900">
      <div className="border-b border-gray-800 px-4 py-3">
        <h2 className="text-sm font-semibold text-white">{title}</h2>
      </div>
      <ul className="divide-y divide-gray-800">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-white">{item.name}</p>
              <p className={`mt-0.5 text-xs ${urgencyTextClasses[item.urgency]}`}>{item.statusLabel}</p>
            </div>
            <button
              type="button"
              onClick={item.onSchedule}
              className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold ${urgencyButtonClasses[item.urgency]}`}
            >
              {urgencyButtonLabel[item.urgency]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
