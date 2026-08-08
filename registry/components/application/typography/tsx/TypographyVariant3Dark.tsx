import type { HTMLAttributes } from 'react'

export type TypographyVariant3DarkProps = HTMLAttributes<HTMLDivElement> & {
  large: string
  label: string
  muted: string
}

/**
 * Copy-and-own Tailwind component. Utility text sizes adapted for dark
 * surfaces.
 */
export function Typography({ className, large, label, muted, ...props }: TypographyVariant3DarkProps) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ''}`} {...props}>
      <div className="text-lg font-semibold text-white">{large}</div>
      <label className="text-sm leading-none font-medium text-white">{label}</label>
      <p className="text-sm text-gray-400">{muted}</p>
    </div>
  )
}
