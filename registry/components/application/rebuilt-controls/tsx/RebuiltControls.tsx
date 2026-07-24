import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & { children?: ReactNode }
const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ')
const field =
  'rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100'
const button =
  'inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950'

export const CommandMenu = ({ children = 'Search actions', className, ...props }: Props) => (
  <div
    className={cx(
      'grid w-72 gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    <input
      aria-label="Search commands"
      placeholder={String(children)}
      className={cx(field, 'h-9')}
    />
    <button
      type="button"
      className="rounded-md px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      Open project <kbd className="float-right font-mono text-xs text-slate-400">↵</kbd>
    </button>
  </div>
)
export const MultiSelect = ({ className, ...props }: Props) => (
  <div
    className={cx('flex min-h-10 w-72 flex-wrap items-center gap-1.5 p-1.5', field, className)}
    {...props}
  >
    <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
      Design ×
    </span>
    <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
      Code ×
    </span>
    <span className="px-1 text-sm text-slate-400">Add…</span>
  </div>
)
export const OTPInput = ({ className, ...props }: Props) => (
  <div
    role="group"
    aria-label="Verification code"
    className={cx('flex gap-2', className)}
    {...props}
  >
    {[1, 2, 3, 4, 5, 6].map((slot) => (
      <input
        key={slot}
        aria-label={`Digit ${slot}`}
        maxLength={1}
        className={cx(field, 'size-11 p-0 text-center text-lg font-semibold')}
      />
    ))}
  </div>
)
export const DragAndDropUpload = ({ className }: Props) => (
  <label
    className={cx(
      'grid w-80 cursor-pointer place-items-center gap-1 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-900',
      className,
    )}
  >
    <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
      Drop files here
    </span>
    <span className="text-xs text-slate-500">or choose from your device</span>
    <input type="file" className="sr-only" />
  </label>
)
export const Combobox = ({ className, ...props }: Props) => (
  <div className={cx('grid w-72 gap-1', className)} {...props}>
    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Project</label>
    <input
      role="combobox"
      aria-expanded="true"
      className={cx(field, 'h-10')}
      value="Tessera"
      readOnly
    />
    <div
      role="listbox"
      className="rounded-lg border border-slate-200 bg-white p-1 text-sm shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div
        role="option"
        aria-selected="true"
        className="rounded-md bg-blue-50 px-2 py-1.5 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
      >
        Tessera
      </div>
      <div role="option" className="px-2 py-1.5 text-slate-600 dark:text-slate-300">
        Atlas
      </div>
    </div>
  </div>
)
export const Calendar = ({ className, ...props }: Props) => (
  <div
    className={cx(
      'w-64 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    <div className="mb-3 flex items-center justify-between text-sm font-semibold">
      <span>July 2026</span>
      <span className="text-slate-400">‹ ›</span>
    </div>
    <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500">
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
        <span key={day}>{day}</span>
      ))}
      {Array.from({ length: 21 }, (_, index) => (
        <button
          type="button"
          key={index}
          className={cx(
            'grid size-7 place-items-center rounded-md text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
            index === 14 && 'bg-blue-600 text-white hover:bg-blue-600',
          )}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>
)
export const DateField = ({ className }: Props) => (
  <label
    className={cx('grid gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300', className)}
  >
    Date
    <input type="text" placeholder="MM / DD / YYYY" className={cx(field, 'h-10 font-normal')} />
  </label>
)
export const ResizablePanels = ({ className, ...props }: Props) => (
  <div
    className={cx(
      'flex h-32 w-96 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800',
      className,
    )}
    {...props}
  >
    <div className="flex-1 bg-slate-50 p-4 text-sm dark:bg-slate-900">Preview</div>
    <button
      type="button"
      role="separator"
      aria-label="Resize panels"
      aria-valuenow={50}
      className="w-2 cursor-col-resize border-x border-slate-200 bg-white hover:bg-blue-50 focus-visible:bg-blue-50 dark:border-slate-800 dark:bg-slate-950"
    />
    <div className="flex-1 bg-white p-4 text-sm dark:bg-slate-950">Inspector</div>
  </div>
)
export const DashboardSidebar = ({ className, ...props }: Props) => (
  <nav
    aria-label="Dashboard"
    className={cx(
      'grid w-56 gap-1 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    <strong className="mb-3 px-2 text-sm">Tessera</strong>
    {['Overview', 'Projects', 'Settings'].map((item, index) => (
      <a
        key={item}
        href="#"
        className={cx(
          'rounded-md px-2 py-2 text-sm',
          index === 0
            ? 'bg-blue-50 font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300'
            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
        )}
      >
        {item}
      </a>
    ))}
  </nav>
)
export const Sidebar = DashboardSidebar
export const CommandPalette = CommandMenu
export const DatePicker = ({ className, ...props }: Props) => (
  <div className={cx('grid w-72 gap-2', className)} {...props}>
    <button
      type="button"
      className={cx(
        button,
        'justify-between bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200',
      )}
    >
      Jul 24, 2026 <span>⌄</span>
    </button>
    <Calendar />
  </div>
)
export const DateInput = ({ className }: Props) => (
  <input type="date" aria-label="Date" className={cx(field, 'h-10', className)} />
)
export const Dropdown = ({ className, ...props }: Props) => (
  <div
    className={cx(
      'grid w-44 gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-md dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    {['Rename', 'Duplicate', 'Archive'].map((item) => (
      <button
        type="button"
        key={item}
        className="rounded-md px-3 py-2 text-left text-sm hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        {item}
      </button>
    ))}
  </div>
)
export const Drawer = ({ className, ...props }: Props) => (
  <aside
    aria-label="Details"
    className={cx(
      'w-72 rounded-xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    <div className="mb-5 flex items-center justify-between">
      <strong>Details</strong>
      <button type="button" aria-label="Close details">
        ×
      </button>
    </div>
    <p className="text-sm text-slate-500">A quiet secondary surface for focused workflows.</p>
  </aside>
)
export const Modal = ({ className, ...props }: Props) => (
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    className={cx(
      'w-80 rounded-xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    <h2 id="modal-title" className="font-semibold">
      Confirm archive
    </h2>
    <p className="mt-2 text-sm text-slate-500">This action can be undone later.</p>
    <div className="mt-5 flex justify-end gap-2">
      <button type="button" className="rounded-md px-3 py-2 text-sm text-slate-600">
        Cancel
      </button>
      <button type="button" className={button}>
        Archive
      </button>
    </div>
  </div>
)
export const Tooltip = ({ children = 'More information', className, ...props }: Props) => (
  <span className={cx('relative inline-flex', className)} {...props}>
    <button
      type="button"
      aria-describedby="tooltip"
      className="size-8 rounded-full border border-slate-300 text-sm"
    >
      ?
    </button>
    <span
      id="tooltip"
      role="tooltip"
      className="absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs whitespace-nowrap text-white"
    >
      {children}
    </span>
  </span>
)
