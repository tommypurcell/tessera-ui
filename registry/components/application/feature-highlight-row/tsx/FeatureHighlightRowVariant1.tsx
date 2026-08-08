export type FeatureHighlight = {
  id: string
  title: string
  description: string
  iconBgClassName: string
  iconColorClassName: string
  icon: React.ReactNode
}

export type FeatureHighlightRowVariant1Props = {
  features: FeatureHighlight[]
}

/**
 * Copy-and-own Tailwind component. Stacked icon + title + description
 * feature blocks, each icon in its own tinted color square.
 */
export function FeatureHighlightRow({ features }: FeatureHighlightRowVariant1Props) {
  return (
    <div className="flex w-full max-w-lg flex-col gap-8">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-start gap-4">
          <div className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${feature.iconBgClassName} ${feature.iconColorClassName}`}>{feature.icon}</div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
