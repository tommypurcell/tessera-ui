'use client'
import { useMemo, useState } from 'react'

const scale = [{ px: 12, name: 'text-xs' }, { px: 14, name: 'text-sm' }, { px: 16, name: 'text-base' }, { px: 18, name: 'text-lg' }, { px: 20, name: 'text-xl' }, { px: 24, name: 'text-2xl' }, { px: 30, name: 'text-3xl' }, { px: 36, name: 'text-4xl' }, { px: 48, name: 'text-5xl' }, { px: 60, name: 'text-6xl' }]

export default function TypographyMapperPage() {
  const [size, setSize] = useState('16')
  const match = useMemo(() => scale.reduce((closest, item) => Math.abs(item.px - Number(size)) < Math.abs(closest.px - Number(size)) ? item : closest, scale[0]), [size])
  return <main id="main-content" className="mx-auto max-w-3xl px-4 py-10"><p className="text-sm font-medium text-gray-600">Component tool</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">Typography Mapper</h1><p className="mt-4 text-lg leading-8 text-gray-600">Enter a type size from a design handoff to find the closest Tailwind typography utility.</p><label className="mt-10 block text-sm font-medium">Font size in pixels<input type="number" min="1" value={size} onChange={(event) => setSize(event.target.value)} className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-base" /></label><section className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6"><p className="text-sm text-gray-600">Closest Tailwind size</p><p className="mt-2 font-mono text-3xl font-semibold">{match.name}</p><p className="mt-2 text-sm text-gray-600">Exact fallback: <code>text-[{size || 0}px]</code></p></section></main>
}
