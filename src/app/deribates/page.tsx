import { TableDerivate } from "@/app/deribates/localcomponets/tableDerivate";
import {DashBoard } from "@/app/deribates/localcomponets/clientComponent/dashboard"

export default async function Home() {
  return (
    <>
      <h1>crypto market</h1>
      <div className="flex flex-row ">
        <section className=" snap-y  w-5/12 h-4/6 overflow-y-scroll overflow-x-hidden  scroll-smooth  ">
          <TableDerivate />
        </section>
	<DashBoard/>
      </div>
    </>
  );
}
