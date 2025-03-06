import { Skeleton } from '@/components/ui/skeleton';

export const CardLoader = () => {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      <Skeleton className="h-40 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
};