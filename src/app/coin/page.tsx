import { SearchInput } from "@/app/coin/localComponent/clientComponent/searchInput";
import { Coints } from "@/app/coin/localComponent/tableCoint";
import { Suspense } from "react";
import { TableSkeleton } from "./localComponent/tableSkeleton";
import { LoaderComponent } from "@/app/coin/localComponent/clientComponent/loader/loader";

export default async function Page({
  searchParams,
}: {
  searchParams?: { name?: string };
}) {
  const name = searchParams?.name || "";
  return (
    <>
    <main className="w-screen h-[calc(100vh-3rem)]  flex flex-col  items-center ">
      <h1 className="inline-block my-8">crypto coint</h1>
      <SearchInput placeholder="coin name" />
      <table className="w-11/12 h-4/5 mx-auto">
        <thead className="w-full h-1/5 ">
          <tr className="w-full h-full grid grid-col-3 justify-items-center">
            <th className="col-start-1 col-end-2">name</th>
            <th className="col-start-2 col-end-3">simbol</th>
            <th className="col-start-3 col-end-4">go to coint</th>
          </tr>
        </thead>
        <tbody className="flex flex-col justify-around items-center gap-3 relative">
          <Suspense key={name} fallback={<TableSkeleton />}>
            <Coints name={name} key={name} />
          </Suspense>
        </tbody>
      </table>
    </main>
      <LoaderComponent />
    </>
  );
}
