export type WebhookDeliveryStatus = 'delivered' | 'failed' | 'pending'

export type WebhookEventRowVariant1DarkProps = {
  eventName: string
  timestamp: string
  status: WebhookDeliveryStatus
  responseCode?: number
  onRetry?: () => void
}

const statusStyles: Record<WebhookDeliveryStatus, string> = {
  delivered: 'bg-green-500/10 text-green-300',
  failed: 'bg-red-500/10 text-red-300',
  pending: 'bg-amber-500/10 text-amber-300',
}

const statusLabels: Record<WebhookDeliveryStatus, string> = {
  delivered: 'Delivered',
  failed: 'Failed',
  pending: 'Pending',
}

/**
 * Copy-and-own Tailwind component. Webhook delivery event row adapted
 * for dark surfaces, with a Retry action that only renders for failed
 * deliveries.
 */
export function WebhookEventRowDark({ eventName, timestamp, status, responseCode, onRetry }: WebhookEventRowVariant1DarkProps) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-gray-800 bg-gray-900 px-4 py-3 text-sm">
      <code className="shrink-0 rounded bg-gray-800 px-1.5 py-0.5 font-mono text-xs text-gray-300">{eventName}</code>

      <span className="shrink-0 text-xs text-gray-500">{timestamp}</span>

      <span className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}>{statusLabels[status]}</span>

      {responseCode !== undefined ? (
        <span className="shrink-0 font-mono text-xs text-gray-500">{responseCode}</span>
      ) : null}

      {status === 'failed' && onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="shrink-0 text-xs font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900"
        >
          Retry
        </button>
      ) : null}
    </div>
  )
}
