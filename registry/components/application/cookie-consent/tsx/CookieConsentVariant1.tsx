export type CookieConsentVariant1Props = {
  description?: string
  learnMoreHref?: string
  onRejectNonEssential?: () => void
  onCustomize?: () => void
  onAcceptAll?: () => void
}

/**
 * Copy-and-own Tailwind component. Bottom-anchored cookie consent banner with
 * accept-all, reject-non-essential, and customize actions. Render conditionally
 * until consent is recorded, and swap in CookieConsentPreferences for the
 * customize flow.
 */
export function CookieConsent({
  description = "We use cookies to run essential site features and, with your permission, to analyze traffic and personalize content.",
  learnMoreHref = '#',
  onRejectNonEssential,
  onCustomize,
  onAcceptAll,
}: CookieConsentVariant1Props) {
  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-describedby="cookie-consent-description"
      className="w-full border-t border-gray-200 bg-white p-4 shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.08)] sm:p-5"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="cookie-consent-description" className="text-sm leading-relaxed text-gray-600">
          {description} <a href={learnMoreHref} className="font-medium text-gray-900 hover:underline">Learn more</a>
        </p>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onRejectNonEssential}
            className="rounded-md px-3.5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={onCustomize}
            className="rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Customize
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className="rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
