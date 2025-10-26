import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useRef } from "react";
import {  Deriv } from "@/types/derivatives.types";
import { fetchDerivate } from './fetchderivate';


export const useList = (initial: Deriv[]) => {
  const { data, error, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: ({ pageParam }) => fetchDerivate(pageParam),
      initialPageParam: 2,
      getNextPageParam: (_lastPages, allPages) => allPages.length + 1,
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
      { threshold: 0.5 },
    );

    if (observerTarget.current !== null) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current !== null) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [datamemo]);

  const loading =
    isFetchingNextPage && data !== undefined && data?.pages.length <= 1227;

  const nextdata = data !== undefined && data?.pages.length <= 1227;

  return { status, error, datamemo,loading, observerTarget, nextdata };
};
