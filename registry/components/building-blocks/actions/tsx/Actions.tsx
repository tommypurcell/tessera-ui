import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

type ActionSize = 'sm' | 'md' | 'lg'
type ActionVariant = 'primary' | 'secondary' | 'outline' | 'soft' | 'ghost' | 'destructive' | 'link'
type ActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  size?: ActionSize
  variant?: ActionVariant
  loading?: boolean
  fullWidth?: boolean
}

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ')
const base =
  'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold outline-none transition-colors focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55 dark:focus-visible:ring-offset-slate-950'
const sizes = {
  sm: 'h-8 min-w-16 px-3 text-xs [&>svg]:size-4',
  md: 'h-10 min-w-16 px-4 text-sm [&>svg]:size-[18px]',
  lg: 'h-12 min-w-16 px-5 text-base [&>svg]:size-5',
} satisfies Record<ActionSize, string>
const variants = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-400',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200',
  outline:
    'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900',
  soft: 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-950',
  ghost:
    'text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800',
  destructive: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400',
  link: 'h-auto min-w-0 rounded-sm px-0 py-1 text-blue-700 underline-offset-4 hover:underline dark:text-blue-400',
} satisfies Record<ActionVariant, string>
const Spinner = () => (
  <span
    aria-hidden="true"
    className="size-4 animate-spin rounded-full border-2 border-current/30 border-t-current"
  />
)

export function Button({
  children,
  className,
  size = 'md',
  variant = 'primary',
  loading = false,
  fullWidth = false,
  disabled,
  ...props
}: ActionProps) {
  return (
    <button
      type="button"
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cx(base, sizes[size], variants[variant], fullWidth && 'w-full', className)}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  )
}
export function IconButton({
  children,
  className,
  size = 'md',
  variant = 'ghost',
  loading = false,
  disabled,
  ...props
}: ActionProps) {
  return (
    <Button
      aria-label={props['aria-label'] ?? 'Action'}
      size={size}
      variant={variant}
      loading={loading}
      disabled={disabled}
      className={cx('aspect-square min-w-0 px-0', className)}
      {...props}
    >
      {children}
    </Button>
  )
}
export function LinkButton({
  children,
  className,
  variant = 'link',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode; variant?: ActionVariant }) {
  return (
    <a className={cx(base, variants[variant], 'text-sm', className)} {...props}>
      {children}
    </a>
  )
}
export function CloseButton({ className, size = 'md', variant = 'ghost', ...props }: ActionProps) {
  return (
    <IconButton
      type="button"
      aria-label="Close"
      size={size}
      variant={variant}
      className={className}
      {...props}
    >
      ×
    </IconButton>
  )
}
export function ToggleButton({
  children,
  pressed = false,
  className,
  size = 'md',
  variant = 'ghost',
  ...props
}: ActionProps & { pressed?: boolean }) {
  return (
    <Button
      type="button"
      aria-pressed={pressed}
      size={size}
      variant={pressed ? 'soft' : variant}
      className={className}
      {...props}
    >
      {children}
    </Button>
  )
}
export function ButtonGroup({
  children,
  className,
  orientation = 'horizontal',
  joined = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  orientation?: 'horizontal' | 'vertical'
  joined?: boolean
}) {
  return (
    <div
      role="group"
      className={cx(
        'inline-flex',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        joined
          ? '[&>button:not(:first-child)]:rounded-l-none [&>button:not(:first-child)]:border-l-0 [&>button:not(:last-child)]:rounded-r-none'
          : 'gap-2',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
export function DragHandle({ className, disabled, ...props }: ActionProps) {
  return (
    <button
      type="button"
      aria-label="Drag to reorder"
      disabled={disabled}
      className={cx(
        'inline-flex size-8 cursor-grab items-center justify-center rounded-md text-slate-400 transition-colors outline-none hover:bg-slate-100 hover:text-slate-700 focus-visible:ring-2 focus-visible:ring-blue-600 active:cursor-grabbing active:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-800',
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="text-lg leading-none">
        ⠿
      </span>
    </button>
  )
}
