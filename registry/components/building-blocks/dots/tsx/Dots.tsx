import type { HTMLAttributes } from 'react'

const tones = {
  blue: 'bg-blue-600',
  green: 'bg-emerald-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
  slate: 'bg-slate-400',
}
type Tone = keyof typeof tones
export function ColorDot({
  tone = 'blue',
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-2.5 rounded-full ${tones[tone]} ${className ?? ''}`}
      {...props}
    />
  )
}
export function StatusDot({
  tone = 'green',
  label = 'Available',
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone; label?: string }) {
  return (
    <span
      role="status"
      className={`inline-flex items-center gap-2 text-sm text-slate-600 ${className ?? ''}`}
      {...props}
    >
      <ColorDot tone={tone} />
      {label}
    </span>
  )
}
