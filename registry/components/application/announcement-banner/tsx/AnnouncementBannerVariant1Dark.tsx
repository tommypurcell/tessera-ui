import { useState, type ReactNode } from 'react'

export type AnnouncementBannerSeverity = 'info' | 'success' | 'warning'

export type AnnouncementBannerVariant1DarkProps = {
  severity?: AnnouncementBannerSeverity
  message: ReactNode
  ctaLabel?: string
  onCtaClick?: () => void
  onDismiss?: () => void
}

const severityStyles: Record<AnnouncementBannerSeverity, { bg: string; text: string; cta: string; ring: string }> = {
  info: {
    bg: 'bg-blue-900',
    text: 'text-blue-50',
    cta: 'text-blue-900 bg-blue-50 hover:bg-white',
    ring: 'focus-visible:ring-blue-300',
  },
  success: {
    bg: 'bg-green-900',
    text: 'text-green-50',
    cta: 'text-green-900 bg-green-50 hover:bg-white',
    ring: 'focus-visible:ring-green-300',
  },
  warning: {
    bg: 'bg-amber-900',
    text: 'text-amber-50',
    cta: 'text-amber-900 bg-amber-50 hover:bg-white',
    ring: 'focus-visible:ring-amber-300',
  },
}

/**
 * Copy-and-own Tailwind component. Full-width, dismissible top-of-page
 * banner adapted for dark surfaces. Dismissal state is left to the caller
 * (unmount the component on onDismiss) so it can be persisted across
 * sessions if desired.
 */
export function AnnouncementBannerDark({
  severity = 'info',
  message,
  ctaLabel,
  onCtaClick,
  onDismiss,
}: AnnouncementBannerVariant1DarkProps) {
  const [dismissed, setDismissed] = useState(false)
  const style = severityStyles[severity]

  if (dismissed) return null

  function handleDismiss() {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div role="region" aria-label="Announcement" className={`${style.bg} ${style.text}`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2.5 sm:px-6">
        <p className="text-sm font-medium">{message}</p>

        {ctaLabel ? (
          <button
            type="button"
            onClick={onCtaClick}
            className={`shrink-0 rounded-md px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${style.cta} ${style.ring}`}
          >
            {ctaLabel}
          </button>
        ) : null}

        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className={`ml-auto shrink-0 rounded-md p-1 opacity-80 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${style.ring}`}
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
