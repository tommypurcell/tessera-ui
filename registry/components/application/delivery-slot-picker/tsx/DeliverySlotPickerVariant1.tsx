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

export type DeliverySlotPickerVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  title: string
  slots: DeliverySlot[]
  onSelectSlot?: (slot: DeliverySlot) => void
}

const badgeTone: Record<DeliverySlotBadge['tone'], string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
}

/**
 * Copy-and-own Tailwind component. Delivery-window radio-card list taking a
 * real slots contract — pass your own scheduling/pricing data instead of hand-editing markup.
 */
export function DeliverySlotPicker({ className, title, slots, onSelectSlot, ...props }: DeliverySlotPickerVariant1Props) {
  return (
    <div className={`flex flex-col gap-2.5 ${className ?? ''}`} {...props}>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

      {slots.map((slot) => (
        <label
          key={slot.id}
          className={`flex items-center justify-between rounded-lg px-4 py-3 ${
            slot.disabled
              ? 'cursor-not-allowed border border-gray-100 opacity-50'
              : slot.selected
                ? 'cursor-pointer border-2 border-gray-900 bg-gray-50'
                : 'cursor-pointer border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery-slot"
              checked={slot.selected ?? false}
              disabled={slot.disabled}
              onChange={() => onSelectSlot?.(slot)}
              className="size-4 border-gray-300 text-gray-900 focus:ring-gray-500"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-medium text-gray-900">{slot.timeWindow}</p>
                {slot.badge ? <span className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium ${badgeTone[slot.badge.tone]}`}>{slot.badge.label}</span> : null}
              </div>
              <p className="text-xs text-gray-500">{slot.description}</p>
            </div>
          </div>
          <span className={`text-sm font-medium ${slot.disabled ? 'text-gray-400' : 'text-gray-900'}`}>{slot.price}</span>
        </label>
      ))}
    </div>
  )
}
