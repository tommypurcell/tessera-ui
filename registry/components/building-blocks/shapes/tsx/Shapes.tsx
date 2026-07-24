import type { HTMLAttributes, ReactNode } from 'react'
type Props = HTMLAttributes<HTMLSpanElement> & { children?: ReactNode }
export function Circle({ children, className, ...props }: Props) {
  return (
    <span
      className={`inline-grid size-10 place-items-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700 ${className ?? ''}`}
      {...props}
    >
      {children}
    </span>
  )
}
export function Pill({ children, className, ...props }: Props) {
  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-full bg-slate-100 px-2.5 text-xs font-medium text-slate-700 ${className ?? ''}`}
      {...props}
    >
      {children}
    </span>
  )
}
export const Square = (props: Props) => (
  <span
    className={`inline-grid size-10 place-items-center rounded-md bg-slate-100 text-sm font-semibold text-slate-700 ${props.className ?? ''}`}
    {...props}
  />
)
export const Ring = (props: Props) => (
  <span
    className={`inline-block size-10 rounded-full border-4 border-blue-200 ${props.className ?? ''}`}
    {...props}
  />
)
export const SoftSquare = (props: Props) => (
  <span
    className={`inline-block size-10 rounded-xl bg-blue-50 ${props.className ?? ''}`}
    {...props}
  />
)
export const Diamond = (props: Props) => (
  <span
    className={`inline-block size-8 rotate-45 rounded-md bg-indigo-500 ${props.className ?? ''}`}
    {...props}
  />
)
