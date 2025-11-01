import { data } from "@/app/coin/localComponent/functions/fechTable";
import { CointList } from "./cointList";
/*
 * Server-side component that returns a cryptocurrency listing
 */
export const Coints = async ({ name }: { name: string }) => {
  const coint = (await data(name)) ?? [];
  const isvoid = coint.length === 0;
  const isreject = coint.map((el) => el.id_coint)[0] === "error";
  if (isvoid || isreject) {
    return (
      <div>
        <div> error en el servicio</div>
      </div>
    );
  }
  if (!isvoid && !isreject) {
    return <CointList Listcript={coint} key={globalThis.crypto.randomUUID()} />;
  }
};
