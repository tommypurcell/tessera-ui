import type { HTMLAttributes, ReactNode } from 'react'

export type PhoneMockupProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode
}

export function PhoneMockup({ children, className, ...props }: PhoneMockupProps) {
  return (
    <section aria-label="Mobile product preview" className={`relative grid min-h-[560px] w-full place-items-center overflow-hidden bg-[radial-gradient(circle_at_52%_43%,#fff_0_20%,#edf1fa_61%,#e6ebf6_100%)] ${className ?? ''}`} {...props}>
      <div aria-hidden="true" className="absolute h-[420px] w-[420px] rounded-full border border-blue-600/20 shadow-[0_0_0_42px_rgba(49,94,251,.05),0_0_0_96px_rgba(49,94,251,.03)]" />
      <div className="relative z-10 w-[267px] rounded-[42px] border-2 border-slate-900 bg-[linear-gradient(135deg,#48566e,#121a29_33%,#1f2b40_70%,#111827)] p-[9px] shadow-[0_28px_45px_rgba(26,34,49,.28),inset_0_1px_1px_rgba(255,255,255,.36)]">
        <div className="relative h-[522px] overflow-hidden rounded-[33px] bg-[#d9ecff]">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(150deg,#9cd8ff_0%,#d4ebff_36%,#f6c8bb_37%,#fae0b8_61%,#edb3de_62%,#b2a7f4_100%)]" />
          <div aria-hidden="true" className="absolute top-[85px] left-[-48px] size-[242px] rounded-full bg-indigo-500 mix-blend-soft-light blur-[1px]" />
          <div aria-hidden="true" className="absolute right-[-58px] bottom-[34px] size-[230px] rounded-full bg-orange-400 mix-blend-soft-light blur-[1px]" />
          <div className="absolute top-[15px] right-5 left-5 z-20 flex justify-between text-[10px] font-extrabold tracking-[.04em] text-slate-900"><span>9:41</span><span className="tracking-[.12em]">▮▮▮ ◒</span></div>
          <div aria-label="Front camera and sensor" className="absolute top-[11px] left-1/2 z-30 h-6 w-[86px] -translate-x-1/2 rounded-full border border-white/10 bg-[#101522] shadow-[inset_0_1px_1px_rgba(255,255,255,.12)]"><i className="absolute top-2 right-[13px] size-[7px] rounded-full border border-[#293951] bg-[#0b162a] shadow-[0_0_0_1px_#121e34]" /></div>
          {children ?? <div className="absolute right-3.5 bottom-[33px] left-3.5 z-20 rounded-[21px] border border-white/60 bg-white/70 p-[17px] shadow-[0_12px_22px_rgba(54,67,110,.16)] backdrop-blur-md"><span className="block text-[10px] font-extrabold tracking-[.11em] text-slate-600 uppercase">Daily focus</span><h2 className="my-[7px] text-[22px] leading-none font-bold tracking-[-.055em] text-slate-900">Make room<br />for what matters.</h2><div className="flex items-center justify-between text-[11px] font-bold text-slate-700"><span>3 collaborators</span><span aria-hidden="true">● ● ●</span></div></div>}
          <div aria-hidden="true" className="absolute bottom-2.5 left-1/2 z-30 h-1 w-[88px] -translate-x-1/2 rounded-full bg-slate-900/80" />
        </div>
      </div>
    </section>
  )
}
