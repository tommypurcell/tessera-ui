import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-600/30 disabled:pointer-events-none disabled:opacity-50'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactNode }

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`${base} bg-slate-900 px-3.5 py-2 text-white hover:bg-slate-700 ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
export function IconButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      aria-label={props['aria-label'] ?? 'Action'}
      className={`${base} size-9 border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
export function LinkButton({ children, className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      className={`${base} px-3.5 py-2 text-blue-700 hover:bg-blue-50 ${className ?? ''}`}
      {...props}
    >
      {children}
    </a>
  )
}
export function CloseButton({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label="Close"
      className={`${base} size-9 text-xl font-normal text-slate-500 hover:bg-slate-100 hover:text-slate-900 ${className ?? ''}`}
      {...props}
    >
      ×
    </button>
  )
}
export function ToggleButton({
  children,
  pressed,
  className,
  ...props
}: ButtonProps & { pressed?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={`${base} border px-3.5 py-2 ${pressed ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
export function ButtonGroup({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      role="group"
      className={`inline-flex items-center gap-px rounded-md shadow-sm ${className ?? ''}`}
      {...props}
    >
      {children}
    </div>
  )
}
export function DragHandle({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label="Drag to reorder"
      className={`${base} size-8 cursor-grab text-slate-400 hover:bg-slate-100 hover:text-slate-700 active:cursor-grabbing ${className ?? ''}`}
      {...props}
    >
      ⠿
    </button>
  )
}
