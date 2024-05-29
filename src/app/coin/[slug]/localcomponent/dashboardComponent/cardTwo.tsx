import { GraficCircule } from "@/components/graficCircule";
import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";

interface cardParam {
  image: string;
  symbol: string;
  current_price: number;
  name: string;
  id: string;
  high_24h: number;
  low_24h: number;
  market_cap_rank: number;
  market_cap_change_percentage_24h: number;
  price_change_percentage_24h: number;
  className: string;
}

export const CardTwo: FC<cardParam> = ({
  image,
  symbol,
  current_price,
  name,
  id,
  high_24h,
  low_24h,
  market_cap_rank,
  market_cap_change_percentage_24h,
  price_change_percentage_24h,
  className,
}) => {
  return (
    <Card
      className={` ${className} flex flex-col justify-between items-stretch gap-2 bg-blue-900/15 backdrop-blur-sm `}
    >
      <CardContent>
        <div className="flex flex-row justify-between items-center rounded-lg bg-slate-200/90 backdrop-blur-sm my-3">
          <figure>
            <img src={image} alt={`${name} image`} className="h-11 w-11" />
          </figure>
          <div className="text-blue-950 mx-auto font-semibold text-lg">
            {symbol}
          </div>
        </div>
        {/* price*/}
        <div className="mr-auto my-3 px-2 h-5 w-full rounded-md bg-sky-900/35">
          currenprice: {current_price}
        </div>
        {/* muestra targeta con mas datos  */}
        <div className="w-full flex flex-row justify-between gap-1 rtive ">
          <div className=" w-full flex flex-row justify-between gap-1 z-10 absolute  ">
            <details className="z-10 w-10/12">
              <summary>More data</summary>
              <section className=" w-full flex flex-col justify-around items-center text-amber-300  bg-black/65 backdrop-blur-sm rounded-md">
                <div> high_24: {high_24h}</div>
                <div> low_24: {low_24h}</div>
                <div> ranking : {market_cap_rank}</div>
                <div>"market_cap_change_percentage_24h:</div>
                <div className="text-red-600">
                  {market_cap_change_percentage_24h}
                </div>
              </section>
            </details>
          </div>
        </div>
        {/*grafico circular*/}
        <div className="flex flex-col justify-center items-center mt-2 p-1">
          <GraficCircule
            porcentaje={price_change_percentage_24h}
            key={id}
            className="mt-3"
          />
        </div>
      </CardContent>
    </Card>
  );
};
