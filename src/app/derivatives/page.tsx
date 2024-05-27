import { TableDerivate } from "@/app/derivatives/localcomponets/tableDerivate";
import { DashBoard } from "@/app/derivatives/localcomponets/clientComponent/dashboard";

export default async function Home() {
  return (
    <>
      <main className=" w-screen h-[calc(100vh-3rem)]  relative ">
        <div className="h-1/5 flex flex-row justify-center items-center">
          <h1>crypto market</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-4/5">
          <TableDerivate className="col-start-1 col-end-2" />
            <DashBoard />
        </div>
      </main>
    </>
  );
}
