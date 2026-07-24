'use client'

import { ArrowRight, Blocks, Check, Code2, Github, Search, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const proofPoints = [
  'Trusted in 1,284 agent workspaces',
  '74 components are agent-readable',
  '1,906 installs validated this month',
]

function ProductScene() {
  return (
    <div className="relative mx-auto h-[25rem] w-full max-w-xl [perspective:1000px] sm:h-[31rem]" aria-hidden="true">
      <div className="hero-card-back absolute inset-x-8 top-14 h-72 rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 shadow-[0_35px_80px_-30px_rgba(91,70,255,.38)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-950 dark:to-violet-950" />
      <div className="hero-card-middle absolute left-10 top-16 w-56 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
        <div className="mb-4 flex gap-1.5"><i className="size-2 rounded-full bg-rose-400" /><i className="size-2 rounded-full bg-amber-400" /><i className="size-2 rounded-full bg-emerald-400" /></div>
        <p className="text-xs font-semibold text-slate-900 dark:text-white">Agent-ready registry</p>
        <div className="mt-3 space-y-2"><div className="h-2 w-4/5 rounded-full bg-violet-200" /><div className="h-2 w-3/5 rounded-full bg-slate-100" /><div className="h-2 w-2/3 rounded-full bg-slate-100" /></div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-violet-50 p-2 text-[10px] font-medium text-violet-700"><Check className="size-3" /> Metadata verified</div>
      </div>
      <div className="hero-card-front absolute right-2 top-28 w-64 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
        <p className="text-sm font-bold text-slate-900 dark:text-white">Choose a component</p>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500"><Search className="size-3.5" /> responsive dashboard</div>
        <div className="mt-3 rounded-xl border border-violet-100 bg-gradient-to-r from-violet-50 to-cyan-50 p-3"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-900">Dashboard sidebar</span><span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700">96% match</span></div><p className="mt-2 text-[10px] leading-4 text-slate-500">Desktop navigation that becomes a mobile drawer.</p></div>
      </div>
      <div className="hero-command absolute bottom-3 left-20 rounded-2xl bg-slate-950 px-4 py-3 text-xs text-white shadow-xl"><span className="text-violet-300">$</span> npx tessera-ui add sidebar</div>
      <div className="absolute bottom-10 right-8 grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 text-white shadow-lg"><Blocks className="size-7" /></div>
    </div>
  )
}

function ScrollShowcase({ progress }) {
  const phase = Math.min(2, Math.floor(progress * 3))
  const lines = ['inline-flex', 'items-center', 'rounded-xl', 'bg-violet-600', 'px-5 py-3', 'font-semibold text-white']
  const themes = [
    { label: 'Violet', primary: '#7c3aed', soft: '#ede9fe', ink: '#312e81' },
    { label: 'Ocean', primary: '#0891b2', soft: '#cffafe', ink: '#164e63' },
    { label: 'Coral', primary: '#e11d48', soft: '#ffe4e6', ink: '#881337' },
  ]
  const theme = themes[phase]
  const visibleCount = lines.length

  return <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
    <div><p className="text-sm font-bold uppercase tracking-[.16em] text-violet-600">Scroll-built UI</p><h2 className="mt-4 text-4xl font-black tracking-[-.045em] text-slate-950 dark:text-white">From intent to a working interface.</h2><p className="mt-4 max-w-md leading-7 text-slate-600 dark:text-slate-300">Scroll through the story to assemble a component and apply a token set—without making an agent guess at the right primitive.</p><div className="mt-8 rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-300 shadow-xl"><span className="text-violet-300">&lt;button</span><br />{lines.slice(0, visibleCount).map((line) => <span key={line} className="class-line block pl-4 opacity-0">className=<span className="text-emerald-300">&quot;{line}&quot;</span></span>)}<span className="text-violet-300">&gt;</span><span className="pl-2 text-white">Install component</span><span className="text-violet-300">&lt;/button&gt;</span></div></div>
    <div className="story-result rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_28px_70px_-45px_rgba(15,23,42,.7)] dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-slate-900 dark:text-white">Tessera UI workspace</span><span style={{ color: theme.primary }} className="text-xs font-bold">{theme.label} tokens</span></div><div style={{ backgroundColor: theme.soft }} className="theme-panel mt-5 rounded-2xl p-5 transition-colors duration-500"><div className="flex gap-3"><div style={{ backgroundColor: theme.primary }} className="size-10 rounded-xl shadow-sm" /><div className="flex-1"><div style={{ backgroundColor: theme.ink }} className="h-3 w-2/3 rounded-full opacity-80" /><div className="mt-2 h-2 w-full rounded-full bg-white/80" /></div></div><div className="mt-8 grid grid-cols-3 gap-3">{['Registry', 'Install', 'Verify'].map((item, index) => <div key={item} className="rounded-xl bg-white/80 p-3"><div style={{ backgroundColor: index === phase ? theme.primary : '#cbd5e1' }} className="size-6 rounded-lg transition-colors duration-500" /><p style={{ color: theme.ink }} className="mt-4 text-xs font-bold">{item}</p></div>)}</div><button style={{ backgroundColor: theme.primary }} className="mt-6 w-full rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition-colors duration-500">Install component</button></div><div className="mt-5 flex gap-2">{themes.map((item, index) => <span key={item.label} className={`h-1.5 flex-1 rounded-full ${index <= phase ? 'opacity-100' : 'bg-slate-200 opacity-100 dark:bg-slate-700'}`} style={index <= phase ? { backgroundColor: item.primary } : undefined} />)}</div></div>
  </div>
}

export default function TestLandingPage() {
  const [proofIndex, setProofIndex] = useState(0)
  const [storyProgress, setStoryProgress] = useState(0)
  const pageReference = useRef(null)
  const heroReference = useRef(null)
  const storyReference = useRef(null)

  useEffect(() => {
    const timer = window.setInterval(() => setProofIndex((index) => (index + 1) % proofPoints.length), 2800)
    return () => window.clearInterval(timer)
  }, [])

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const heroTimeline = gsap.timeline({ scrollTrigger: { trigger: heroReference.current, start: 'top top+=64', end: 'bottom bottom', scrub: reduceMotion ? 0 : 0.25, invalidateOnRefresh: true } })
    heroTimeline.fromTo('.hero-card-back', { y: 80, rotate: -7, opacity: 1 }, { y: 0, rotate: -3, opacity: 1, duration: 0.25 })
      .fromTo('.hero-card-middle', { y: 100, rotate: 6, opacity: 1 }, { y: 0, rotate: 2, opacity: 1, duration: 0.25 }, 0.12)
      .fromTo('.hero-card-front', { y: 120, scale: 0.92, opacity: 1 }, { y: 0, scale: 1, opacity: 1, duration: 0.3 }, 0.25)
      .fromTo('.hero-command', { y: 32, opacity: 1 }, { y: 0, opacity: 1, duration: 0.18 }, 0.7)

    const storyTimeline = gsap.timeline({ scrollTrigger: { trigger: storyReference.current, start: 'top top', end: 'bottom bottom', scrub: reduceMotion ? 0 : 0.25, invalidateOnRefresh: true, onUpdate: (trigger) => setStoryProgress(trigger.progress) } })
    storyTimeline.fromTo('.class-line', { opacity: 0, x: -12 }, { opacity: 1, x: 0, stagger: 0.08, duration: 0.12 })
      .fromTo('.story-result', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2 }, 0.45)
      .to('.theme-panel', { backgroundColor: '#cffafe', duration: 0.15 }, 0.6)
      .to('.theme-panel', { backgroundColor: '#ffe4e6', duration: 0.15 }, 0.8)
  }, { scope: pageReference })

  return (
    <main ref={pageReference} className="overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <section ref={heroReference} className="relative isolate h-[155svh] border-b border-slate-100 dark:border-slate-800">
        <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="max-w-2xl"><div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700 shadow-sm dark:border-violet-900 dark:bg-violet-950 dark:text-violet-200"><Sparkles className="size-4" /> UI infrastructure for coding agents</div><h1 className="mt-7 text-5xl font-black tracking-[-.06em] text-slate-950 dark:text-white sm:text-7xl">Build interfaces agents can actually understand.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">A searchable component library with structured metadata, predictable installation, and reusable UI knowledge for every project.</p><div className="mt-9 flex flex-wrap gap-3"><a href="/components/application" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-violet-700 dark:bg-white dark:text-slate-950">Explore components <ArrowRight className="size-4" /></a><a href="/blog/what-makes-a-ui-component-agent-readable" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white"><Code2 className="size-4" /> See how it works</a></div><div className="mt-6 flex min-h-6 items-center gap-2 text-sm text-slate-500 dark:text-slate-400"><span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,.14)]" /> <span key={proofIndex} className="animate-[fade-in_.35s_ease-out]">{proofPoints[proofIndex]}</span></div></div>
          <ProductScene />
        </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8"><div className="grid gap-5 md:grid-cols-3">{[["Discover", "Search by intent, responsive behavior, and accessibility requirements."], ["Install", "Copy exact source with the dependencies and setup an agent needs."], ["Verify", "Validate imports and avoid rebuilding components that already exist."]].map(([title, copy], index) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_-28px_rgba(15,23,42,.6)]"><span className="text-sm font-bold text-violet-600">0{index + 1}</span><h2 className="mt-6 text-2xl font-bold tracking-tight">{title}</h2><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}</div></section>
      <section ref={storyReference} className="relative h-[230svh] border-y border-slate-100 dark:border-slate-800">
        <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-14 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-7 flex items-center justify-between text-xs font-semibold uppercase tracking-[.16em] text-slate-400"><span>Scroll to build</span><span>{Math.round(storyProgress * 100)}%</span></div>
            <div className="h-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-violet-600 transition-[width] duration-75" style={{ width: `${Math.max(2, storyProgress * 100)}%` }} /></div>
            <div className="mt-10"><ScrollShowcase progress={storyProgress} /></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-16 text-center"><div className="rounded-[2rem] bg-slate-950 px-7 py-14 text-white shadow-2xl shadow-violet-200"><Github className="mx-auto size-6 text-violet-300" /><h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Stop making agents guess.</h2><p className="mx-auto mt-4 max-w-xl text-slate-300">Give every build a reliable source of UI knowledge.</p><a href="/components/application" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-violet-100">Browse the library <ArrowRight className="size-4" /></a></div></section>
    </main>
  )
}
