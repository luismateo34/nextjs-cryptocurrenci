"use server"
import {jsonCoint, Coint} from "@/types/jsonCoin.types"

const url = process.env.NEXT_PUBLIC_URL_DERIBATE;
const apicoint = "/api/coint";

export const data = async (name: string | undefined): Promise<Coint[] | undefined> => {
  try {
  if (name === undefined) return undefined;
  const data = await fetch(`${url}${apicoint}?name=${name}`);
    if ( !data.ok || data.status === 500)  throw new Error()
  const json: jsonCoint = await data.json();

  return json.coints;
  }
  catch {
    return [{
     id : "error",
     symbol : "error",
     name : "error"
    }]

  }
};

