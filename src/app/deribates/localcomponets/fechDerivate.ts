const key = process.env.API_COINT;

const url = "https://api.coingecko.com/api/v3/derivatives";
const options = {
  method: "GET",
  headers: { accept: "application/json", "x-cg-demo-api-key": `${key}` },
};
export interface Derivate {
  market: string;
  symbol: string;
  index_id: string;
  price: string;
  price_percentage_change_24h: number;
  contract_type: string;
  index?: number;
  basis: number;
  spread?: number;
  funding_rate: number;
  open_interest?: number;
  volume_24h: number;
  last_traded_at: number;
  expired_at?: number;
}
export type DerivateArray = Derivate[];
export const fetchDerivate = async () => {
  try {
    const fetcher = await fetch(url, options);
    if (!fetcher.ok || fetcher.status === 500) throw new Error("error");
    const json: Derivate[] = await fetcher.json();
    return json;
  } catch {
    return "error";
  }
};
