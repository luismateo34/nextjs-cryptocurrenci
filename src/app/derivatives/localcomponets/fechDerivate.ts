"use server";
import { DerivateCriptointerface } from "@/server/derivate/domain/derivate";
const derurl = process.env.DOMAIN_URL;
const apiDeribaties = "/api/derivatives";

export const fetchDerivate = async (pageParam: number): Promise<DerivateCriptointerface[]> => {
  try {
    const fetcher = await fetch(`${derurl}${apiDeribaties}?pag=${pageParam}`);
    const json: DerivateCriptointerface[] = await fetcher.json();
    if (fetcher.ok === false || fetcher.status === 500) {
      throw new Error("error");
    }
    return json;
  } catch  {
    return [];
  }
};
