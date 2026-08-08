export type ImportWizardPreviewRow = Record<string, string>

export type ImportWizardVariant2DarkProps = {
  fileName: string
  totalRows: number
  importableRows: number
  columns: string[]
  previewRows: ImportWizardPreviewRow[]
  /** Count of remaining rows not shown in the preview table. */
  remainingRowCount: number
  /** Warning shown below the preview table, e.g. row skip reasons. */
  warning?: string
  onBack?: () => void
  onImport?: () => void
}

/**
 * Copy-and-own Tailwind component. Final review step of an import wizard,
 * adapted for dark surfaces.
 */
export function ImportWizard({
  fileName,
  totalRows,
  importableRows,
  columns,
  previewRows,
  remainingRowCount,
  warning,
  onBack,
  onImport,
}: ImportWizardVariant2DarkProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-sm">
      <div className="border-b border-gray-800 px-6 py-5">
        <ol className="flex items-center">
          <li className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-medium text-gray-900">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="size-3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-white">Upload</span>
            </div>
            <div className="mx-3 h-px w-8 bg-white sm:w-12" />
          </li>

          <li className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-medium text-gray-900">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="size-3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-white">Map columns</span>
            </div>
            <div className="mx-3 h-px w-8 bg-white sm:w-12" />
          </li>

          <li className="flex items-center">
            <span
              aria-current="step"
              className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white"
            >
              3
            </span>
            <span className="ml-2 text-sm font-medium text-white">Review</span>
          </li>
        </ol>
      </div>

      <div className="px-6 py-6">
        <h2 className="text-base font-semibold text-white">Review and import</h2>
        <p className="mt-1 text-sm text-gray-400">
          {totalRows} rows ready to import from {fileName}.
        </p>

        <div className="mt-4 overflow-hidden rounded-md border border-gray-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-800 text-xs font-medium text-gray-400">
              <tr>
                {columns.map((column) => (
                  <th key={column} scope="col" className="px-3 py-2">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              {previewRows.map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column} className="px-3 py-2">
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))}
              {remainingRowCount > 0 ? (
                <tr>
                  <td className="px-3 py-2 text-gray-500" colSpan={columns.length}>
                    + {remainingRowCount} more rows
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        {warning ? (
          <div className="mt-4 flex items-center gap-2 rounded-md bg-amber-500/10 px-3 py-2 text-sm text-amber-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            {warning}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between border-t border-gray-800 px-6 py-4">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onImport}
          className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
        >
          Import {importableRows} rows
        </button>
      </div>
    </div>
  )
}
