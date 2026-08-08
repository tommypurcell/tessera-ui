export type Notification = {
  id: string
  actor?: string
  message: string
  detail?: string
  timestamp: string
  read?: boolean
  href?: string
}

export type NotificationCenterVariant1Props = {
  notifications: Notification[]
  unreadCount?: number
  onMarkAllRead?: () => void
  onViewAll?: () => void
}

/**
 * Copy-and-own Tailwind component. Bell-triggered dropdown panel listing grouped
 * notifications with read/unread state, timestamps, and a mark-all-read action.
 * Anchor it inside a `relative` wrapper next to the trigger button.
 */
export function NotificationCenter({ notifications, unreadCount, onMarkAllRead, onViewAll }: NotificationCenterVariant1Props) {
  return (
    <div
      role="dialog"
      aria-label="Notifications"
      className="absolute right-0 top-full z-10 mt-2 w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg shadow-gray-900/5"
    >
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">
          Notifications
          {unreadCount ? <span className="ml-1.5 text-xs font-normal text-gray-500">({unreadCount} unread)</span> : null}
        </h3>
        <button type="button" onClick={onMarkAllRead} className="text-xs font-medium text-gray-500 hover:text-gray-900 hover:underline">
          Mark all as read
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto">
        <ul role="list" className="divide-y divide-gray-100">
          {notifications.map((notification) => (
            <li key={notification.id}>
              <a
                href={notification.href ?? '#'}
                className={`flex gap-3 px-4 py-3 hover:bg-gray-50 ${notification.read ? 'opacity-70 hover:opacity-100' : ''}`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-1.5 size-1.5 shrink-0 rounded-full ${notification.read ? '' : 'bg-blue-600'}`}
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-gray-900">
                    {notification.actor ? <span className="font-medium">{notification.actor}</span> : null}{' '}
                    {notification.message}
                  </span>
                  {notification.detail ? <span className="mt-0.5 block text-xs text-gray-500">{notification.detail}</span> : null}
                  <span className="mt-1 block text-xs text-gray-400">{notification.timestamp}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-200 px-4 py-2.5 text-center">
        <button type="button" onClick={onViewAll} className="text-xs font-medium text-gray-600 hover:text-gray-900 hover:underline">
          View all notifications
        </button>
      </div>
    </div>
  )
}
