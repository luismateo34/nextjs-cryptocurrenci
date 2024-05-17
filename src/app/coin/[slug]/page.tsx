import { GraficCircule } from "@/components/graficCircule";
import { HistoryPrice } from "@/app/coin/[slug]/localcomponent/dashboardComponent/historyPrice";
import { SelectCurrency } from "@/app/coin/[slug]/localcomponent/dashboardComponent/selectCurrency";
import { SelectDay } from "@/app/coin/[slug]/localcomponent/dashboardComponent/selectDay";
import { dataCoin } from "@/app/coin/[slug]/localcomponent/functionFetch/dataCoin";
import { currency } from "@/types/coin.types";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { ids: string; currency: string; days: string };
}) {
  const currencyOpt: currency =
    searchParams?.currency === undefined
      ? ("usd" as currency)
      : (searchParams?.currency as currency);
  const days =
    searchParams?.days === undefined ? "30" : (searchParams?.days as string);
  const data = await dataCoin(searchParams?.currency, searchParams?.ids);
  return (
    <>
      <h1>{params.slug}</h1>
      <h2>dashboard</h2>
      {typeof data !== "string" &&
        data.map((el) => {
          return (
            <div key={el.id}>
              <figure>
                <img src={el.image} alt={`${el.name} image`} />
              </figure>
              <span> currenprice: {el.current_price}</span>
              <span> high_24: {el.high_24h}</span>
              <span> low_24: {el.low_24h}</span>
              <br />
              <span> ranking : {el.market_cap_rank}</span>
              <span> simbol: {el.symbol}</span>
              <span>
                market_cap_change_24h: {el.market_cap_change_percentage_24h}
              </span>
              <span>
                "market_cap_change_percentage_24h:
                {el.market_cap_change_percentage_24h}
              </span>
              <SelectDay />
              <SelectCurrency />
              <GraficCircule
                porcentaje={el.price_change_percentage_24h}
                key={el.id}
              />
              <HistoryPrice key={el.id} currency={currencyOpt} days={days} />
            </div>
          );
        })}
      {typeof data === "string" && data === "error" && (
        <div> datos no encontrados</div>
      )}
    </>
  );
}
