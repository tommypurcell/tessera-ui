import { useEffect, useState } from 'react'

export type RecipeStepCardVariant1Props = {
  stepNumber: number
  instructions: string
  timerSeconds: number
  className?: string
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

/**
 * Copy-and-own Tailwind component. Recipe step card — numbered step with instructions
 * and a real countdown timer (start/pause/reset) that ticks via setInterval and stops
 * itself at zero rather than a static duration label.
 */
export function RecipeStepCardVariant1({ stepNumber, instructions, timerSeconds, className }: RecipeStepCardVariant1Props) {
  const [remaining, setRemaining] = useState(timerSeconds)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    if (remaining <= 0) {
      setRunning(false)
      return
    }
    const id = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          setRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running, remaining])

  function toggle() {
    if (remaining <= 0) return
    setRunning((prev) => !prev)
  }

  function reset() {
    setRunning(false)
    setRemaining(timerSeconds)
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      <div className="relative aspect-video w-full bg-gradient-to-br from-amber-300 to-orange-400">
        <span className="absolute top-3 left-3 flex size-7 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-900 shadow">{stepNumber}</span>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-700">{instructions}</p>

        <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
          <span className="font-mono text-lg font-semibold tabular-nums text-gray-900">{formatTime(remaining)}</span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggle}
              disabled={remaining <= 0}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
            >
              {running ? 'Pause' : 'Start'}
            </button>
            <button type="button" onClick={reset} className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
