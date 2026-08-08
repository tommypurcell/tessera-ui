export type SchemaField = {
  name: string
  type: string
  nullable: boolean
  isPrimaryKey: boolean
}

export type SchemaFieldListVariant1Props = {
  tableName: string
  fields: SchemaField[]
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the database
 * schema field list.
 */
export function SchemaFieldList({ tableName, fields }: SchemaFieldListVariant1Props) {
  return (
    <div className="w-full max-w-md rounded-lg border border-gray-800 bg-gray-900">
      <div className="border-b border-gray-800 px-4 py-3">
        <h3 className="font-mono text-sm font-semibold text-gray-100">{tableName}</h3>
      </div>
      <ul className="flex flex-col divide-y divide-gray-800">
        {fields.map((field) => (
          <li key={field.name} className="flex items-center gap-3 px-4 py-2.5">
            {field.isPrimaryKey ? (
              <svg aria-label="Primary key" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 shrink-0 text-amber-400">
                <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
              </svg>
            ) : (
              <span aria-hidden="true" className="size-3.5 shrink-0" />
            )}
            <code className="w-28 shrink-0 truncate text-sm text-gray-100">{field.name}</code>
            <span className="shrink-0 rounded bg-gray-800 px-1.5 py-0.5 font-mono text-xs text-gray-300">{field.type}</span>
            <span className={`ml-auto shrink-0 text-xs ${field.nullable ? 'text-gray-500' : 'font-medium text-gray-300'}`}>
              {field.nullable ? 'nullable' : 'not null'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
