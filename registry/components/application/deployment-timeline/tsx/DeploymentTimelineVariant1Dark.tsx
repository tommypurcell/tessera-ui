export type DeploymentEvent = {
  id: string
  commit: string
  author: string
  environment: string
  timestamp: string
  isCurrent: boolean
}

export type DeploymentTimelineVariant1DarkProps = {
  events: DeploymentEvent[]
  onRollback?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Vertical deployment timeline adapted
 * for dark surfaces — the Rollback action only renders on past deploys,
 * never on the current one.
 */
export function DeploymentTimelineDark({ events, onRollback }: DeploymentTimelineVariant1DarkProps) {
  return (
    <ol className="flex flex-col">
      {events.map((event, index) => (
        <li key={event.id} className="relative flex gap-3 pb-6 last:pb-0">
          {index < events.length - 1 ? <span className="absolute top-3 left-[7px] h-full w-px bg-gray-800" aria-hidden="true" /> : null}

          <span
            className={`relative z-10 mt-1 size-3.5 shrink-0 rounded-full ${event.isCurrent ? 'bg-blue-500 ring-4 ring-blue-500/20' : 'bg-gray-700'}`}
            aria-hidden="true"
          />

          <div className="flex flex-1 flex-col gap-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <code className="rounded bg-gray-800 px-1.5 py-0.5 font-mono text-xs text-gray-300">{event.commit}</code>
              <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-400">{event.environment}</span>
              {event.isCurrent ? (
                <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-300">Current</span>
              ) : null}
            </div>
            <p className="text-sm text-gray-300">
              Deployed by <span className="font-medium text-gray-100">{event.author}</span>
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">{event.timestamp}</span>
              {!event.isCurrent && onRollback ? (
                <button
                  type="button"
                  onClick={() => onRollback(event.id)}
                  className="text-xs font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900"
                >
                  Rollback to this
                </button>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
