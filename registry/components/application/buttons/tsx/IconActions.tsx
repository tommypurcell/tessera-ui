import type { HTMLAttributes } from 'react'

export type IconActionsProps = HTMLAttributes<HTMLElement>

export function IconActions({ className, ...props }: IconActionsProps) {
  return (
    <div className={`flex gap-2 ${className ?? ''}`} {...props}>
      <button type="button" aria-label="Download report" className="grid size-11 place-items-center rounded-[9px] border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-px hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-300"><svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.9] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 20h14" /></svg></button>
      <button type="button" aria-label="More actions" className="grid size-11 place-items-center rounded-[9px] border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-px hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-300"><svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.9] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M5 12h.01M12 12h.01M19 12h.01" /></svg></button>
    </div>
  )
}
