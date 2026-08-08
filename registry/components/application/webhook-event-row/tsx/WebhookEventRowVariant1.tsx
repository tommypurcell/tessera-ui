export type WebhookDeliveryStatus = 'delivered' | 'failed' | 'pending'

export type WebhookEventRowVariant1Props = {
  eventName: string
  timestamp: string
  status: WebhookDeliveryStatus
  responseCode?: number
  onRetry?: () => void
}

const statusStyles: Record<WebhookDeliveryStatus, string> = {
  delivered: 'bg-green-100 text-green-700',
  failed: 'bg-red-100 text-red-700',
  pending: 'bg-amber-100 text-amber-700',
}

const statusLabels: Record<WebhookDeliveryStatus, string> = {
  delivered: 'Delivered',
  failed: 'Failed',
  pending: 'Pending',
}

/**
 * Copy-and-own Tailwind component. Webhook delivery event row with a
 * real status pill, response code, and a Retry action that only renders
 * for failed deliveries — retrying a delivered event is never offered.
 */
export function WebhookEventRow({ eventName, timestamp, status, responseCode, onRetry }: WebhookEventRowVariant1Props) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm">
      <code className="shrink-0 rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700">{eventName}</code>

      <span className="shrink-0 text-xs text-gray-500">{timestamp}</span>

      <span className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}>{statusLabels[status]}</span>

      {responseCode !== undefined ? (
        <span className="shrink-0 font-mono text-xs text-gray-500">{responseCode}</span>
      ) : null}

      {status === 'failed' && onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="shrink-0 text-xs font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
        >
          Retry
        </button>
      ) : null}
    </div>
  )
}
