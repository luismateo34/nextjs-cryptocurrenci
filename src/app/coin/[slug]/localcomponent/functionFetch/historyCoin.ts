import { type currency } from "@/types/coin.types";

const key = process.env.API_COINT;
const options = {
  method: "GET",
  headers: { accept: "application/json", "x-cg-demo-api-key": `${key}` },
};
interface Root {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

export const historyCoin = async (
  currency: currency,
  days: string
): Promise<Root | "error"> => {
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}&interval=daily&precision=1`;

  try {
    const fetchData = await fetch(url, options);
    if (fetchData.status === 500 || fetchData.status === 404 || !fetchData.ok)
      throw new Error("error");

    const json: Root = await fetchData.json();
    return json;
  } catch {
    return "error";
  }
};
