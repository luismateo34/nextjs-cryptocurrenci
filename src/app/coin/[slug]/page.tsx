import { dataCoin } from "@/app/coin/[slug]/localcomponent/functionFetch/dataCoin";
import { currency } from "@/types/coin.types";
import { CardTwo } from "@/app/coin/[slug]/localcomponent/dashboardComponent/cardTwo";
import { CardGrafic } from "@/app/coin/[slug]/localcomponent/dashboardComponent/cardGrafic";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ ids: string; currency: string; days: string }>;
}) {
  const { slug } = await params;
  const { currency, days, ids } = await searchParams;
  const currencyOpt: currency =
    currency === undefined ? ("usd" as currency) : (currency as currency);

  const data = await dataCoin(currency, ids);
  return (
    <main className="w-screen h-[calc(100vh-3rem)] flex flex-col justify-around items-center pt-14  lg:pt-0">
      <h1 className="my-4  text-lg font-semibold underline decoration-solid">
        {slug}
      </h1>
      {typeof data !== "string" &&
        data.map((el) => {
          return (
            <section
              key={el.id}
              className="mt-12 lg:mt-3 flex flex-col justify-between items-stretch lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-2 w-full lg:h-5/6"
            >
              {/*Cryptocurrency Data Card */}
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
                className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 w-11/12 px-2 mx-auto"
              />
              {/* dinamic grafic*/}
              <CardGrafic
                currencyOpt={currencyOpt}
                days={days ?? "30"}
                key={el.id}
                className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:h-full h-[50vh] w-full`"
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
