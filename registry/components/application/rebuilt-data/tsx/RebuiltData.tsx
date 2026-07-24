import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & { children?: ReactNode }
const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ')
export const Chart = ({ className, ...props }: Props) => (
  <div
    className={cx(
      'grid gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-medium text-slate-500">Revenue</p>
        <p className="text-2xl font-semibold tracking-tight">$48,240</p>
      </div>
      <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
        +12.8%
      </span>
    </div>
    <div
      role="img"
      aria-label="Revenue trend rising over six months"
      className="flex h-28 items-end gap-2 border-b border-l border-slate-200 px-3 dark:border-slate-700"
    >
      {[35, 48, 42, 62, 58, 84, 72, 96].map((height, index) => (
        <span
          key={index}
          className="flex-1 rounded-t bg-blue-500/80"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  </div>
)
export const DataTable = ({ className, ...props }: Props) => (
  <div
    className={cx(
      'overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    <table className="w-full text-left text-sm">
      <caption className="sr-only">Recent projects</caption>
      <thead className="bg-slate-50 text-xs font-semibold text-slate-500 dark:bg-slate-950">
        <tr>
          <th scope="col" className="px-4 py-3">
            Project
          </th>
          <th scope="col" className="px-4 py-3">
            Status
          </th>
          <th scope="col" className="px-4 py-3 text-right">
            Updated
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
        <tr>
          <th scope="row" className="px-4 py-3 font-medium">
            Atlas
          </th>
          <td className="px-4 py-3 text-emerald-700">Active</td>
          <td className="px-4 py-3 text-right text-slate-500">Today</td>
        </tr>
        <tr>
          <th scope="row" className="px-4 py-3 font-medium">
            Northstar
          </th>
          <td className="px-4 py-3 text-amber-700">Review</td>
          <td className="px-4 py-3 text-right text-slate-500">Yesterday</td>
        </tr>
      </tbody>
    </table>
  </div>
)
