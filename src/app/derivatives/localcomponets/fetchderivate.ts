import { DerivateCriptointerface, derivateJson } from "@/server/derivate/domain/derivate";
//import { pino } from "pino";

const url = process.env.NEXT_PUBLIC_URL_DERIBATE;
const apiDeribaties = "/derivatives/server/api";
export const fetchDerivate = async (pageParam: number): Promise<DerivateCriptointerface[]> => {
  try {
    const fetcher = await fetch(`${url}${apiDeribaties}?pag=${pageParam}`);
    const json: derivateJson = await fetcher.json();
    if (!fetcher.ok || fetcher.status === 500) throw new Error("error");
    return json.derivateCripto;
  } catch (e) {
    //pino().info(`error: ${e}`)
    return []
  }
};

