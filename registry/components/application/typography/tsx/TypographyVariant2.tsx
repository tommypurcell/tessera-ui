import type { HTMLAttributes } from 'react'

export type TypographyVariant2Props = HTMLAttributes<HTMLDivElement> & {
  lead: string
  paragraph: string
  quote: string
  listItems: string[]
  codeLabel: string
  code: string
}

/**
 * Copy-and-own Tailwind component. Body-text elements — lead paragraph,
 * running text, blockquote, list, and inline code — using real semantic
 * elements (blockquote, ul/li, code) rather than styled divs.
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
}: TypographyVariant2Props) {
  return (
    <div className={`flex flex-col gap-4 ${className ?? ''}`} {...props}>
      <p className="text-xl text-gray-500">{lead}</p>
      <p className="leading-7 text-gray-700">{paragraph}</p>
      <blockquote className="mt-4 border-l-2 border-gray-300 pl-4 text-gray-700 italic">
        {quote}
      </blockquote>
      <ul className="ml-6 list-disc text-gray-700 [&>li]:mt-1">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="text-gray-700">
        {codeLabel}{' '}
        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm font-semibold text-gray-800">
          {code}
        </code>
      </p>
    </div>
  )
}
