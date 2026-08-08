import type { HTMLAttributes } from 'react'

export type DeliverySlotBadge = {
  label: string
  tone: 'green' | 'blue'
}

export type DeliverySlot = {
  id: string
  timeWindow: string
  description: string
  price: string
  badge?: DeliverySlotBadge
  selected?: boolean
  disabled?: boolean
}

export type DeliverySlotPickerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  title: string
  slots: DeliverySlot[]
  onSelectSlot?: (slot: DeliverySlot) => void
}

const badgeToneDark: Record<DeliverySlotBadge['tone'], string> = {
  green: 'bg-green-900/50 text-green-400',
  blue: 'bg-blue-900/50 text-blue-400',
}

/**
 * Copy-and-own Tailwind component. Delivery-window radio-card list taking a
 * real slots contract — pass your own scheduling/pricing data instead of hand-editing markup.
 */
export function DeliverySlotPickerDark({ className, title, slots, onSelectSlot, ...props }: DeliverySlotPickerVariant1DarkProps) {
  return (
    <div className={`flex flex-col gap-2.5 ${className ?? ''}`} {...props}>
      <h3 className="text-sm font-semibold text-white">{title}</h3>

      {slots.map((slot) => (
        <label
          key={slot.id}
          className={`flex items-center justify-between rounded-lg px-4 py-3 ${
            slot.disabled
              ? 'cursor-not-allowed border border-gray-800 opacity-50'
              : slot.selected
                ? 'cursor-pointer border-2 border-white bg-gray-900'
                : 'cursor-pointer border border-gray-800 hover:bg-gray-900'
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery-slot"
              checked={slot.selected ?? false}
              disabled={slot.disabled}
              onChange={() => onSelectSlot?.(slot)}
              className="size-4 border-gray-600 bg-gray-900 text-white focus:ring-gray-500"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-medium text-white">{slot.timeWindow}</p>
                {slot.badge ? <span className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium ${badgeToneDark[slot.badge.tone]}`}>{slot.badge.label}</span> : null}
              </div>
              <p className="text-xs text-gray-500">{slot.description}</p>
            </div>
          </div>
          <span className={`text-sm font-medium ${slot.disabled ? 'text-gray-500' : 'text-white'}`}>{slot.price}</span>
        </label>
      ))}
    </div>
  )
}
