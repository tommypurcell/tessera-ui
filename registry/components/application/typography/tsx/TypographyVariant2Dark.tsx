import type { HTMLAttributes } from 'react'

export type TypographyVariant2DarkProps = HTMLAttributes<HTMLDivElement> & {
  lead: string
  paragraph: string
  quote: string
  listItems: string[]
  codeLabel: string
  code: string
}

/**
 * Copy-and-own Tailwind component. Body-text elements adapted for dark
 * surfaces.
 */
export function Typography({
  className,
  lead,
  paragraph,
  quote,
  listItems,
  codeLabel,
  code,
  ...props
}: TypographyVariant2DarkProps) {
  return (
    <div className={`flex flex-col gap-4 ${className ?? ''}`} {...props}>
      <p className="text-xl text-gray-400">{lead}</p>
      <p className="leading-7 text-gray-300">{paragraph}</p>
      <blockquote className="mt-4 border-l-2 border-gray-700 pl-4 text-gray-300 italic">
        {quote}
      </blockquote>
      <ul className="ml-6 list-disc text-gray-300 [&>li]:mt-1">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="text-gray-300">
        {codeLabel}{' '}
        <code className="rounded bg-gray-800 px-1.5 py-0.5 font-mono text-sm font-semibold text-gray-100">
          {code}
        </code>
      </p>
    </div>
  )
}
