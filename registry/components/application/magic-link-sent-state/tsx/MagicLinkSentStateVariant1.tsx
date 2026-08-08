import { useEffect, useState } from 'react'

export type MagicLinkSentStateVariant1Props = {
  email: string
  resendSeconds?: number
  onResend?: () => void
  onChangeEmail?: () => void
  className?: string
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/**
 * Copy-and-own Tailwind component. Confirmation panel shown after sending a magic
 * sign-in link: echoes the destination email, disables "Resend link" behind a
 * countdown, and offers a "Change it" fallback if the address was wrong.
 */
export function MagicLinkSentState({ email, resendSeconds = 45, onResend, onChangeEmail, className }: MagicLinkSentStateVariant1Props) {
  const [remaining, setRemaining] = useState(resendSeconds)

  useEffect(() => {
    if (remaining <= 0) return
    const id = setTimeout(() => setRemaining((r) => r - 1), 1000)
    return () => clearTimeout(id)
  }, [remaining])

  const canResend = remaining <= 0

  return (
    <div className={`w-full rounded-xl border border-gray-200 bg-white p-6 text-center ${className ?? ''}`}>
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
          <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
        </svg>
      </div>

      <h2 className="mt-4 text-base font-semibold text-gray-900">Check your email</h2>
      <p className="mt-1.5 text-sm text-gray-500">
        We sent a sign-in link to
        <br />
        <span className="font-medium text-gray-900">{email}</span>
      </p>

      <button
        type="button"
        disabled={!canResend}
        onClick={() => {
          if (!canResend) return
          onResend?.()
          setRemaining(resendSeconds)
        }}
        className={
          canResend
            ? 'mt-6 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
            : 'mt-6 w-full cursor-not-allowed rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400'
        }
      >
        {canResend ? 'Resend link' : `Resend link in ${formatTime(remaining)}`}
      </button>

      <p className="mt-4 text-xs text-gray-500">
        Wrong email?{' '}
        <button type="button" onClick={onChangeEmail} className="font-medium text-indigo-600 hover:text-indigo-700">
          Change it
        </button>
      </p>
    </div>
  )
}
