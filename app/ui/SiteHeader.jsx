'use client'

import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import Keycap from './Keycap'

const aliases = { pie: ['chart', 'donut'], graph: ['chart'], modal: ['dialog'] }

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

  const links = [
    ['Application', '/components/application'], ['Marketing', '/components/marketing'], ['Neobrutalism', '/components/neobrutalism'],
    ['Templates', '/components/templates'], ['Open-source imports', '/components/imports'], ['Building Blocks', '/components/building-blocks'], ['Custom Made Components', '/components/custom'], ['Tools', '/tools'], ['Blog', '/blog'],
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80">Tessera UI</Link>
        <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-gray-600 transition-colors hover:text-gray-950">{label}</Link>)}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 hover:bg-gray-50" aria-label="Open search">
            <Search className="size-4" /> <span>Search</span><span className="hidden items-center gap-1 sm:inline-flex"><Keycap>⌘</Keycap><Keycap>K</Keycap></span>
          </button>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-md p-2 lg:hidden" aria-expanded={menuOpen} aria-label="Toggle navigation"><Menu className="size-5" /></button>
        </div>
      </div>
      {menuOpen && <nav className="border-t border-gray-200 bg-white px-4 py-3 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-wrap gap-x-5 gap-y-3">{links.map(([label, href]) => <Link onClick={() => setMenuOpen(false)} key={href} href={href} className="text-sm text-gray-700">{label}</Link>)}</div></nav>}
      <dialog ref={dialog} data-search-dialog onClose={() => setOpen(false)} className="fixed inset-0 m-auto w-[min(92vw,42rem)] rounded-xl border border-gray-200 p-0 shadow-2xl backdrop:bg-gray-950/40">
        <form method="dialog" className="border-b border-gray-200"><div className="flex items-center gap-3 p-4"><Search className="size-5 text-gray-500" /><input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') {search(event)} }} placeholder="Search components and articles" className="w-full border-0 p-0 text-base outline-none ring-0" /><button type="button" aria-label="Close search" onClick={() => setOpen(false)}><X className="size-5 text-gray-500" /></button></div></form>
        <form onSubmit={search} className="p-2"><p className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-gray-500">{query ? 'Results' : 'Suggestions'}</p>{results.length ? <ul role="listbox">{results.map((item) => <li key={item.href}><button type="button" onClick={() => { setOpen(false); router.push(item.href) }} className="block w-full rounded-lg px-3 py-3 text-left hover:bg-gray-50"><span className="block text-sm font-medium text-gray-950">{item.title}</span><span className="mt-1 block text-sm text-gray-600">{item.description}</span><span className="mt-1 block text-xs text-gray-500">{item.type}</span></button></li>)}</ul> : <p className="px-3 py-6 text-sm text-gray-600">No matching components or articles.</p>}</form>
      </dialog>
    </header>
  )
}
