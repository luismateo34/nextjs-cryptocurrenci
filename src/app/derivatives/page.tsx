import { TableDerivate } from "@/app/derivatives/localcomponets/tableDerivate";
import { DashBoard } from "@/app/derivatives/localcomponets/clientComponent/dashboard";
import { Suspense } from "react";
import { TableSkeleton } from "@/app/derivatives/localcomponets/tableSkeleton";
import { Section } from "@/components/section";

export default async function Home() {
  return (
    <>
      <Section>
        <h1>crypto market</h1>
        <Suspense fallback={<TableSkeleton />}>
          <TableDerivate  />
        </Suspense>
        <DashBoard />
      </Section>
    </>
  );
}
