"use client";
import { useScroll } from "./useScroll";
import { RowTable } from "@/app/derivatives/localcomponets/tableRow";

export const Scroll = () => {
  const { der, load, ref } = useScroll();
  return (
    <tbody
      className="w-full h-4/6 flex flex-col justify-around gap-2 overflow-y-scroll"
    >
      {der.length === 0 ||
        der.map((el) => (
          <RowTable
            contract_type={el.contract_type}
            market={el.market}
            price={el.price}
            price_percentage_change_24h={el.price_percentage_change_24h}
            symbol={el.symbol}
            volume_24h={el.volume_24h}
            spread={el.spread}
            key={el.symbol}
          />
        ))}
      <div className="h-9" ref={ref}>
      {load && <span>loading</span>}
      </div>
    </tbody>
  );
};
