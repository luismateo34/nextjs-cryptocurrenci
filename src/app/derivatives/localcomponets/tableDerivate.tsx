import { List } from "@/app/derivatives/localcomponets/clientComponent/scrollInfinity/List";

import { fetchDerivate } from "@/app/derivatives/localcomponets/fetchderivate";

export const TableDerivate = async () => {
  const init = await fetchDerivate(1);
  console.log(init)
  return (
    <>
      <List initial={init} />
    </>
  );
};
