export type JobRunStatus = 'succeeded' | 'running' | 'failed'

export type JobRunRowVariant1Props = {
  jobName: string
  status: JobRunStatus
  durationSeconds: number
  recordsProcessed: number
  logsUrl: string
}

const statusStyles: Record<JobRunStatus, { className: string; label: string }> = {
  succeeded: { className: 'bg-emerald-50 text-emerald-700', label: 'Succeeded' },
  running: { className: 'bg-blue-50 text-blue-700', label: 'Running' },
  failed: { className: 'bg-red-50 text-red-700', label: 'Failed' },
}

const formatDuration = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return m > 0 ? `${m}m ${s}s` : `${s}s`
}

/**
 * Copy-and-own Tailwind component. ETL/pipeline job-run summary row with
 * status, duration, records-processed count, and a logs link — distinct
 * from build-status-row, which shows a sequential CI stage-pill chain
 * rather than a single run's throughput metrics.
 */
export function JobRunRow({ jobName, status, durationSeconds, recordsProcessed, logsUrl }: JobRunRowVariant1Props) {
  const style = statusStyles[status]

  return (
    <div className="flex items-center gap-4 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm">
      <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${style.className}`}>{style.label}</span>
      <span className="min-w-0 flex-1 truncate font-medium text-gray-900">{jobName}</span>
      <span className="shrink-0 text-xs text-gray-500">{formatDuration(durationSeconds)}</span>
      <span className="shrink-0 text-xs text-gray-500">{recordsProcessed.toLocaleString()} records</span>
      <a href={logsUrl} className="shrink-0 text-xs font-medium text-blue-600 hover:underline">
        View logs
      </a>
    </div>
  )
}
