import type { HTMLAttributes } from 'react'
export function Rule({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={`border-0 border-t border-slate-200 ${className ?? ''}`} {...props} />
}
export function VerticalRule({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-5 w-px bg-slate-200 ${className ?? ''}`}
      {...props}
    />
  )
}
