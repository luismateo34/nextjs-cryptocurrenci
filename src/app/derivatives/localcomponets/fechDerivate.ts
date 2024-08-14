"use server";
import { Derivate, Deriv } from "@/types/derivatives.types";
const derurl = process.env.DOMAIN_URL;
const apiDeribaties = "/api/derivatives";

export const fetchDerivate = async (pageParam: number): Promise<Deriv[]> => {
  try {
    const fetcher = await fetch(`${derurl}${apiDeribaties}?pag=${pageParam}`);
    const json: Derivate = await fetcher.json();
    if (!fetcher.ok || fetcher.status === 500) throw new Error("error");
    return json.derivateCripto;
  } catch (e) {
    //throw new Error();
    return [];
  }
};
