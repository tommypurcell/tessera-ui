export type JobRunStatus = 'succeeded' | 'running' | 'failed'

export type JobRunRowVariant1Props = {
  jobName: string
  status: JobRunStatus
  durationSeconds: number
  recordsProcessed: number
  logsUrl: string
}

const statusStyles: Record<JobRunStatus, { className: string; label: string }> = {
  succeeded: { className: 'bg-emerald-500/10 text-emerald-400', label: 'Succeeded' },
  running: { className: 'bg-blue-500/10 text-blue-400', label: 'Running' },
  failed: { className: 'bg-red-500/10 text-red-400', label: 'Failed' },
}

const formatDuration = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return m > 0 ? `${m}m ${s}s` : `${s}s`
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the job-run
 * summary row.
 */
export function JobRunRow({ jobName, status, durationSeconds, recordsProcessed, logsUrl }: JobRunRowVariant1Props) {
  const style = statusStyles[status]

  return (
    <div className="flex items-center gap-4 rounded-md border border-gray-800 bg-gray-900 px-4 py-3 text-sm">
      <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${style.className}`}>{style.label}</span>
      <span className="min-w-0 flex-1 truncate font-medium text-gray-100">{jobName}</span>
      <span className="shrink-0 text-xs text-gray-500">{formatDuration(durationSeconds)}</span>
      <span className="shrink-0 text-xs text-gray-500">{recordsProcessed.toLocaleString()} records</span>
      <a href={logsUrl} className="shrink-0 text-xs font-medium text-blue-400 hover:underline">
        View logs
      </a>
    </div>
  )
}
