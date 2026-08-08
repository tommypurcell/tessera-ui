export type ServiceReminderItem = {
  id: string
  name: string
  statusLabel: string
  urgency: 'overdue' | 'upcoming' | 'ok'
  onSchedule?: () => void
}

export type ServiceReminderRowVariant2Props = {
  title: string
  items: ServiceReminderItem[]
}

const urgencyButtonClasses: Record<ServiceReminderItem['urgency'], string> = {
  overdue: 'bg-red-600 text-white hover:bg-red-700',
  upcoming: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  ok: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
}

const urgencyTextClasses: Record<ServiceReminderItem['urgency'], string> = {
  overdue: 'text-red-600',
  upcoming: 'text-amber-600',
  ok: 'text-gray-500',
}

const urgencyButtonLabel: Record<ServiceReminderItem['urgency'], string> = {
  overdue: 'Schedule now',
  upcoming: 'Schedule',
  ok: 'Schedule',
}

/**
 * Copy-and-own Tailwind component. List of maintenance reminders with
 * overdue/upcoming/ok urgency states, each with its own Schedule action —
 * for a fleet or vehicle dashboard showing every upcoming service item at
 * once.
 */
export function ServiceReminderRow({ title, items }: ServiceReminderRowVariant2Props) {
  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-4 py-3">
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
      </div>
      <ul className="divide-y divide-gray-100">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
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
