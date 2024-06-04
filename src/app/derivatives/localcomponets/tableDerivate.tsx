import { fetchDerivate } from "@/app/derivatives/localcomponets/fechDerivate";
import { RowTable } from "@/app/derivatives/localcomponets/tableRow";
import { Suspense } from "react";
import {v4} from "uuid"
import dynamic from 'next/dynamic'

const Skeleton = dynamic(() => import('./tableSkeleton'), { ssr: false })
const RowScroll = dynamic(()=>import('./clientComponent/scrollInfinity/scroll'),{ssr:false})


export const TableDerivate = async ({className}:{className?:string}) => {
  const derivDate = await fetchDerivate(1);
  return (
    <table className={`flex flex-col justify-around gap-2 md:mx-auto w-full md:w-[80%] h-full ${className}`}>
      <thead className="w-full h-12">
        <tr className=" grid grid-cols-2 ">
          <th className="col-start-1 col-end-2">name</th>
          <th className="col-start-2 col-end-3">stadistic</th>
        </tr>
      </thead>
      <tbody className="w-full h-max flex flex-col justify-around gap-2 ">
        <Suspense fallback={<Skeleton />}>
          {typeof derivDate !== "string" &&
            derivDate.map((el) => {
              return (
                <RowTable
                  key={v4()}
                  contract_type={el.contract_type}
                  spread={el.spread}
                  price={el.price}
                  price_percentage_change_24h={el.price_percentage_change_24h}
                  market={el.market}
                  volume_24h={el.volume_24h}
                  symbol={el.symbol}
                />
              );
            })}
        </Suspense>
        <RowScroll/>
      </tbody>
    </table>
  );
};
