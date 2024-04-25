import { SearchInput } from "@/app/coin/localComponent/searchInput";
import { TableCoint } from "@/app/coin/localComponent/tableCoint";
import { Suspense } from "react";
import {TableSkeleton} from "@/app/coin/localComponent/tableSkeleton"

export default async function Page({
  searchParams,
}: {
  searchParams?: { name?: string };
}) {
  const name = searchParams?.name || "";
  return (
    <main>
      <h1>crypto coint</h1>
      <SearchInput placeholder="coin name" />
      <Suspense key={name} fallback={<TableSkeleton/>}>
        <TableCoint name={name} key={name} />
      </Suspense>
    </main>
  );
}
