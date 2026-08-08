import { useState } from 'react'

export type DoseStatus = 'pending' | 'taken' | 'skipped'

export type Dose = {
  id: string
  time: string
  medication: string
  dosage: string
  quantity: string
  status: DoseStatus
}

export type MedicationScheduleListVariant1DarkProps = {
  doses: Dose[]
  onStatusChange?: (doseId: string, status: DoseStatus) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Medication dose schedule adapted for dark surfaces —
 * time, medication/dosage, and either a resolved badge or Take/Skip actions.
 */
export function MedicationScheduleListVariant1Dark({
  doses,
  onStatusChange,
  className,
}: MedicationScheduleListVariant1DarkProps) {
  const [statuses, setStatuses] = useState<Record<string, DoseStatus>>(
    Object.fromEntries(doses.map((d) => [d.id, d.status])),
  )

  const setStatus = (id: string, status: DoseStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: status }))
    onStatusChange?.(id, status)
  }

  return (
    <ul className={`divide-y divide-gray-800 rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      {doses.map((dose) => {
        const status = statuses[dose.id]
        const isSkipped = status === 'skipped'

        return (
          <li key={dose.id} className="flex items-center gap-3 p-4">
            <div className={`w-16 shrink-0 whitespace-nowrap text-sm font-semibold ${isSkipped ? 'text-gray-600' : 'text-white'}`}>
              {dose.time}
            </div>

            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm font-medium ${isSkipped ? 'text-gray-600' : 'text-white'}`}>
                {dose.medication}
              </p>
              <p className={`text-xs ${isSkipped ? 'text-gray-600' : 'text-gray-500'}`}>
                {dose.dosage} · {dose.quantity}
              </p>
            </div>

            {status === 'taken' ? (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-950 px-2 py-0.5 text-xs font-medium text-emerald-400">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Taken
              </span>
            ) : status === 'skipped' ? (
              <span className="shrink-0 rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-400">
                Skipped
              </span>
            ) : (
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setStatus(dose.id, 'skipped')}
                  className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={() => setStatus(dose.id, 'taken')}
                  className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
                >
                  Take
                </button>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
