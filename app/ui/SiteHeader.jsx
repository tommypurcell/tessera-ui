'use client'

import Link from 'next/link'
import { Check, Copy, Menu, MoreVertical, Search, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import Keycap from './Keycap'

const aliases = { pie: ['chart', 'donut'], graph: ['chart'], modal: ['dialog'] }
const componentCategories = [
  ['Product UI', '/components/application', 'Dashboards, forms, tables, controls, and app patterns.'],
  ['Marketing', '/components/marketing', 'Sections and conversion-oriented page components.'],
  ['Building Blocks', '/components/building-blocks', 'Small composable primitives for consistent product UI.'],
  ['Templates', '/components/templates', 'Full-page layouts for product and marketing surfaces.'],
  ['Neobrutalism', '/components/neobrutalism', 'Bold, high-contrast style-pack components.'],
]

const resourceLinks = [
  ['Example Websites', '/example-sites'],
  ['Tools', '/tools'],
  ['Blog', '/blog'],
]

function getResults(items, query) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) {return items.slice(0, 8)}
  const tokens = [normalized, ...(aliases[normalized] ?? [])]

  return items
    .map((item) => {
      const haystack = `${item.title} ${item.description} ${(item.terms ?? []).join(' ')}`.toLowerCase()
      const score = tokens.reduce((value, token) => value + (item.title.toLowerCase().startsWith(token) ? 4 : haystack.includes(token) ? 1 : 0), 0)
      return { item, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, 8)
    .map(({ item }) => item)
}

export default function SiteHeader({ searchItems }) {
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [skillCopied, setSkillCopied] = useState(false)
  const [query, setQuery] = useState('')
  const dialog = useRef(null)
  const input = useRef(null)
  const router = useRouter()
  const results = useMemo(() => getResults(searchItems, query), [searchItems, query])

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      dialog.current?.showModal()
      window.setTimeout(() => input.current?.focus(), 0)
    } else if (dialog.current?.open) {
      dialog.current.close()
    }
  }, [open])

  function search(event) {
    event.preventDefault()
    if (results[0]) {
      setOpen(false)
      router.push(results[0].href)
    }
  }

  async function copySkill() {
    try {
      const response = await fetch('/SKILL.md')
      if (!response.ok) {
        throw new Error('Could not load SKILL.md')
      }
      await navigator.clipboard.writeText(await response.text())
      setSkillCopied(true)
      window.setTimeout(() => setSkillCopied(false), 1600)
    } catch {
      setSkillCopied(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80">Tessera UI</Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors hover:text-gray-950"
              aria-haspopup="true"
            >
              Components
            </button>
            <div className="invisible absolute top-full left-0 z-50 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-[min(92vw,20rem)] rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl shadow-gray-950/10">
                <ul className="space-y-1">
                  {componentCategories.map(([label, href, description]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block rounded-lg px-3 py-2 transition hover:bg-gray-50"
                      >
                        <span className="block text-sm font-medium text-gray-900">{label}</span>
                        <span className="mt-1 block text-sm leading-5 text-gray-600">{description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {resourceLinks.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-950">
              {label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden h-10 items-center overflow-hidden rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:border-gray-400 hover:bg-gray-50 sm:flex">
            <button
              type="button"
              onClick={copySkill}
              aria-label="Copy SKILL.md"
              className="inline-flex h-full items-center gap-2 px-4 text-sm font-semibold"
            >
              {skillCopied ? (
                <Check className="size-[1.125rem] text-green-700" aria-hidden="true" />
              ) : (
                <Copy className="size-[1.125rem]" aria-hidden="true" />
              )}
              <span aria-live="polite">{skillCopied ? 'Copied' : 'SKILL.md'}</span>
            </button>
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <a
              href="/SKILL.md"
              target="_blank"
              rel="noreferrer"
              aria-label="Open SKILL.md"
              className="inline-flex h-full items-center px-3 hover:bg-gray-100"
            >
              <MoreVertical className="size-[1.125rem]" aria-hidden="true" />
            </a>
          </div>
          <ThemeToggle />
          <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 hover:bg-gray-50" aria-label="Open search">
            <Search className="size-4" /> <span>Search</span><span className="hidden items-center gap-1 sm:inline-flex"><Keycap>⌘</Keycap><Keycap>K</Keycap></span>
          </button>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-md p-2 lg:hidden" aria-expanded={menuOpen} aria-label="Toggle navigation"><Menu className="size-5" /></button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-7xl space-y-5">
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Components</h2>
              <ul className="mt-3 space-y-2">
                {componentCategories.map(([label, href, description]) => (
                  <li key={href}>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      href={href}
                      className="block rounded-lg border border-gray-100 px-3 py-3"
                    >
                      <span className="block text-sm font-medium text-gray-900">{label}</span>
                      <span className="mt-1 block text-sm leading-5 text-gray-600">{description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Resources</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {resourceLinks.map(([label, href]) => (
                  <Link
                    onClick={() => setMenuOpen(false)}
                    key={href}
                    href={href}
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </nav>
      )}
      <dialog ref={dialog} data-search-dialog onClose={() => setOpen(false)} className="fixed inset-0 m-auto w-[min(92vw,42rem)] rounded-xl border border-gray-200 p-0 shadow-2xl backdrop:bg-gray-950/40">
        <form method="dialog" className="border-b border-gray-200"><div className="flex items-center gap-3 p-4"><Search className="size-5 text-gray-500" /><input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') {search(event)} }} placeholder="Search components and articles" className="w-full border-0 p-0 text-base outline-none ring-0" /><button type="button" aria-label="Close search" onClick={() => setOpen(false)}><X className="size-5 text-gray-500" /></button></div></form>
        <form onSubmit={search} className="p-2"><p className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-gray-500">{query ? 'Results' : 'Suggestions'}</p>{results.length ? <ul role="listbox">{results.map((item) => <li key={item.href}><button type="button" onClick={() => { setOpen(false); router.push(item.href) }} className="block w-full rounded-lg px-3 py-3 text-left hover:bg-gray-50"><span className="block text-sm font-medium text-gray-950">{item.title}</span><span className="mt-1 block text-sm text-gray-600">{item.description}</span><span className="mt-1 block text-xs text-gray-500">{item.type}</span></button></li>)}</ul> : <p className="px-3 py-6 text-sm text-gray-600">No matching components or articles.</p>}</form>
      </dialog>
    </header>
  )
}
