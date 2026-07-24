import type { HTMLAttributes, ReactNode } from 'react'
type Props = HTMLAttributes<HTMLDivElement> & { children?: ReactNode }
const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ')
export const Marquee = ({
  children = 'Clear signals · Calm motion · Better focus',
  className,
  ...props
}: Props) => (
  <div
    className={cx(
      'overflow-hidden rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300',
      className,
    )}
    {...props}
  >
    <div className="whitespace-nowrap motion-safe:animate-[marquee_18s_linear_infinite]">
      {children} <span aria-hidden="true"> · {children}</span>
    </div>
  </div>
)
export const BentoGrid = ({ className, ...props }: Props) => (
  <div className={cx('grid grid-cols-2 gap-3', className)} {...props}>
    <div className="row-span-2 rounded-2xl bg-slate-900 p-5 text-white">
      Focus
      <br />
      <span className="text-sm text-slate-300">A quiet primary surface.</span>
    </div>
    <div className="rounded-2xl bg-blue-50 p-4 text-blue-900 dark:bg-blue-950 dark:text-blue-100">
      Compose
    </div>
    <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">Ship</div>
  </div>
)
export const NumberTicker = ({ children = '48,240', className }: Props) => (
  <output
    aria-live="polite"
    className={cx('text-3xl font-semibold tracking-tight tabular-nums', className)}
  >
    {children}
  </output>
)
export const AnimatedBeam = ({ className, ...props }: Props) => (
  <div
    aria-hidden="true"
    className={cx('relative h-px w-full overflow-hidden bg-slate-200 dark:bg-slate-800', className)}
    {...props}
  >
    <span className="absolute inset-y-0 left-0 w-1/4 bg-blue-500 motion-safe:animate-[beam_2.2s_ease-in-out_infinite]" />
  </div>
)
export const AnimatedList = ({ children, className }: Props) => (
  <ul className={cx('grid gap-2', className)}>
    {children ??
      ['First signal', 'Second signal', 'Third signal'].map((item) => (
        <li
          key={item}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-800"
        >
          {item}
        </li>
      ))}
  </ul>
)
