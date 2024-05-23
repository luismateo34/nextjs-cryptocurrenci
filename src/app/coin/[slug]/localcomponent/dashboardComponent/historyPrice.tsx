import { type currency } from "@/types/coin.types";
import { GraficLine } from "@/components/linearGraf";
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

export const HistoryPrice = async ({
  currency,
  days,
}: {
  currency: currency;
  days: string;
}) => {
  const historyCoin = async (currency: currency, days: string) => {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}&interval=daily&precision=1`;
    try {
      const fetchData = await fetch(url, options);
      if (fetchData.status === 500 || fetchData.status === 404 || !fetchData.ok) throw new Error("error");
      const json: Root = await fetchData.json();
      return json;
    } catch {
      return "error";
    }
  };
  const dataCoin = await historyCoin(currency, days);

  return (
    <section className=" w-full h-10/12">
      {typeof dataCoin !== "string" && (
        <GraficLine
          key={crypto.randomUUID()}
          data={dataCoin.prices.map((el) => el[1].toString())}
          label="History of Price"
          labels={dataCoin.prices.map((el) => {
            const dayDate = new Date(el[0]);
            const year = dayDate.getUTCFullYear();
            const month = dayDate.getUTCMonth();
            const day = dayDate.getUTCDate();
            const time = `${day}-${month}-${year}`;
            return time;
          })}
        />
      )}
    </section>
  );
};
