export type MaintenanceModeScreenCountdown = {
  hours: string
  minutes: string
  seconds: string
}

export type MaintenanceModeScreenVariant2DarkProps = {
  title: string
  message: string
  countdown: MaintenanceModeScreenCountdown
  onNotifySubmit?: (email: string) => void
}

/**
 * Copy-and-own Tailwind component. Scheduled-maintenance screen with a
 * countdown and notify-me form, adapted for dark surfaces.
 */
export function MaintenanceModeScreen({
  title,
  message,
  countdown,
  onNotifySubmit,
}: MaintenanceModeScreenVariant2DarkProps) {
  return (
    <div className="flex min-h-[26rem] items-center justify-center bg-gray-950 p-6">
      <div className="flex max-w-md flex-col items-center text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
        </span>
        <h1 className="mt-5 text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-400">{message}</p>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-white">{countdown.hours}</span>
            <span className="text-xs text-gray-400">hours</span>
          </div>
          <span className="text-xl text-gray-700">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-white">{countdown.minutes}</span>
            <span className="text-xs text-gray-400">minutes</span>
          </div>
          <span className="text-xl text-gray-700">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-white">{countdown.seconds}</span>
            <span className="text-xs text-gray-400">seconds</span>
          </div>
        </div>

        <form
          className="mt-6 flex w-full max-w-xs gap-2"
          onSubmit={(event) => {
            event.preventDefault()
            const email = new FormData(event.currentTarget).get('email')
            onNotifySubmit?.(String(email ?? ''))
          }}
        >
          <label htmlFor="mm-email-dark" className="sr-only">
            Email address
          </label>
          <input
            id="mm-email-dark"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="min-w-0 flex-1 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
          >
            Notify me
          </button>
        </form>
      </div>
    </div>
  )
}
