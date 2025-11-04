import { ErrorBoundary } from "react-error-boundary";
import { RowTable } from "@/app/derivatives/localcomponets/tableRow";
import { v4 } from "uuid";
import type { DerivateCriptointerface } from "@/server/derivate/domain/derivate";
import { JSX } from "react";

export const ServerList = ({ initial, Element }: { initial: DerivateCriptointerface[], Element: JSX.ElementType }) => {
      return (
      <div className="w-full h-full flex flex-col justify-around gap-2 ">
        <ErrorBoundary fallback={<div>error en la carga de datos</div>}>
          {initial.map((el) => {
            return (
              <RowTable
                contract_type={el.contract_type}
                market={el.market}
                price={el.price}
                price_percentage_change_24h={el.price_percentage_change_24h}
                symbol={el.symbol}
                volume_24h={el.volume_24h}
                spread={el.spread}
                key={v4()}
              />
            );
          })}
        </ErrorBoundary>
        <Element/>
      </div>
    );
};
