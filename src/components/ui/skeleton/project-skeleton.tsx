import { Skeleton } from ".";

export function ProjectSkeleton() {
  return (
    <div className="w-full rounded-2xl flex gap-6 p-4 bg-dark-gray/40" >
      <Skeleton className="h-[150px] w-[150px]" />

      <div className="flex-1 flex flex-col gap-4" >
        <div className="flex flex-col gap-1" >
          <Skeleton className="h-5 max-w-[200px]" />
          <Skeleton className="h-3 max-w-[60px]" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 max-w-[380px]" />
      </div>
    </div>
  )
}