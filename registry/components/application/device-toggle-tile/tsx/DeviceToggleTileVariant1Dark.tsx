import { useId, useState, type ReactNode } from 'react'

export type Device = {
  id: string
  name: string
  icon: ReactNode
  iconBgClass: string
  iconTextClass: string
  isOn: boolean
  /** Extra status text shown when on, e.g. "71°F". Appended after "On". */
  onDetail?: string
  offLabel?: string
}

export type DeviceToggleTileVariant1DarkProps = {
  devices: Device[]
  onToggle?: (deviceId: string, isOn: boolean) => void
  className?: string
}

function DeviceTile({
  device,
  onToggle,
}: {
  device: Device
  onToggle?: (deviceId: string, isOn: boolean) => void
}) {
  const [isOn, setIsOn] = useState(device.isOn)
  const inputId = useId()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOn(e.target.checked)
    onToggle?.(device.id, e.target.checked)
  }

  return (
    <li className="rounded-xl border border-gray-800 bg-gray-950 p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className={`flex size-9 items-center justify-center rounded-full ${device.iconBgClass} ${device.iconTextClass}`}>
          {device.icon}
        </div>

        <label
          htmlFor={inputId}
          className="relative block h-6 w-11 shrink-0 rounded-full bg-gray-700 transition-colors has-checked:bg-emerald-500"
        >
          <input
            type="checkbox"
            id={inputId}
            checked={isOn}
            onChange={handleChange}
            className="peer sr-only"
          />
          <span className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-5" />
        </label>
      </div>

      <p className={`mt-3 text-sm font-medium ${isOn ? 'text-white' : 'text-gray-500'}`}>{device.name}</p>
      <p className={`text-xs ${isOn ? 'text-emerald-400' : 'text-gray-500'}`}>
        {isOn ? `On${device.onDetail ? ` · ${device.onDetail}` : ''}` : device.offLabel ?? 'Off'}
      </p>
    </li>
  )
}

/**
 * Copy-and-own Tailwind component. Smart-home device tile grid adapted for dark
 * surfaces — device icon, name, and an on/off toggle switch.
 */
export function DeviceToggleTileVariant1Dark({ devices, onToggle, className }: DeviceToggleTileVariant1DarkProps) {
  return (
    <ul className={`grid grid-cols-2 gap-3 ${className ?? ''}`}>
      {devices.map((device) => (
        <DeviceTile key={device.id} device={device} onToggle={onToggle} />
      ))}
    </ul>
  )
}
