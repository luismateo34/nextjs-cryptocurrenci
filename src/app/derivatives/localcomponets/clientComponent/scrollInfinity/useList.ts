import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useRef } from "react";
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

export const useList = (initial: Deriv[]) => {
  const { data, error, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
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
      { threshold: 0.5 },
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
  return { status, error, datamemo, data, isFetchingNextPage, observerTarget };
};
