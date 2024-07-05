import {jsonCoint, Coint} from "@/types/jsonCoin.types"

const url = process.env.DOMAIN_URL;
const port = process.env.PORT;
const apicoint = "/api/coint";

export const data = async (name: string | undefined): Promise<Coint[] | undefined> => {
  try {
  if (name === undefined) return undefined;
  const data = await fetch(`${url}:${port}${apicoint}?name=${name}`);
    if(data.status === 500)  throw new Error()
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

