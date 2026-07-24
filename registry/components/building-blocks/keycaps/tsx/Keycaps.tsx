import type { HTMLAttributes, ReactNode } from 'react'
type Props = HTMLAttributes<HTMLElement> & { children: ReactNode }
export function Keycap({ children, className, ...props }: Props) {
  return (
    <kbd
      className={`inline-flex min-w-6 items-center justify-center rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 font-mono text-xs font-medium text-slate-700 shadow-[0_1px_0_#cbd5e1] ${className ?? ''}`}
      {...props}
    >
      {children}
    </kbd>
  )
}
export function Shortcut({ children, className, ...props }: Props) {
  return (
    <span className={`inline-flex items-center gap-1 ${className ?? ''}`} {...props}>
      {children}
    </span>
  )
}
export const CommandKey = (props: Props) => <Keycap {...props}>⌘</Keycap>
export const EnterKey = (props: Props) => <Keycap {...props}>↵</Keycap>
export const EscapeKey = (props: Props) => <Keycap {...props}>Esc</Keycap>
export const ArrowKeys = (props: Props) => (
  <Shortcut {...props}>
    <Keycap>↑</Keycap>
    <Keycap>↓</Keycap>
    <Keycap>←</Keycap>
    <Keycap>→</Keycap>
  </Shortcut>
)
