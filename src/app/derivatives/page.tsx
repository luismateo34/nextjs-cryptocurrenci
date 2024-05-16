import { TableDerivate } from "@/app/derivatives/localcomponets/tableDerivate";
import { DashBoard } from "@/app/derivatives/localcomponets/clientComponent/dashboard";

export default async function Home() {
  return (
    <>
      <main className="w-full  relative ">
        <div className="h-1/5 flex flex-row justify-center items-center">
          <h1>crypto market</h1>
        </div>
        <div className="grid grid-cols-2 h-4/5">
          <TableDerivate className="col-start-1 col-end-2" />
          <div className=" fixed top-1/4 right-5 grid grid-cols-2 w-1/2 h-2/3 justify-items-center place-items-center bg-red-800 ">
            <DashBoard className="col-start-1 col-end-2 "/>
          </div>
        </div>
      </main>
    </>
  );
}
