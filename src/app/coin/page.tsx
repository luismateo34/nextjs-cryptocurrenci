import { SearchInput } from "@/app/coin/localComponent/clientComponent/searchInput";
import { Coints } from "@/app/coin/localComponent/tableCoint";
import { Suspense } from "react";
import { LoaderComponent } from "@/app/coin/localComponent/clientComponent/loader/loader";
import dynamic from "next/dynamic";
import { TableSkeleton } from "./localComponent/tableSkeleton";
//const Skeleton = dynamic(
  //() =>
    //import("./localComponent/tableSkeleton").then((mod) => mod.TableSkeleton),
//);

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } =  await searchParams;
  return (
    <>
      <main className="w-screen h-[calc(100vh-3rem)]  flex flex-col  items-center ">
        <h1 className="inline-block underline text-lg font-semibold my-8">Search cryptocurrency</h1>
        {/*Cryptocurrency Search Bar */}
        <SearchInput placeholder="Type in the cryptocurrency you are looking for" />
        {/* header table list of criptocurrency*/}
        <div className="w-11/12 h-4/5 mx-auto">
          <div className="w-full h-7 text-lg font-semibold text-yellow-500 grid grid-col-3 justify-items-center bg-white/40 rounded-lg">
              <div className="col-start-1 col-end-2">name</div>
              <div className="col-start-2 col-end-3">simbol</div>
              <div className="col-start-3 col-end-4">go to coint</div>
          </div>
          <div className="flex flex-col justify-around items-center gap-3 relative pt-4">
            {/* lsit of criptocurrency*/}
            <Suspense key={crypto.randomUUID()} fallback={<TableSkeleton />}>
              <Coints name={name ?? ""} key={crypto.randomUUID()} />
            </Suspense>
          </div>
        </div>
      </main>
      <LoaderComponent />
    </>
  );
}
