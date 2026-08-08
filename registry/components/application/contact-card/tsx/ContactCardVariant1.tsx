export type ContactCardVariant1Props = {
  name: string
  role: string
  company: string
  phone?: string
  email?: string
  onCall?: () => void
  onEmail?: () => void
  onMessage?: () => void
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

/**
 * Copy-and-own Tailwind component. Contact card with an avatar-initials
 * fallback and quick-action icon buttons (call/email/message) — each
 * action only renders when its corresponding handler is provided, so the
 * card never shows a dead affordance.
 */
export function ContactCard({ name, role, company, onCall, onEmail, onMessage }: ContactCardVariant1Props) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-700">
        {initials(name)}
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">{name}</p>
        <p className="truncate text-xs text-gray-500">
          {role} · {company}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        {onCall ? (
          <button
            type="button"
            onClick={onCall}
            aria-label={`Call ${name}`}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a11.25 11.25 0 01-6.373-6.373l1.293-.97a1.125 1.125 0 00.417-1.173L8.963 3.102a1.125 1.125 0 00-1.091-.852H6.5A2.25 2.25 0 004.25 4.5v1.5z" />
            </svg>
          </button>
        ) : null}

        {onEmail ? (
          <button
            type="button"
            onClick={onEmail}
            aria-label={`Email ${name}`}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </button>
        ) : null}

        {onMessage ? (
          <button
            type="button"
            onClick={onMessage}
            aria-label={`Message ${name}`}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  )
}
