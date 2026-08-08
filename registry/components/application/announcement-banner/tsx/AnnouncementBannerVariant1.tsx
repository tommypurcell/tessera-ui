import { useState, type ReactNode } from 'react'

export type AnnouncementBannerSeverity = 'info' | 'success' | 'warning'

export type AnnouncementBannerVariant1Props = {
  severity?: AnnouncementBannerSeverity
  message: ReactNode
  ctaLabel?: string
  onCtaClick?: () => void
  onDismiss?: () => void
}

const severityStyles: Record<AnnouncementBannerSeverity, { bg: string; text: string; cta: string; ring: string }> = {
  info: {
    bg: 'bg-blue-600',
    text: 'text-white',
    cta: 'text-blue-600 bg-white hover:bg-blue-50',
    ring: 'focus-visible:ring-white',
  },
  success: {
    bg: 'bg-green-600',
    text: 'text-white',
    cta: 'text-green-700 bg-white hover:bg-green-50',
    ring: 'focus-visible:ring-white',
  },
  warning: {
    bg: 'bg-amber-500',
    text: 'text-amber-950',
    cta: 'text-amber-900 bg-white hover:bg-amber-50',
    ring: 'focus-visible:ring-amber-900',
  },
}

/**
 * Copy-and-own Tailwind component. Full-width, dismissible top-of-page
 * banner for product news, maintenance notices, or promotions. Dismissal
 * state is left to the caller (unmount the component on onDismiss) so it
 * can be persisted across sessions if desired.
 */
export function AnnouncementBanner({
  severity = 'info',
  message,
  ctaLabel,
  onCtaClick,
  onDismiss,
}: AnnouncementBannerVariant1Props) {
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
            className={`shrink-0 rounded-md px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${style.cta} ${style.ring}`}
          >
            {ctaLabel}
          </button>
        ) : null}

        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className={`ml-auto shrink-0 rounded-md p-1 opacity-80 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${style.ring}`}
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
