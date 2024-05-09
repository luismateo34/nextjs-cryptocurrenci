"use server"
import {Derivate, Deriv} from "@/types/derivatives.types"
const url = process.env.DOMAIN_URL;
const apiDeribaties = "/api/derivatives";

export const fetchDerivate = async ( pag: number | undefined ):Promise<Deriv [] | string> => {
  const page = pag === undefined ? 1 : pag
  try {
    const fetcher = await fetch(`${url}${apiDeribaties}?pag=${page}`);
    if (!fetcher.ok || fetcher.status === 500) throw new Error("error");
    const json: Derivate = await fetcher.json();
    return json.derivateCripto;
  } catch {
    return "error";
  }
};
