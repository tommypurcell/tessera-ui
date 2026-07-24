import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

export type AtomTone = 'neutral' | 'brand' | 'information' | 'success' | 'warning' | 'danger'
export type AtomSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Children = { children?: ReactNode; className?: string }
type BoxProps = HTMLAttributes<HTMLSpanElement> & Children
type DivProps = HTMLAttributes<HTMLDivElement> & Children

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')
const atom = 'inline-flex items-center justify-center'
const focus =
  'outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950'
const tone = {
  neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
  brand: 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white',
  information: 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300',
  success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
  warning: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
  danger: 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300',
} satisfies Record<AtomTone, string>
const solidTone = {
  neutral: 'bg-slate-900 text-white dark:bg-white dark:text-slate-950',
  brand: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400',
  information: 'bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500',
  warning: 'bg-amber-500 text-slate-950 hover:bg-amber-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500',
} satisfies Record<AtomTone, string>
const dotTone = {
  neutral: 'bg-slate-400',
  brand: 'bg-blue-600',
  information: 'bg-sky-500',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
} satisfies Record<AtomTone, string>
const sizeClass = {
  xs: 'size-6 text-[10px]',
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
  xl: 'size-14 text-lg',
} satisfies Record<AtomSize, string>

const LoadingSpinner = ({ className }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={cx(
      'size-4 animate-spin rounded-full border-2 border-current/30 border-t-current',
      className,
    )}
  />
)

export function Badge({
  children,
  tone: badgeTone = 'neutral',
  className,
  ...props
}: BoxProps & { tone?: AtomTone }) {
  return (
    <span
      className={cx(
        atom,
        'min-h-[22px] max-w-full rounded-md px-2 text-xs leading-none font-semibold',
        tone[badgeTone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
export const StatusBadge = ({
  children = 'Active',
  tone: badgeTone = 'success',
  className,
  ...props
}: BoxProps & { tone?: AtomTone }) => (
  <Badge tone={badgeTone} className={cx('gap-1.5', className)} {...props}>
    <StatusDot tone={badgeTone} size="xs" />
    {children}
  </Badge>
)
export const CounterBadge = ({
  children = '3',
  tone: badgeTone = 'brand',
  className,
  ...props
}: BoxProps & { tone?: AtomTone }) => (
  <Badge
    tone={badgeTone}
    className={cx('min-w-[20px] rounded-full px-1.5 tabular-nums', className)}
    {...props}
  >
    {children}
  </Badge>
)
export const Tag = ({
  children,
  tone: tagTone = 'information',
  className,
  ...props
}: BoxProps & { tone?: AtomTone }) => (
  <Badge tone={tagTone} className={cx('rounded-full px-2.5', className)} {...props}>
    {children}
  </Badge>
)
export const KeyboardKey = ({ children, className, ...props }: BoxProps) => (
  <kbd
    className={cx(
      atom,
      'min-h-5 min-w-5 rounded border border-slate-300 bg-slate-50 px-1.5 font-mono text-[11px] font-medium text-slate-700 shadow-[0_1px_0_#cbd5e1] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:shadow-[0_1px_0_#0f172a]',
      className,
    )}
    {...props}
  >
    {children}
  </kbd>
)
export const StatusDot = ({
  tone: dotToneName = 'success',
  size = 'sm',
  className,
  ...props
}: BoxProps & { tone?: AtomTone; size?: AtomSize }) => (
  <span
    role="img"
    aria-label={`${dotToneName} status`}
    className={cx(
      'inline-block rounded-full',
      { xs: 'size-1.5', sm: 'size-2', md: 'size-2.5', lg: 'size-3', xl: 'size-3.5' }[size],
      dotTone[dotToneName],
      className,
    )}
    {...props}
  />
)
export const NotificationDot = ({ children, className, ...props }: BoxProps) => (
  <span
    aria-label={children ? `${children} unread notifications` : 'Unread notification'}
    role="status"
    className={cx(
      atom,
      'min-size-2 size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950',
      children ? 'h-5 w-auto px-1.5 text-[10px] font-bold text-white' : false,
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
export const Indicator = ({ children, className, ...props }: BoxProps) => (
  <span className={cx('relative inline-flex', className)} {...props}>
    {children ?? <StatusDot />}
  </span>
)

export const Avatar = ({
  children,
  size = 'md',
  className,
  ...props
}: BoxProps & { size?: AtomSize }) => (
  <span
    className={cx(
      atom,
      'relative shrink-0 overflow-hidden rounded-full bg-slate-100 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200',
      sizeClass[size],
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
export const AvatarImage = ({
  alt = '',
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img alt={alt} className={cx('size-full object-cover', className)} {...props} />
)
export const AvatarFallback = ({ children = 'A', className, ...props }: BoxProps) => (
  <span aria-hidden="true" className={cx(atom, 'size-full', className)} {...props}>
    {children}
  </span>
)
export const AvatarBadge = ({
  tone: badgeTone = 'success',
  className,
  ...props
}: BoxProps & { tone?: AtomTone }) => (
  <StatusDot
    aria-label={`${badgeTone} status`}
    tone={badgeTone}
    size="xs"
    className={cx('absolute right-0 bottom-0 ring-2 ring-white dark:ring-slate-950', className)}
    {...props}
  />
)
export const AvatarGroup = ({ children, className, ...props }: DivProps) => (
  <div
    className={cx(
      'flex -space-x-2 [&>*]:ring-2 [&>*]:ring-white dark:[&>*]:ring-slate-950',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)
export const IconContainer = ({
  children,
  tone: containerTone = 'information',
  size = 'md',
  className,
  ...props
}: BoxProps & { tone?: AtomTone; size?: AtomSize }) => (
  <span
    className={cx(atom, 'rounded-lg', sizeClass[size], tone[containerTone], className)}
    {...props}
  >
    {children}
  </span>
)
export const Thumbnail = ({
  alt = '',
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    alt={alt}
    className={cx('aspect-square size-14 rounded-md object-cover', className)}
    {...props}
  />
)
export const ImagePlaceholder = ({ children = 'No image', className, ...props }: BoxProps) => (
  <span
    aria-label="Image unavailable"
    role="img"
    className={cx(
      atom,
      'aspect-square size-14 rounded-md bg-slate-100 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400',
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
export const ColorSwatch = ({
  tone: swatchTone = 'brand',
  className,
  ...props
}: BoxProps & { tone?: AtomTone }) => (
  <span
    role="img"
    aria-label={`${swatchTone} color`}
    className={cx(
      'inline-block size-8 rounded-full ring-2 ring-white ring-offset-1 ring-offset-slate-300 dark:ring-slate-950',
      dotTone[swatchTone],
      className,
    )}
    {...props}
  />
)
export const AspectRatioFrame = ({ children, className, ...props }: DivProps) => (
  <div
    className={cx(
      'aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900 [&>*]:size-full',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)

export const Label = ({
  children,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & Children) => (
  <label
    className={cx('text-sm leading-5 font-semibold text-slate-900 dark:text-slate-100', className)}
    {...props}
  >
    {children}
  </label>
)
const field =
  'h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm placeholder:text-slate-400 outline-none transition-colors focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:disabled:bg-slate-900'
export const TextInput = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cx(field, focus, className)} {...props} />
)
export const SearchInput = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative w-full">
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400"
    >
      ⌕
    </span>
    <input type="search" className={cx(field, 'pl-9', className)} {...props} />
  </div>
)
export const Textarea = ({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea className={cx(field, 'min-h-24 resize-y py-2.5 leading-6', className)} {...props} />
)
export const Checkbox = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type="checkbox"
    className={cx(
      'size-4 rounded border-slate-300 text-blue-600 accent-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/30 disabled:opacity-50 dark:border-slate-600',
      className,
    )}
    {...props}
  />
)
export const Radio = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type="radio"
    className={cx(
      'size-4 border-slate-300 text-blue-600 accent-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/30 disabled:opacity-50 dark:border-slate-600',
      className,
    )}
    {...props}
  />
)
export const Switch = ({ checked, className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <label
    className={cx(
      'relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center',
      props.disabled && 'cursor-not-allowed opacity-50',
      className,
    )}
  >
    <input type="checkbox" role="switch" checked={checked} className="peer sr-only" {...props} />
    <span
      aria-hidden="true"
      className="h-5 w-9 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600/30 peer-disabled:opacity-50 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:after:translate-x-4 dark:bg-slate-700"
    />
  </label>
)
export const SelectTrigger = ({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) => (
  <select className={cx(field, 'appearance-none', className)} {...props} />
)
export const FileInput = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type="file"
    className={cx(
      'block w-full text-sm text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-slate-900 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-700 disabled:opacity-50 dark:text-slate-300 dark:file:bg-white dark:file:text-slate-950',
      className,
    )}
    {...props}
  />
)
export const OTPSlot = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    inputMode="numeric"
    maxLength={1}
    aria-label={props['aria-label'] ?? 'Verification code digit'}
    className={cx(
      atom,
      'size-11 rounded-lg border border-slate-300 bg-white text-center text-xl font-semibold text-slate-950 tabular-nums shadow-sm outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white',
      className,
    )}
    {...props}
  />
)
export const SliderTrack = ({ children, className, ...props }: BoxProps) => (
  <span
    className={cx(
      'relative inline-flex h-1.5 w-48 rounded-full bg-slate-200 dark:bg-slate-700',
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
export const SliderFill = ({ className, ...props }: BoxProps) => (
  <span
    aria-hidden="true"
    className={cx('absolute inset-y-0 left-0 w-2/3 rounded-full bg-blue-600', className)}
    {...props}
  />
)
export const SliderThumb = ({ className, ...props }: BoxProps) => (
  <span
    role="slider"
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={66}
    tabIndex={0}
    className={cx(
      'absolute top-1/2 left-2/3 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-600 bg-white shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 dark:bg-slate-950',
      className,
    )}
    {...props}
  />
)
export const InputPrefix = ({ children, className, ...props }: BoxProps) => (
  <span
    className={cx(
      atom,
      'h-10 shrink-0 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 px-3 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400',
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
export const InputSuffix = ({ children, className, ...props }: BoxProps) => (
  <span
    className={cx(
      atom,
      'h-10 shrink-0 rounded-r-lg border border-l-0 border-slate-300 bg-slate-50 px-3 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400',
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
export const ValidationIcon = ({
  valid = true,
  className,
  ...props
}: BoxProps & { valid?: boolean }) => (
  <span
    role="img"
    aria-label={valid ? 'Valid' : 'Invalid'}
    className={cx('text-sm font-bold', valid ? 'text-emerald-600' : 'text-red-600', className)}
    {...props}
  >
    {valid ? '✓' : '!'}
  </span>
)
export const RequiredIndicator = ({ className, ...props }: BoxProps) => (
  <span aria-label="Required" className={cx('ml-1 text-red-600', className)} {...props}>
    *
  </span>
)
export const CharacterCounter = ({ children = '24 / 160', className, ...props }: BoxProps) => (
  <span
    className={cx('text-xs text-slate-500 tabular-nums dark:text-slate-400', className)}
    {...props}
  >
    {children}
  </span>
)

export const Spinner = ({ className, ...props }: BoxProps) => (
  <span
    role="status"
    aria-label="Loading"
    className={cx(atom, 'size-5 text-blue-600', className)}
    {...props}
  >
    <LoadingSpinner />
  </span>
)
export const DotLoader = ({ className, ...props }: BoxProps) => (
  <span role="status" aria-label="Loading" className={cx(atom, 'gap-1.5', className)} {...props}>
    {[0, 1, 2].map((dot) => (
      <i
        key={dot}
        aria-hidden="true"
        className="size-1.5 rounded-full bg-current motion-safe:animate-pulse"
      />
    ))}
  </span>
)
export const ProgressTrack = ({ children, className, ...props }: BoxProps) => (
  <span
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={66}
    className={cx(
      'relative inline-flex h-2 w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700',
      className,
    )}
    {...props}
  >
    {children ?? <ProgressFill />}
  </span>
)
export const ProgressFill = ({ className, ...props }: BoxProps) => (
  <span
    aria-hidden="true"
    className={cx(
      'h-full w-2/3 rounded-full bg-blue-600 transition-[width] duration-200',
      className,
    )}
    {...props}
  />
)
export const CircularProgress = ({
  value = 66,
  className,
  ...props
}: BoxProps & { value?: number }) => (
  <span
    role="progressbar"
    aria-label="Progress"
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={value}
    className={cx(atom, 'size-10 rounded-full', className)}
    style={{ background: `conic-gradient(#2563eb ${value}%, #e2e8f0 0)`, ...props.style }}
    {...props}
  >
    <span className="size-7 rounded-full bg-white dark:bg-slate-950" />
  </span>
)
export const SkeletonLine = ({ className, ...props }: BoxProps) => (
  <span
    aria-hidden="true"
    className={cx(
      'skeleton-shimmer inline-flex h-3 w-48 rounded-full bg-slate-200 motion-safe:animate-pulse dark:bg-slate-800',
      className,
    )}
    {...props}
  />
)
export const SkeletonBlock = ({ className, ...props }: BoxProps) => (
  <span
    aria-hidden="true"
    className={cx(
      'skeleton-shimmer inline-flex h-24 w-48 rounded-md bg-slate-200 motion-safe:animate-pulse dark:bg-slate-800',
      className,
    )}
    {...props}
  />
)
export const SkeletonCircle = ({ className, ...props }: BoxProps) => (
  <span
    aria-hidden="true"
    className={cx(
      'skeleton-shimmer inline-flex size-10 rounded-full bg-slate-200 motion-safe:animate-pulse dark:bg-slate-800',
      className,
    )}
    {...props}
  />
)
export const ActivityPulse = ({
  tone: pulseTone = 'success',
  className,
  ...props
}: BoxProps & { tone?: AtomTone }) => (
  <span
    aria-label="Live activity"
    role="status"
    className={cx('relative inline-flex size-2 rounded-full', dotTone[pulseTone], className)}
    {...props}
  >
    <span
      aria-hidden="true"
      className="absolute -inset-1 rounded-full bg-current opacity-30 motion-safe:animate-ping"
    />
  </span>
)

export const Separator = ({ className, ...props }: HTMLAttributes<HTMLHRElement>) => (
  <hr
    className={cx('border-0 border-t border-slate-200 dark:border-slate-800', className)}
    {...props}
  />
)
export const VerticalSeparator = ({ className, ...props }: BoxProps) => (
  <span
    aria-hidden="true"
    className={cx('inline-block h-5 w-px bg-slate-200 dark:bg-slate-800', className)}
    {...props}
  />
)
export const DividerWithLabel = ({ children, className, ...props }: DivProps) => (
  <div
    className={cx(
      'flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400',
      className,
    )}
    {...props}
  >
    <Separator className="flex-1" />
    {children}
    <Separator className="flex-1" />
  </div>
)
export const Spacer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div aria-hidden="true" className={cx('h-4', className)} {...props} />
)
export const Stack = ({ children, className, ...props }: DivProps) => (
  <div className={cx('flex flex-col gap-4', className)} {...props}>
    {children}
  </div>
)
export const InlineGroup = ({ children, className, ...props }: DivProps) => (
  <div className={cx('flex flex-wrap items-center gap-3', className)} {...props}>
    {children}
  </div>
)
export const Cluster = ({ children, className, ...props }: DivProps) => (
  <div className={cx('flex flex-wrap items-center justify-between gap-2', className)} {...props}>
    {children}
  </div>
)
export const Container = ({ children, className, ...props }: DivProps) => (
  <div className={cx('mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8', className)} {...props}>
    {children}
  </div>
)
export const Surface = ({ children, className, ...props }: DivProps) => (
  <div
    className={cx(
      'rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)
export const InsetSurface = ({ children, className, ...props }: DivProps) => (
  <div
    className={cx(
      'rounded-lg border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)
export const FocusRing = ({ children, className, ...props }: BoxProps) => (
  <span
    className={cx(
      'rounded-md focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:focus-within:ring-offset-slate-950',
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
export const ScrollFade = ({ children, className, ...props }: DivProps) => (
  <div
    className={cx(
      'relative overflow-x-auto [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)
