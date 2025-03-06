import { Skeleton } from "@/components/ui/skeleton"

export const TextLoader = ({ lines = 1 }: { lines?: number }) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton key={index} className="h-4 w-full" />
      ))}
    </div>
  )
}

export const TextLoaderWithChildren = ({ children, loading }: { children: React.ReactNode, loading: boolean }) => {
  return (
    <div className="space-y-2">
      {loading ? (
        <Skeleton className="h-4 w-full" />
      ) : (
        children
      )}
    </div>
  )
}