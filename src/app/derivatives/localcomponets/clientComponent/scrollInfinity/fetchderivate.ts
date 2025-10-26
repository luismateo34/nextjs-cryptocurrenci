import { Derivate } from "@/types/derivatives.types";

const apiDeribaties = "/api/derivatives";
export const fetchDerivate = async (pageParam: number): Promise<Deriv[]> => {
  try {
    const fetcher = await fetch(`${apiDeribaties}?pag=${pageParam}`);
    const json: Derivate = await fetcher.json();
    if (!fetcher.ok || fetcher.status === 500) throw new Error("error");
    return json.derivateCripto;
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};

