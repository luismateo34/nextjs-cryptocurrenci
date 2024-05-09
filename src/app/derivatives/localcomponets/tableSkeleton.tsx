import { Skeleton } from "@/components/ui/skeleton";

export const TableSkeleton = () => {
  return (
    <section className="w-full h-4/6 flex flex-col justify-around gap-2 overflow-x-hidden  scroll-smooth ">
      <div className="w-full flex flex-row justify-around gap-2">
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
      </div>
      <div className="w-full flex flex-row justify-around gap-2">
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
        <Skeleton className="w-[20%] bg-gray-400 h-8 "></Skeleton>
      </div>
    </section>
  );
};
