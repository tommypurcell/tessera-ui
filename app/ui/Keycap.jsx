export default function Keycap({ children, className = '' }) {
  return (
    <kbd
      className={`inline-flex min-w-6 items-center justify-center rounded border border-gray-300 bg-gray-50 px-1.5 py-0.5 font-mono text-[11px] font-semibold leading-none text-gray-700 shadow-[0_1px_0_#cbd5e1] ${className}`}
    >
      {children}
    </kbd>
  )
}
