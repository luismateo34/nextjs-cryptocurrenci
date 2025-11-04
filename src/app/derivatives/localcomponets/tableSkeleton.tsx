import { Skeleton } from "@/components/ui/skeleton";

const RowSkeleton = () => {
  return (
    <div className="w-full h-[10vh] flex flex-row justify-around gap-2">
      <Skeleton className="w-full h-full bg-gray-400 "></Skeleton>
    </div>
  );
};

export default function TableSkeleton() {
  return (
    <section className="w-full h-full flex flex-col justify-around gap-2  ">
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
      <RowSkeleton/>
          </section>
  );
}
