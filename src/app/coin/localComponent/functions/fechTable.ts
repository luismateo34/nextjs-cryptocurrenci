"use server";
import { ListnamecriptoInterface } from "@/server/coint/domain/coint";

const url = process.env.NEXT_PUBLIC_URL_DERIBATE;
const apicoint = "/api/coin";

export const data = async (
  name: string | undefined
): Promise<ListnamecriptoInterface[] | undefined> => {
  if (name === undefined) {
    return undefined;
  }
  try {
    const data = await fetch(`${url}${apicoint}?name=${name}`);
    if (!data.ok || data.status === 500) {
      throw new Error();
    }
    const json: ListnamecriptoInterface[] = await data.json();
    return json;
  } catch {
    return [
      {
        id_coint: "error",
        symbol: "error",
        name: "error",
      },
    ];
  }
};
