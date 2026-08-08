import { useRef, useState, type KeyboardEvent } from 'react'

export type CommandHistoryEntry = {
  command: string
  output: string
  status: 'success' | 'error' | 'info'
}

export type TerminalCommandPaletteVariant1Props = {
  title?: string
  history: CommandHistoryEntry[]
  onRun?: (command: string) => void
  className?: string
}

const outputColor: Record<CommandHistoryEntry['status'], string> = {
  success: 'text-emerald-400',
  error: 'text-red-400',
  info: 'text-gray-300',
}

/**
 * Copy-and-own Tailwind component. Inline command runner styled like a terminal:
 * a scrollable history of prior command/output pairs (colored by outcome) above
 * a live input line with a blinking caret. Distinct from Terminal Blocks (static
 * code display) and Command (a fuzzy-search action palette) — this actually runs
 * commands and shows their results.
 */
export function TerminalCommandPalette({ title = 'Command palette', history, onRun, className }: TerminalCommandPaletteVariant1Props) {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      onRun?.(input.trim())
      setInput('')
    }
  }

  return (
    <div className={`w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-lg ${className ?? ''}`}>
      <div className="flex items-center gap-1.5 border-b border-gray-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" aria-hidden="true" />
        <span className="ml-2 text-xs font-medium text-gray-400">{title}</span>
      </div>

      <div className="max-h-64 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed" role="log" aria-live="polite">
        {history.map((entry, i) => (
          <div key={i} className={i === history.length - 1 ? '' : 'mb-3'}>
            <p className="flex items-center gap-1.5 text-gray-500">
              <span className="text-emerald-400">&gt;</span>
              {entry.command}
            </p>
            <p className={`mt-1 pl-4 ${outputColor[entry.status]}`}>{entry.output}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1.5 border-t border-gray-800 px-4 py-2.5 font-mono text-xs" onClick={() => inputRef.current?.focus()}>
        <span className="text-emerald-400">&gt;</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Command input"
          className="flex-1 bg-transparent text-gray-300 outline-none placeholder:text-gray-600"
          placeholder="Type a command…"
        />
      </div>
    </div>
  )
}
