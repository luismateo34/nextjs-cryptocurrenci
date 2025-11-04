import { ClientList } from "@/app/derivatives/localcomponets/clientComponent/scrollInfinity/List";
import { ServerList } from "@/app/derivatives/server/component/Servelist";

import { fetchDerivate } from "@/app/derivatives/localcomponets/fetchderivate";

export const TableDerivate = async () => {
  const init = await fetchDerivate(1);
  return (
    <>
      <ServerList initial={init} Element={ClientList} />
    </>
  );
};
