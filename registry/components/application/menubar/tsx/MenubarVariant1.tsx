import { useEffect, useRef, useState, type KeyboardEvent } from 'react'

export type MenubarItem = {
  label: string
  keys?: string[]
  disabled?: boolean
  onSelect?: () => void
}

export type MenubarMenu = {
  label: string
  items: MenubarItem[]
}

export type MenubarVariant1Props = {
  menus: MenubarMenu[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Horizontal application menu bar (File/Edit/View
 * style): each top-level label opens a dropdown of menu items, Escape closes and
 * returns focus to the trigger, and ArrowLeft/ArrowRight move between top-level menus.
 */
export function Menubar({ menus, className }: MenubarVariant1Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([])
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (openIndex === null) return
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenIndex(null)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [openIndex])

  const handleTriggerKeyDown = (index: number, e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const next = (index + 1) % menus.length
      triggerRefs.current[next]?.focus()
      if (openIndex !== null) setOpenIndex(next)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = (index - 1 + menus.length) % menus.length
      triggerRefs.current[prev]?.focus()
      if (openIndex !== null) setOpenIndex(prev)
    } else if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpenIndex(index)
    } else if (e.key === 'Escape') {
      setOpenIndex(null)
    }
  }

  return (
    <nav
      ref={rootRef}
      aria-label="Application menu"
      className={`inline-flex items-center gap-0.5 rounded-lg border border-gray-200 bg-white p-1 shadow-sm ${className ?? ''}`}
    >
      {menus.map((menu, index) => {
        const isOpen = openIndex === index
        return (
          <div key={menu.label} className="relative">
            <button
              ref={(el) => {
                triggerRefs.current[index] = el
              }}
              type="button"
              aria-haspopup="menu"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              onKeyDown={(e) => handleTriggerKeyDown(index, e)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                isOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {menu.label}
            </button>

            {isOpen ? (
              <div
                role="menu"
                aria-label={menu.label}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setOpenIndex(null)
                    triggerRefs.current[index]?.focus()
                  }
                }}
                className="absolute left-0 top-full z-10 mt-1 w-56 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
              >
                {menu.items.map((item, i) =>
                  item.label === '-' ? (
                    <div key={i} role="separator" className="my-1 border-t border-gray-200" />
                  ) : (
                    <button
                      key={item.label}
                      role="menuitem"
                      type="button"
                      disabled={item.disabled}
                      onClick={() => {
                        item.onSelect?.()
                        setOpenIndex(null)
                      }}
                      className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-sm ${
                        item.disabled ? 'cursor-not-allowed text-gray-400' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      {item.keys ? (
                        <span className="flex items-center gap-0.5">
                          {item.keys.map((key, ki) => (
                            <kbd
                              key={ki}
                              className={`rounded border px-1 py-0.5 font-mono text-[10px] ${
                                item.disabled ? 'border-gray-200 bg-gray-50 text-gray-300' : 'border-gray-300 bg-gray-50 text-gray-500'
                              }`}
                            >
                              {key}
                            </kbd>
                          ))}
                        </span>
                      ) : null}
                    </button>
                  ),
                )}
              </div>
            ) : null}
          </div>
        )
      })}
    </nav>
  )
}
