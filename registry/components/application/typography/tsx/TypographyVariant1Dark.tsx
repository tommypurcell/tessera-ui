import type { HTMLAttributes } from 'react'

export type TypographyVariant1DarkProps = HTMLAttributes<HTMLDivElement> & {
  h1: string
  h2: string
  h3: string
  h4: string
  lead: string
}

/**
 * Copy-and-own Tailwind component. Heading type scale (h1-h4) plus a lead
 * paragraph, adapted for dark surfaces.
 */
export function Typography({
  className,
  h1,
  h2,
  h3,
  h4,
  lead,
  ...props
}: TypographyVariant1DarkProps) {
  return (
    <div className={`flex flex-col gap-4 ${className ?? ''}`} {...props}>
      <h1 className="text-4xl font-extrabold tracking-tight text-white">{h1}</h1>
      <h2 className="mt-4 border-b border-gray-800 pb-2 text-2xl font-semibold tracking-tight text-white">
        {h2}
      </h2>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{h3}</h3>
      <h4 className="mt-2 text-lg font-semibold tracking-tight text-white">{h4}</h4>
      <p className="text-lg text-gray-400">{lead}</p>
    </div>
  )
}
