export type CloudLogo = {
  id: string
  name: string
  icon: React.ReactNode
}

export type LogoCloudGridVariant1Props = {
  heading?: string
  logos: CloudLogo[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Customer logo cloud: a "Trusted by
 * teams at" heading above a grid of monochrome partner/customer logos
 * separated by subtle interior dividers (divide-x/divide-y), rather than
 * gapped cards. Distinct from Amenities Grid, which lists icon+label
 * facility features, rather than external brand/company logos as social
 * proof.
 */
export function LogoCloudGrid({ heading = 'Trusted by teams at', logos, className }: LogoCloudGridVariant1Props) {
  return (
    <div className={className}>
      <p className="text-center text-sm font-medium text-gray-500">{heading}</p>

      <div className="mt-6 grid grid-cols-3 divide-x divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-100 sm:grid-cols-4">
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center p-6">
            {logo.icon}
          </div>
        ))}
      </div>
    </div>
  )
}
