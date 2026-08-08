export type TaskPriority = 'urgent' | 'high' | 'medium' | 'low'

export type TaskPriorityBadgeVariant1Props = {
  priority: TaskPriority
}

const priorityConfig: Record<TaskPriority, { label: string; className: string; path: string }> = {
  urgent: {
    label: 'Urgent',
    className: 'bg-red-100 text-red-700',
    path: 'M12 9v3.75m9-1.5a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z',
  },
  high: {
    label: 'High',
    className: 'bg-orange-100 text-orange-700',
    path: 'M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18',
  },
  medium: {
    label: 'Medium',
    className: 'bg-amber-100 text-amber-700',
    path: 'M4.5 15.75l7.5-7.5 7.5 7.5',
  },
  low: {
    label: 'Low',
    className: 'bg-gray-100 text-gray-600',
    path: 'M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3',
  },
}

/**
 * Copy-and-own Tailwind component. Task priority badge with a consistent
 * icon + color scale across Urgent/High/Medium/Low — pass the real
 * `priority` and the correct icon, color, and label are selected
 * together, so they can never drift out of sync.
 */
export function TaskPriorityBadge({ priority }: TaskPriorityBadgeVariant1Props) {
  const config = priorityConfig[priority]

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${config.className}`}>
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
        <path strokeLinecap="round" strokeLinejoin="round" d={config.path} />
      </svg>
      {config.label}
    </span>
  )
}
