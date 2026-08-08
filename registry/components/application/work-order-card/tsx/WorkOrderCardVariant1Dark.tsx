export type WorkOrderStage = {
  id: string
  label: string
  status: 'complete' | 'current' | 'pending'
}

export type WorkOrderCardVariant1DarkProps = {
  orderNumberLabel: string
  title: string
  statusLabel: string
  partLabel: string
  quantityLabel: string
  dueDateLabel: string
  assigneeLabel: string
  currentStageLabel: string
  stages: WorkOrderStage[]
}

/**
 * Copy-and-own Tailwind component. Work order detail card adapted for dark
 * surfaces.
 */
export function WorkOrderCard({
  orderNumberLabel,
  title,
  statusLabel,
  partLabel,
  quantityLabel,
  dueDateLabel,
  assigneeLabel,
  currentStageLabel,
  stages,
}: WorkOrderCardVariant1DarkProps) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-gray-400">{orderNumberLabel}</p>
          <h2 className="mt-0.5 text-sm font-semibold text-white">{title}</h2>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-1 text-xs font-medium text-amber-400">
          <span className="size-1.5 rounded-full bg-amber-400" />
          {statusLabel}
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-800 pt-4 text-sm">
        <div>
          <dt className="text-xs text-gray-500">Part</dt>
          <dd className="mt-0.5 font-medium text-white">{partLabel}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">Quantity</dt>
          <dd className="mt-0.5 font-medium text-white">{quantityLabel}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">Due date</dt>
          <dd className="mt-0.5 font-medium text-white">{dueDateLabel}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">Assigned to</dt>
          <dd className="mt-0.5 font-medium text-white">{assigneeLabel}</dd>
        </div>
      </dl>

      <div className="mt-4 border-t border-gray-800 pt-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Stage</span>
          <span>{currentStageLabel}</span>
        </div>
        <ol className="mt-2 flex items-center gap-1.5">
          {stages.map((stage) => (
            <li
              key={stage.id}
              className={`h-1.5 flex-1 rounded-full ${
                stage.status === 'pending' ? 'bg-gray-700' : 'bg-blue-500'
              }`}
              aria-current={stage.status === 'current' ? 'step' : undefined}
            >
              <span className="sr-only">
                {stage.label} — {stage.status}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
