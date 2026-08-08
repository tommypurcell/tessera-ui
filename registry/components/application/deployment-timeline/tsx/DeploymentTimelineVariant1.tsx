export type DeploymentEvent = {
  id: string
  commit: string
  author: string
  environment: string
  timestamp: string
  isCurrent: boolean
}

export type DeploymentTimelineVariant1Props = {
  events: DeploymentEvent[]
  onRollback?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Vertical deployment timeline —
 * exactly one entry is styled as "current" (whichever has isCurrent
 * true), and the Rollback action only renders on past deploys, never on
 * the current one.
 */
export function DeploymentTimeline({ events, onRollback }: DeploymentTimelineVariant1Props) {
  return (
    <ol className="flex flex-col">
      {events.map((event, index) => (
        <li key={event.id} className="relative flex gap-3 pb-6 last:pb-0">
          {index < events.length - 1 ? <span className="absolute top-3 left-[7px] h-full w-px bg-gray-200" aria-hidden="true" /> : null}

          <span
            className={`relative z-10 mt-1 size-3.5 shrink-0 rounded-full ${event.isCurrent ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-gray-300'}`}
            aria-hidden="true"
          />

          <div className="flex flex-1 flex-col gap-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700">{event.commit}</code>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">{event.environment}</span>
              {event.isCurrent ? (
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Current</span>
              ) : null}
            </div>
            <p className="text-sm text-gray-700">
              Deployed by <span className="font-medium text-gray-900">{event.author}</span>
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">{event.timestamp}</span>
              {!event.isCurrent && onRollback ? (
                <button
                  type="button"
                  onClick={() => onRollback(event.id)}
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
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
