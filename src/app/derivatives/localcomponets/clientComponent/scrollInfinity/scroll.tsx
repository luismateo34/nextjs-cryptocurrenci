"use client";
import { useScroll } from "./useScroll";
import { RowTable } from "@/app/derivatives/localcomponets/tableRow";

export const Scroll = () => {
  const { der, load, ref } = useScroll();
  return (
    <>
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
      <div className="h-9 mb-5" ref={ref}>
      {load && <span>loading</span>}
      </div>
    </>
  );
};
