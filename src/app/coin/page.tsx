import { SearchInput } from "@/app/coin/localComponent/clientComponent/searchInput";
import { Coints } from "@/app/coin/localComponent/tableCoint";
import { Suspense } from "react";
import { LoaderComponent } from "@/app/coin/localComponent/clientComponent/loader/loader";
import dynamic from "next/dynamic";
const Skeleton = dynamic(
  () =>
    import("./localComponent/tableSkeleton").then((mod) => mod.TableSkeleton),
  { ssr: false }
);

export default async function Page({
  searchParams,
}: {
  searchParams?: { name?: string };
}) {
  const name = searchParams?.name ?? "";
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
            <Suspense key={name} fallback={<Skeleton />}>
              <Coints name={name} key={name} />
            </Suspense>
          </div>
        </div>
      </main>
      <LoaderComponent />
    </>
  );
}
