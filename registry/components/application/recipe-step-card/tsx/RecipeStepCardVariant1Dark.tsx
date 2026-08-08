import { useEffect, useState } from 'react'

export type RecipeStepCardVariant1DarkProps = {
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
 * Copy-and-own Tailwind component. Dark-surface variant of the recipe step card.
 */
export function RecipeStepCardVariant1Dark({ stepNumber, instructions, timerSeconds, className }: RecipeStepCardVariant1DarkProps) {
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
    <div className={`overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      <div className="relative aspect-video w-full bg-gradient-to-br from-amber-300 to-orange-400">
        <span className="absolute top-3 left-3 flex size-7 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white shadow">{stepNumber}</span>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-300">{instructions}</p>

        <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-900 px-3 py-2">
          <span className="font-mono text-lg font-semibold tabular-nums text-white">{formatTime(remaining)}</span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggle}
              disabled={remaining <= 0}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-500"
            >
              {running ? 'Pause' : 'Start'}
            </button>
            <button type="button" onClick={reset} className="rounded-md border border-gray-700 bg-gray-950 px-3 py-1.5 text-xs font-medium text-gray-200 hover:bg-gray-900">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
