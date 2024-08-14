import { type currency } from "@/types/coin.types";
import { GraficLine } from "@/components/linearGraf";
import { historyCoin } from "@/app/coin/[slug]/localcomponent/functionFetch/historyCoin";

export const HistoryPrice = async ({
  currency,
  days,
}: {
  currency: currency;
  days: string;
}) => {
  const dataCoin = await historyCoin(currency, days);

  return (
    <section className=" w-full h-10/12">
      {typeof dataCoin !== "string" && (
        <GraficLine
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
