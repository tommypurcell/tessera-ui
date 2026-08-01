'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

function withoutTrailingSlash(value) {
  return value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value
}

export default function ComponentsSidebar({ groups }) {
  const pathname = withoutTrailingSlash(usePathname())
  const activeItemRef = useRef(null)

  useEffect(() => {
    activeItemRef.current?.scrollIntoView({ block: 'center' })
  }, [pathname])

  return (
    <nav aria-label="All components" className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-gray-200 px-4 py-8 lg:block">
      <p className="px-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">Components</p>
      <div className="mt-4 space-y-6">
        {groups.map((group) => {
          const groupHref = `/components/${group.category}`
          const isGroupActive = pathname === groupHref
          return (
            <div key={group.category}>
              <Link
                ref={isGroupActive ? activeItemRef : undefined}
                href={groupHref}
                className={`block rounded-md px-2 py-1 text-xs font-semibold tracking-wide uppercase transition-colors ${
                  isGroupActive ? 'text-gray-950' : 'text-gray-500 hover:text-gray-950'
                }`}
              >
                {group.title}
              </Link>
              <ul className="mt-1 space-y-0.5">
                {group.components.map((component) => {
                  const href = `/components/${group.category}/${component.slug}`
                  const isActive = pathname === href
                  return (
                    <li key={component.slug}>
                      <Link
                        ref={isActive ? activeItemRef : undefined}
                        href={href}
                        className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                          isActive ? 'bg-gray-100 font-medium text-gray-950' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950'
                        }`}
                      >
                        {component.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
