export type AttributionChannel = {
  label: string
  percent: number
  colorClass: string
}

export type AttributionBarVariant1Props = {
  title: string
  channels: AttributionChannel[]
}

/**
 * Copy-and-own Tailwind component. Horizontal stacked bar showing conversion
 * or revenue attribution by channel, with a matching legend listing each
 * channel's color, label, and percentage. Pass channels already sorted by
 * descending contribution for a natural reading order.
 */
export function AttributionBar({ title, channels }: AttributionBarVariant1Props) {
  const summary = channels.map((channel) => `${channel.label} ${channel.percent}%`).join(', ')

  return (
    <div className="w-80">
      <p className="mb-2 text-sm font-medium text-gray-700">{title}</p>

      <div className="flex h-3 overflow-hidden rounded-full" role="img" aria-label={summary}>
        {channels.map((channel) => (
          <span key={channel.label} aria-hidden="true" className={`h-full ${channel.colorClass}`} style={{ width: `${channel.percent}%` }} />
        ))}
      </div>

      <ul role="list" className="mt-3 flex flex-col gap-1.5">
        {channels.map((channel) => (
          <li key={channel.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-gray-700">
              <span aria-hidden="true" className={`size-2.5 rounded-full ${channel.colorClass}`} />
              {channel.label}
            </span>
            <span className="font-medium text-gray-900">{channel.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
