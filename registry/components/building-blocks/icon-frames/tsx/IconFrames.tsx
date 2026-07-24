import type { HTMLAttributes, ReactNode } from 'react'
type Props = HTMLAttributes<HTMLSpanElement> & { children: ReactNode }
export function SoftIcon({ children, className, ...props }: Props) {
  return (
    <span
      className={`inline-grid size-9 place-items-center rounded-lg bg-blue-50 text-blue-700 ${className ?? ''}`}
      {...props}
    >
      {children}
    </span>
  )
}
export function OutlineIcon({ children, className, ...props }: Props) {
  return (
    <span
      className={`inline-grid size-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 ${className ?? ''}`}
      {...props}
    >
      {children}
    </span>
  )
}
