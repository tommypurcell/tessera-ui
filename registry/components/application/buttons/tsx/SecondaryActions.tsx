import type { ButtonHTMLAttributes } from 'react'

export type SecondaryActionsProps = ButtonHTMLAttributes<HTMLButtonElement>

export function SecondaryActions({ className, ...props }: SecondaryActionsProps) {
  return (
    <button
      type="button"
      className={`min-h-11 rounded-[9px] border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-300 ${className ?? ''}`}
      {...props}
    >
      Save as draft
    </button>
  )
}
