export type CallDirection = 'incoming' | 'outgoing' | 'missed'

export type CallLogEntry = {
  id: string
  contactName: string
  initials: string
  direction: CallDirection
  durationLabel?: string
  timeLabel: string
  onCallBack?: () => void
}

export type CallLogRowVariant1DarkProps = {
  calls: CallLogEntry[]
  className?: string
}

function IncomingIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l6 6m0 0V5.25m0 5.25H5.25" />
    </svg>
  )
}

function OutgoingIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l6-6m0 0V19m0-6H4.5" />
    </svg>
  )
}

const directionMeta: Record<CallDirection, { label: string; icon: () => JSX.Element; iconClassName: string; textClassName: string }> = {
  incoming: { label: 'Incoming', icon: IncomingIcon, iconClassName: 'text-emerald-400', textClassName: 'text-gray-400' },
  outgoing: { label: 'Outgoing', icon: OutgoingIcon, iconClassName: 'text-blue-400', textClassName: 'text-gray-400' },
  missed: { label: 'Missed', icon: IncomingIcon, iconClassName: 'text-red-400', textClassName: 'text-red-400' },
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the call log row.
 */
export function CallLogRowVariant1Dark({ calls, className }: CallLogRowVariant1DarkProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-gray-800 bg-gray-950 ${className ?? ''}`}>
      <ul className="divide-y divide-gray-800">
        {calls.map((call) => {
          const meta = directionMeta[call.direction]
          const Icon = meta.icon
          return (
            <li key={call.id} className="flex items-center gap-3 px-4 py-3">
              <div aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-semibold text-blue-400">
                {call.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{call.contactName}</p>
                <p className={`mt-0.5 flex items-center gap-1 text-xs ${meta.textClassName}`}>
                  <span className={meta.iconClassName}>
                    <Icon />
                  </span>
                  {meta.label}
                  {call.durationLabel ? ` · ${call.durationLabel}` : ''} &middot; {call.timeLabel}
                </p>
              </div>
              <button
                type="button"
                aria-label={`Call ${call.contactName} back`}
                onClick={call.onCallBack}
                className="flex size-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-900 hover:text-gray-300"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
