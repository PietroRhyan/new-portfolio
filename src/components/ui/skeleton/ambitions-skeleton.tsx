import { Skeleton } from ".";

export function AmbitionsSkeleton() {
  return (
    <div className="max-w-[384px] w-full mx-auto flex gap-4">
      <Skeleton className="h-4 w-4" />

      <div className="flex-1 flex flex-col gap-1" >
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  )
}