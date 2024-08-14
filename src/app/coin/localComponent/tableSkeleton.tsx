import { Skeleton } from "@/components/ui/skeleton";
/*
 *skeleton for await component on the server
 *
 */

const RowSkeleton = () => {
  return (
    <div className="flex flex-row w-full justify-around  h-12 gap-2">
      <Skeleton className="w-[30%] bg-gray-400 h-8 "></Skeleton>
      <Skeleton className="w-[30%] bg-gray-400 h-8 "></Skeleton>
      <Skeleton className="w-[30%] bg-gray-400 h-8 "></Skeleton>
    </div>
  );
};

export const TableSkeleton = () => {
  return (
    <div className="w-screen h-[50vh] absolute top-4 ">
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
    </div>
  );
};
