"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { RowTable } from "@/app/derivatives/localcomponets/tableRow";
import { useEffect, useMemo, useRef } from "react";
import { v4 } from "uuid";
import Skeleton from "@/app/derivatives/localcomponets/tableSkeleton";
import loader from "./loader.module.css";
import { Derivate, Deriv } from "@/types/derivatives.types";
const apiDeribaties = "/api/derivatives";

export const fetchDerivate = async (pageParam: number): Promise<Deriv[]> => {
  try {
    const fetcher = await fetch(`${apiDeribaties}?pag=${pageParam}`);
    const json: Derivate = await fetcher.json();
    if (!fetcher.ok || fetcher.status === 500) throw new Error("error");
    return json.derivateCripto;
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};

export const List = ({ initial }: { initial: Deriv[] }) => {
  const {
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: ({ pageParam }) => fetchDerivate(pageParam),
    initialPageParam: 2,
    getNextPageParam: (lastPages, allPages) => allPages.length + 1,
  });

  const datamemo = useMemo(() => {
    if (data === undefined) return [];
    const clone = structuredClone(data);
    const returndata = clone?.pages.reduce((acc, el) => {
      return [...acc, ...el];
    }, []);
    const total = [...initial, ...returndata];
    return total;
  }, [data]);

  const inview = useMemo(() => {
    const result = datamemo.length === 0 ? true : false;
    return result;
  }, [datamemo]);

  const observerTarget = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [inview]);
  if (status === "error") return <span>error: {error.message}</span>;
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
          {isFetchingNextPage && (
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
