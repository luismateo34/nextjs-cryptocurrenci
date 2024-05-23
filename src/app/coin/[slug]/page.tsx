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
    <main className="w-full h-full flex flex-col justify-around items-center">
      <h1 className="mt-1">{params.slug}</h1>
      {typeof data !== "string" &&
        data.map((el) => {
          return (
            <section
              key={el.id}
              className="grid grid-cols-3 grid-rows-2 gap-2 w-full h-5/6"
            >
              <div className="col-start-3 col-end-4 row-start-1 row-end-3 flex flex-col justify-between items-stretch gap-2 ">
                <div>
                  <div className="flex flex-row justify-between items-center rounded-lg bg-slate-200/90 backdrop-blur-sm my-3">
                    <figure>
                      <img
                        src={el.image}
                        alt={`${el.name} image`}
                        className="h-11 w-11"
                      />
                    </figure>
                    <div className="text-blue-950 mx-auto font-semibold text-lg">
                      {el.symbol}
                    </div>
                  </div>
                  {/* price*/}
                  <div className="mr-auto my-3 px-2 h-5 w-full rounded-md bg-sky-900/35">
                    currenprice: {el.current_price}
                  </div>
                  {/* muestra targeta con mas datos  */}
                  <div className="w-full flex flex-row justify-between gap-1 relative ">
                    <div className=" w-full flex flex-row justify-between gap-1 z-10 absolute  ">
                      <details className="z-10">
                        <summary>More data</summary>
                        <section className=" w-full flex flex-col justify-around items-center bg-gray-300/80 rounded-md">
                          <div> high_24: {el.high_24h}</div>
                          <div> low_24: {el.low_24h}</div>
                          <div> ranking : {el.market_cap_rank}</div>
                          <div>
                            market_cap_change_24h:
                            {el.market_cap_change_percentage_24h}
                          </div>
                          <div>
                            "market_cap_change_percentage_24h:
                            {el.market_cap_change_percentage_24h}
                          </div>
                        </section>
                      </details>
                    </div>
                  </div>
		  {/*grafico circular*/}
                  <div className="flex flex-col justify-center items-center mt-2 p-1">
                    <GraficCircule
                      porcentaje={el.price_change_percentage_24h}
                      key={el.id}
                      className="mt-3"
                    />
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-3 row-start-1 row-end-3 h-full w-full ">
                <div className="flex flex-row justify-around items-center">
                  <SelectDay />
                  <SelectCurrency />
                </div>
                <HistoryPrice key={el.id} currency={currencyOpt} days={days} />
              </div>
            </section>
          );
        })}
      {typeof data === "string" && data === "error" && (
        <div> datos no encontrados</div>
      )}
    </main>
  );
}
