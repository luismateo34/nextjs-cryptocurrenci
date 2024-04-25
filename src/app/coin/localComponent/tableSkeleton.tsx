import { Skeleton } from "@/components/ui/skeleton";

export const TableSkeleton = () => {
  return (
    <>
      <div className="flex flex-row w-full h-12 gap-2">
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
      </div>
      <div className="flex flex-row w-full h-12 gap-2">
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
      </div>
    </>
  );
};
