import type { HTMLAttributes } from 'react'
export function SkeletonLine({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={`skeleton-shimmer h-3 w-48 rounded-full bg-slate-200 motion-safe:animate-pulse ${className ?? ''}`}
      {...props}
    />
  )
}
export function SkeletonCircle({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={`skeleton-shimmer size-10 rounded-full bg-slate-200 motion-safe:animate-pulse ${className ?? ''}`}
      {...props}
    />
  )
}
export const SkeletonBlock = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden="true"
    className={`skeleton-shimmer h-24 w-48 rounded-md bg-slate-200 motion-safe:animate-pulse ${props.className ?? ''}`}
    {...props}
  />
)
export const SkeletonMedia = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden="true"
    className={`skeleton-shimmer aspect-video w-64 rounded-lg bg-slate-200 motion-safe:animate-pulse ${props.className ?? ''}`}
    {...props}
  />
)
export const SkeletonButton = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden="true"
    className={`skeleton-shimmer h-10 w-24 rounded-md bg-slate-200 motion-safe:animate-pulse ${props.className ?? ''}`}
    {...props}
  />
)
export const SkeletonInput = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden="true"
    className={`skeleton-shimmer h-10 w-64 rounded-md bg-slate-200 motion-safe:animate-pulse ${props.className ?? ''}`}
    {...props}
  />
)
export const SkeletonCard = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden="true"
    className={`skeleton-shimmer h-32 w-64 rounded-xl bg-slate-200 motion-safe:animate-pulse ${props.className ?? ''}`}
    {...props}
  />
)

export const LoadingState = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    role="status"
    aria-busy="true"
    className={`flex w-64 items-center gap-3 ${props.className ?? ''}`}
    {...props}
  >
    <SkeletonCircle className="size-10 shrink-0" />
    <span className="grid flex-1 gap-2" aria-hidden="true">
      <SkeletonLine className="h-3 w-full" />
      <SkeletonLine className="h-3 w-2/3" />
    </span>
    <span className="sr-only">Loading</span>
  </div>
)
