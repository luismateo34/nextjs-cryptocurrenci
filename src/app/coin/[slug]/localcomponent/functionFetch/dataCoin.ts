import { Root } from "@/types/types.coin";
const key = process.env.API_COINT;
const options = {
  method: "GET",
  headers: { accept: "application/json", "x-cg-demo-api-key": `${key}` },
};

export const dataCoin = async (
    currency: string | undefined,
    ids: string | undefined
  ) => {
    try {
      if (ids === undefined) throw new Error("error");

      const currencyValue = currency === undefined ? "usd" : currency;
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyValue}&ids=${ids}`;
      const fetchfun = await fetch(url, options);
      if ( fetchfun.status === 500 || fetchfun.status === 404 || !fetchfun.ok ) throw new Error("error")
      const json: Root = await fetchfun.json();
      return json;
    } catch (e) {
      if (e instanceof ErrorEvent){
      return e.message
    } else return "error";
    }
  };
