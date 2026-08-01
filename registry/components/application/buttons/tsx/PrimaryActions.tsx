import type { ButtonHTMLAttributes } from 'react'

export type PrimaryActionsProps = ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryActions({ className, ...props }: PrimaryActionsProps) {
  return (
    <button
      type="button"
      className={`min-h-11 rounded-[9px] bg-slate-900 px-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-px hover:bg-slate-800 hover:shadow-md focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-300 ${className ?? ''}`}
      {...props}
    >
      Invite teammates
    </button>
  )
}
