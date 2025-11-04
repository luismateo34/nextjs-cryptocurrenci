"use client";
import { ErrorBoundary } from "react-error-boundary";
import { RowTable } from "@/app/derivatives/localcomponets/tableRow";
import { v4 } from "uuid";
import Skeleton from "@/app/derivatives/localcomponets/tableSkeleton";
import loader from "./loader.module.css";
import { useList } from "./useList";

export const ClientList = () => {
  const { datamemo, error, loading, status, nextdata, ref } = useList();
  //----------------
  if (status === "error") return <span>error: {error?.message}</span>;
  //------------------------
  else if (status === "pending") {
    return (
      <div className="w-full h-full flex flex-col justify-around gap-2 ">
        <Skeleton />
      </div>
    );
  }
  return (
    <>
      <ErrorBoundary fallback={<div>error en la carga de datos</div>}>
        {datamemo.length !== 0 &&
          datamemo.map((el) => {
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
        {loading && (
          <div className="text-center text-slate-600">
            <span className={loader.loader}></span>
          </div>
        )}
        <div className="flex flex-row justify-center" ref={ref}>
          {!nextdata && <p className="text-slate-600">No more posts to load</p>}
        </div>
      </ErrorBoundary>
    </>
  );
};
