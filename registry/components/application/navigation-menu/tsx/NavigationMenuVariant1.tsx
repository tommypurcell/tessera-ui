import { useEffect, useRef, useState } from 'react'

export type NavMenuLink = {
  label: string
  description: string
  href: string
}

export type NavItem =
  | { kind: 'link'; label: string; href: string; current?: boolean }
  | { kind: 'menu'; label: string; links: NavMenuLink[] }

export type NavigationMenuVariant1Props = {
  items: NavItem[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Horizontal site navigation bar where a top-level
 * item can be a plain link or a trigger that opens a mega-menu panel of grouped
 * sub-links with descriptions. Closes on outside click or Escape.
 */
export function NavigationMenu({ items, className }: NavigationMenuVariant1Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (openIndex === null) return
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenIndex(null)
    }
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openIndex])

  return (
    <nav ref={rootRef} aria-label="Main" className={`relative w-full ${className ?? ''}`}>
      <ul className="flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
        {items.map((item, index) => {
          if (item.kind === 'link') {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          }

          const isOpen = openIndex === index
          return (
            <li key={item.label} className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium ${
                  isOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen ? (
                <div className="absolute left-1/2 top-full z-10 mt-2 w-96 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                  <div className="grid grid-cols-2 gap-2">
                    {item.links.map((link) => (
                      <a key={link.label} href={link.href} className="rounded-lg p-3 hover:bg-gray-50">
                        <p className="text-sm font-medium text-gray-900">{link.label}</p>
                        <p className="mt-0.5 text-xs text-gray-500">{link.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
