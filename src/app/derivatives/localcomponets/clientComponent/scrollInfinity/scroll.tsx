"use client";
import { RowTable } from "@/app/derivatives/localcomponets/tableRow";
import {useIntersection} from "./useIntersection"
import {v4} from "uuid"

export default function Scroll() {

  const {der,load,observerTarget} = useIntersection()
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
            key={v4()}
          />
        ))}
        {load && <tr>loading</tr>}
      <tr className="h-2 mt-4 " ref={observerTarget}>
      </tr>
    </>
  );
}
