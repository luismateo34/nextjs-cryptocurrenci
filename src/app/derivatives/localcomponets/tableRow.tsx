"use client";
import { FC } from "react";
import { ButtonClient } from "./clientComponent/buttonClient";
import { Selected } from "@/app/derivatives/localcomponets/store/selected";
import { DerivateCriptointerface } from "@/server/derivate/domain/derivate";

export const RowTable: FC<DerivateCriptointerface> = ({
  symbol,
  price,
  spread,
  market,
  volume_24h,
  contract_type,
  price_percentage_change_24h,
}) => {
  const { value } = Selected((state) => state);
  return (
    <div
      key={symbol}
      className={`w-full rounded-md h-[10vh] grid grid-cols-2 gap-2  ${
        value === symbol ? "bg-white/20" : ""
      }`}
    >
      <div className="col-start-1 col-end-2 place-self-center rounded-md p-2 bg-sky-700">{symbol}</div>
      <div className="col-start-2 col-end-3 place-self-center">
        <ButtonClient
          key={symbol}
          price={price}
          spread={spread}
          market={market}
          volume_24h={volume_24h}
          symbol={symbol}
          contract_type={contract_type}
          price_percentage_change_24h={price_percentage_change_24h}
          value={symbol}
	  className={"bg-amber-300 text-red-800 border-purple-800 rounded-md p-2"}
        >
          view date
        </ButtonClient>
      </div>
    </div>
  );
};
