// import { TableDerivate } from "@/app/derivatives/localcomponets/tableDerivate";
//import { DashBoard } from "@/app/derivatives/localcomponets/clientComponent/dashboard";
//import { VoidDashboad } from "@/app/derivatives/localcomponets/clientComponent/voidDashboad";
//import { List } from "@/app/derivatives/localcomponets/clientComponent/scrollInfinity/List";
import Skeleton  from "@/app/derivatives/localcomponets/tableSkeleton"
import {TableDerivate} from "@/app/derivatives/localcomponets/tableDerivate"

import { Suspense } from "react";
export default async function Home() {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-center text-2xl mb-2">Derivatives list</h1>
      <Suspense fallback={<Skeleton/>}>
        <TableDerivate/>
      </Suspense>

    </div>
  );
}
