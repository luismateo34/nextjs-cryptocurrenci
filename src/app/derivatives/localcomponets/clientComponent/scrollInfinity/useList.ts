import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useEffectEvent, useState } from "react";
import { fetchDerivate } from "@/app/derivatives/localcomponets/fetchderivate";
import type { DerivateCriptointerface } from "@/server/derivate/domain/derivate";

export const useList = (initial: DerivateCriptointerface[]) => {
  const { data, error, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: ({ pageParam }) => fetchDerivate(pageParam),
      initialPageParam: 2,
      getNextPageParam: (_lastPages, allPages) => allPages.length + 1,
    });
  //----------------------
  const [datamemo, setDatamemo] = useState<DerivateCriptointerface[]>(initial);
  //-----------------------
  const arrlist = useEffectEvent(() => {
    if (data?.pages === undefined) return [];
    //-----------------
    const clone = structuredClone(data.pages);
    const returndata = clone?.reduce((acc, el) => {
      const arr = [...acc, ...el];
      return arr;
    }, []);
    //------------------
    setDatamemo((prev) => {
      const arr = [...prev, ...returndata];
      return arr;
    });
  });

  //----------------------
  useEffect(() => {
    if (data?.pages === undefined) return;
    arrlist();
  }, [isFetchingNextPage]);
  //----------------------------
  //--------------------------------
  const observerTarget = useRef(null);
  //------------------------------
  const observerFn = useEffectEvent(
    () =>
      new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchNextPage();
          }
        },
        { threshold: 0.5 },
      ),
  );
  //--------------------------------
  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return;
    }
    const observer = observerFn();
    //---------------------------------------
    if (observerTarget.current !== null) {
      observer.observe(observerTarget.current);
    }
    //-------------------------------------
    return () => {
      if (observerTarget.current !== null) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, []);

  const loading =
    isFetchingNextPage && data !== undefined && data?.pages.length <= 1227;

  const nextdata = data !== undefined && data?.pages.length <= 1227;

  return { status, error, datamemo, loading, observerTarget, nextdata };
};
