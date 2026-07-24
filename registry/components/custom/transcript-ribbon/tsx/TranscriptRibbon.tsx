import type { HTMLAttributes } from 'react'

export type TranscriptRibbonProps = HTMLAttributes<HTMLElement> & {
  message?: string
  supportingMessage?: string
}

const defaultMessage = 'Keep the thought moving'
const defaultSupportingMessage = '— the next step is already taking shape.'

function TranscriptWords({ message, supportingMessage, hidden = false }: { message: string; supportingMessage: string; hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex items-center gap-7 px-[18px] py-3.5 text-[18px] font-semibold tracking-[-0.02em] whitespace-nowrap text-slate-50">
      <span className="text-[13px] text-emerald-300">●</span><span>{message}</span><span className="text-slate-300">{supportingMessage}</span><span className="text-[13px] text-emerald-300">●</span><span>{message}</span><span className="text-slate-300">{supportingMessage}</span>
    </div>
  )
}

export function TranscriptRibbon({ message = defaultMessage, supportingMessage = defaultSupportingMessage, className, ...props }: TranscriptRibbonProps) {
  return (
    <section aria-labelledby="transcript-ribbon-title" className={`group relative isolate h-[372px] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_28%,#fff_0,#f7f8fc_35%,#e8edf8_100%)] text-slate-900 ${className ?? ''}`} {...props}>
      <style>{`@keyframes transcript-ribbon-flow { to { transform: translateX(-50%); } } @keyframes transcript-ribbon-ghost { to { transform: translate(45px, -11px) rotate(12deg); } } @keyframes transcript-ribbon-float { 50% { transform: translate(-50%, -7px); } } @keyframes transcript-ribbon-bar { to { transform: scaleY(.48); opacity: .68; } }`}</style>
      <p className="absolute top-[51px] left-1/2 z-10 -translate-x-1/2 text-[11px] font-extrabold tracking-[.16em] text-slate-500 uppercase">Voice, in motion</p>
      <h2 id="transcript-ribbon-title" className="absolute top-[78px] left-1/2 z-10 m-0 w-[min(92%,720px)] -translate-x-1/2 text-center font-serif text-[clamp(36px,5.2vw,62px)] leading-[.98] font-medium tracking-[-.055em] text-slate-900">Let the idea move first.</h2>
      <p aria-hidden="true" className="absolute top-[213px] left-[-100px] z-0 m-0 w-[620px] rotate-[12deg] whitespace-nowrap text-[19px] leading-[1.35] text-slate-500/30 motion-safe:animate-[transcript-ribbon-ghost_12s_ease-in-out_infinite_alternate] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">Start with a thought. Keep the detail. Let the next line find its shape.</p>
      <div className="absolute right-[-7%] bottom-3 left-[-7%] z-[1] h-[126px] -rotate-[7deg]">
        <div className="absolute top-[53px] w-full overflow-hidden rounded-full border border-slate-900 bg-slate-900 shadow-[0_18px_32px_rgba(30,41,59,.18)]">
          <div className="flex w-max motion-safe:animate-[transcript-ribbon-flow_19s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
            <TranscriptWords message={message} supportingMessage={supportingMessage} />
            <TranscriptWords message={message} supportingMessage={supportingMessage} hidden />
          </div>
        </div>
      </div>
      <div aria-label="Voice activity" role="img" className="absolute bottom-[38px] left-1/2 z-20 flex h-[61px] w-[112px] -translate-x-1/2 items-center justify-center gap-1 rounded-full border border-slate-300 bg-white/95 shadow-[0_16px_30px_rgba(30,41,59,.16)] motion-safe:animate-[transcript-ribbon-float_3.4s_ease-in-out_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {[11, 19, 28, 17, 34, 17, 28, 19, 11].map((height, index) => <span key={index} className="w-[3px] rounded-full bg-blue-600 motion-safe:animate-[transcript-ribbon-bar_900ms_ease-in-out_infinite_alternate] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]" style={{ height, animationDelay: `${[-580, -120, -430, -260, -710, -260, -430, -120, -580][index]}ms` }} />)}
      </div>
    </section>
  )
}
