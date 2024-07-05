"use client";
import { ErrorBoundary } from "react-error-boundary";
import { RowTable } from "@/app/derivatives/localcomponets/tableRow";
import { v4 } from "uuid";
import Skeleton from "@/app/derivatives/localcomponets/tableSkeleton";
import loader from "./loader.module.css";
import { Deriv } from "@/types/derivatives.types";
import { useList } from "./useList";

export const List = ({ initial }: { initial: Deriv[] }) => {
  const { data, datamemo, error, isFetchingNextPage, observerTarget, status } =
    useList(initial);
  if (status === "error") return <span>error: {error?.message}</span>;
  else if (status === "pending") {
    return (
      <div className="w-full h-full flex flex-col justify-around gap-2 ">
        <Skeleton />
      </div>
    );
  } else if (status === "success")
    return (
      <div className="w-full h-full flex flex-col justify-around gap-2 ">
        <ErrorBoundary fallback={<div>error en la carga de datos</div>}>
          {datamemo.map((el) => {
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
          {isFetchingNextPage && data !== undefined && data?.pages.length <= 1227 && (
            <div className="text-center text-slate-600 mt-5">
              <span className={loader.loader}></span>
            </div>
          )}
          <div className="text-center text-slate-600 mt-5">
            {data !== undefined && data?.pages.length <= 1227 ? (
              <div ref={observerTarget}></div>
            ) : (
              <p className="text-slate-600">No more posts to load</p>
            )}
          </div>
        </ErrorBoundary>
      </div>
    );
};
