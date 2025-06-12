import { GraficCircule } from "@/components/graficCircule";
import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";
import { MoreData } from "./MoreData";

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
      className={` ${className} mt-32 md:mt-0 flex flex-col justify-between items-stretch gap-2 bg-blue-900/15 backdrop-blur-sm `}
    >
      <CardContent>
        <div className="flex flex-row justify-between items-center rounded-lg bg-slate-200/90 backdrop-blur-sm my-3 relative">
          <figure className="ml-1">
            <img src={image} alt={`${name} image`} className="h-11 w-11" />
          </figure>
          <div className="text-blue-950 font-semibold text-lg absolute right-1/2">
            {symbol}
          </div>
        </div>
        {/* price*/}
        <div className="mr-auto my-3 px-4 h-5 w-full rounded-md bg-amber-300 text-blue-800 text-base font-semibold">
          Currenprice: {current_price}
        </div>
        {/* muestra targeta con mas datos  */}
        <MoreData
          high_24h={high_24h}
          low_24h={low_24h}
          market_cap_change_percentage_24h={market_cap_change_percentage_24h}
          market_cap_rank={market_cap_rank}
        />
        {/*grafico circular*/}
        <div className="flex flex-col justify-center items-center mt-4 p-1">
          <GraficCircule
            porcentaje={price_change_percentage_24h}
            title={name}
            key={id}
            className="mt-3 bg-blue-900 "
          />
        </div>
      </CardContent>
    </Card>
  );
};
