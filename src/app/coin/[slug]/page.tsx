import { dataCoin } from "@/app/coin/[slug]/localcomponent/functionFetch/dataCoin";
import { currency } from "@/types/coin.types";
import { CardTwo } from "@/app/coin/[slug]/localcomponent/dashboardComponent/cardTwo";
import { CardGrafic } from "@/app/coin/[slug]/localcomponent/dashboardComponent/cardGrafic";

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
    <main className="w-screen h-[calc(100vh-3rem)] flex flex-col justify-around items-center pt-14  md:pt-0">
      <h1 className="my-4  ">{params.slug}</h1>
      {typeof data !== "string" &&
        data.map((el) => {
          return (
            <section
              key={el.id}
              className="mt-0 md:mt-3 flex flex-col justify-between items-stretch md:grid md:grid-cols-3 md:grid-rows-2 gap-2 w-full md:h-5/6"
            >
              <CardTwo
                current_price={el.current_price}
                high_24h={el.high_24h}
                id={el.id}
                image={el.image}
                low_24h={el.low_24h}
                market_cap_change_percentage_24h={
                  el.market_cap_change_percentage_24h
                }
                market_cap_rank={el.market_cap_rank}
                name={el.name}
                price_change_percentage_24h={el.ath_change_percentage}
                symbol={el.symbol}
                key={el.id}
                className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3"
              />
              <CardGrafic
                currencyOpt={currencyOpt}
                days={days}
                key={el.id}
                className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 md:h-full h-[50vh] w-full`"
              />
            </section>
          );
        })}
      {typeof data === "string" && data === "error" && (
        <div> datos no encontrados</div>
      )}
    </main>
  );
}
