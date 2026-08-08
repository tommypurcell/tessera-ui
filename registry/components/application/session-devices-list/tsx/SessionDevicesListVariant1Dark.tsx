export type SessionDevice = {
  id: string
  label: string
  location: string
  lastActive: string
  isCurrent?: boolean
  deviceType?: 'desktop' | 'mobile'
  onRevoke?: () => void
}

export type SessionDevicesListVariant1DarkProps = {
  sessions: SessionDevice[]
  onSignOutOthers?: () => void
  className?: string
}

function DeviceIcon({ type, current }: { type: 'desktop' | 'mobile'; current?: boolean }) {
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${current ? 'bg-indigo-500/10 text-indigo-400' : 'bg-gray-800 text-gray-400'}`}>
      {type === 'mobile' ? (
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M6 3a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H6zm2 12a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </span>
  )
}

/**
 * Copy-and-own Tailwind component (dark surface). List of active sign-in sessions:
 * device/browser label, location, last-active time, a "This device" badge on the
 * current session, and a per-row Revoke action on every other session.
 */
export function SessionDevicesList({ sessions, onSignOutOthers, className }: SessionDevicesListVariant1DarkProps) {
  return (
    <div className={`rounded-lg border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <div className="border-b border-gray-800 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-100">Active sessions</h3>
        <p className="mt-0.5 text-xs text-gray-400">Devices currently signed in to your account.</p>
      </div>

      <ul className="divide-y divide-gray-800">
        {sessions.map((session) => (
          <li key={session.id} className="flex items-center gap-3 px-4 py-3">
            <DeviceIcon type={session.deviceType ?? 'desktop'} current={session.isCurrent} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-100">{session.label}</span>
                {session.isCurrent ? (
                  <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">This device</span>
                ) : null}
              </div>
              <p className="text-xs text-gray-400">
                {session.location} &middot; {session.isCurrent ? 'Active now' : `Last active ${session.lastActive}`}
              </p>
            </div>
            {!session.isCurrent ? (
              <button
                type="button"
                onClick={session.onRevoke}
                className="shrink-0 rounded-md border border-gray-700 px-2.5 py-1 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800"
              >
                Revoke
              </button>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-800 px-4 py-3">
        <button type="button" onClick={onSignOutOthers} className="text-xs font-medium text-red-400 hover:text-red-300">
          Sign out of all other sessions
        </button>
      </div>
    </div>
  )
}
