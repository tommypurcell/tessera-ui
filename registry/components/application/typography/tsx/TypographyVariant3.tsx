import type { HTMLAttributes } from 'react'

export type TypographyVariant3Props = HTMLAttributes<HTMLDivElement> & {
  large: string
  label: string
  muted: string
}

/**
 * Copy-and-own Tailwind component. Utility text sizes for confirmation
 * headings, form labels, and muted helper copy.
 */
export function Typography({ className, large, label, muted, ...props }: TypographyVariant3Props) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ''}`} {...props}>
      <div className="text-lg font-semibold text-gray-900">{large}</div>
      <label className="text-sm leading-none font-medium text-gray-900">{label}</label>
      <p className="text-sm text-gray-500">{muted}</p>
    </div>
  )
}
