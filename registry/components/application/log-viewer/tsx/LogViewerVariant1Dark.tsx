import { useMemo, useRef, useState } from 'react'

export type LogViewerLevel = 'info' | 'warn' | 'error' | 'debug'

export type LogViewerEntry = {
  id: string
  timestamp: string
  level: LogViewerLevel
  message: string
}

export type LogViewerVariant1DarkProps = {
  entries: LogViewerEntry[]
  className?: string
}

const levelStyles: Record<LogViewerLevel, { text: string; label: string }> = {
  info: { text: 'text-blue-300', label: 'INFO' },
  warn: { text: 'text-amber-300', label: 'WARN' },
  error: { text: 'text-red-300', label: 'ERROR' },
  debug: { text: 'text-gray-500', label: 'DEBUG' },
}

const levels: LogViewerLevel[] = ['info', 'warn', 'error', 'debug']

/**
 * Copy-and-own Tailwind component. Virtualized-feel monospace log stream
 * for dark dashboard chrome — deeper background than the base variant to
 * sit inside an already-dark app shell. Same severity coloring, level
 * filter chips, and auto-scroll toggle contract.
 */
export function LogViewerDark({ entries, className }: LogViewerVariant1DarkProps) {
  const [activeLevels, setActiveLevels] = useState<Set<LogViewerLevel>>(new Set(levels))
  const [autoScroll, setAutoScroll] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => entries.filter((entry) => activeLevels.has(entry.level)), [entries, activeLevels])

  function toggleLevel(level: LogViewerLevel) {
    setActiveLevels((prev) => {
      const next = new Set(prev)
      if (next.has(level)) next.delete(level)
      else next.add(level)
      return next
    })
  }

  return (
    <div className={`flex flex-col overflow-hidden rounded-lg border border-black/40 bg-black ${className ?? ''}`}>
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-3 py-2">
        {levels.map((level) => {
          const active = activeLevels.has(level)
          return (
            <button
              key={level}
              type="button"
              onClick={() => toggleLevel(level)}
              aria-pressed={active}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                active ? `bg-white/10 ${levelStyles[level].text}` : 'bg-white/5 text-gray-600 hover:text-gray-400'
              }`}
            >
              {levelStyles[level].label}
            </button>
          )
        })}

        <button
          type="button"
          onClick={() => setAutoScroll((v) => !v)}
          aria-pressed={autoScroll}
          className={`ml-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
            autoScroll ? 'bg-white/10 text-gray-200' : 'bg-white/5 text-gray-600 hover:text-gray-400'
          }`}
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
          Auto-scroll
        </button>
      </div>

      <div ref={scrollRef} role="log" aria-live="polite" className="max-h-72 overflow-y-auto px-3 py-2 font-mono text-xs leading-relaxed">
        {filtered.length > 0 ? (
          filtered.map((entry) => (
            <p key={entry.id} className="flex gap-3 whitespace-pre-wrap">
              <span className="shrink-0 select-none text-gray-600">{entry.timestamp}</span>
              <span className={`shrink-0 font-semibold ${levelStyles[entry.level].text}`}>{levelStyles[entry.level].label}</span>
              <span className="text-gray-300">{entry.message}</span>
            </p>
          ))
        ) : (
          <p className="text-gray-600">No log entries match the active filters.</p>
        )}
      </div>
    </div>
  )
}
