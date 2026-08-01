import type { HTMLAttributes } from 'react'

type Signal = { emphasis: string; label: string; href?: string }

export type SignalMarqueeProps = HTMLAttributes<HTMLElement> & {
  signals?: Signal[]
}

const defaultSignals: Signal[] = [
  { emphasis: '94% faster', label: 'component discovery' },
  { emphasis: 'Zero guesswork', label: 'installation notes', href: '#' },
  { emphasis: 'Built for teams', label: 'that ship weekly' },
  { emphasis: 'One registry', label: 'for every surface', href: '#' },
]

function SignalItems({ signals, hidden = false }: { signals: Signal[]; hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex items-center gap-11 px-5 py-5 whitespace-nowrap">
      {signals.map(({ emphasis, label, href }) => {
        const content = <><span className="size-1.5 rounded-full bg-blue-600 ring-4 ring-blue-50" /><strong className="font-bold text-slate-950">{emphasis}</strong><span className="text-slate-600">{label}</span></>
        return href && !hidden ? <a key={emphasis} href={href} className="inline-flex items-center gap-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{content}</a> : <span key={emphasis} className="inline-flex items-center gap-2.5 text-sm font-semibold">{content}</span>
      })}
    </div>
  )
}

export function SignalMarquee({ signals = defaultSignals, className, ...props }: SignalMarqueeProps) {
  return (
    <section aria-label="Product signals" className={`group relative overflow-hidden border-y border-slate-200 bg-white ${className ?? ''}`} {...props}>
      <style>{`@keyframes signal-marquee { to { transform: translateX(-50%); } }`}</style>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent" />
      <div className="flex w-max motion-safe:animate-[signal-marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:whitespace-normal">
        <SignalItems signals={signals} />
        <SignalItems signals={signals} hidden />
      </div>
    </section>
  )
}
