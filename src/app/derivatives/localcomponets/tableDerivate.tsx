import { List } from "@/app/derivatives/localcomponets/clientComponent/scrollInfinity/List";

import { fetchDerivate } from "@/app/derivatives/localcomponets/fechDerivate";

export const TableDerivate = async () => {
  const init = await fetchDerivate(1);
  return (
    <>
      <List initial={init} />
    </>
  );
};
