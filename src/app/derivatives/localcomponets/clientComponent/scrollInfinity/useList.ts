import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo  } from "react";
import { fetchDerivate } from "@/app/derivatives/localcomponets/fetchderivate";
import type { DerivateCriptointerface } from "@/server/derivate/domain/derivate";
import { useInView } from "react-intersection-observer";

export const useList = (initial: DerivateCriptointerface[]) => {
  const { data, error, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: ({ pageParam }) => fetchDerivate(pageParam),
      initialPageParam: 2,
      getNextPageParam: (_lastPages, allPages) => allPages.length + 1,
    });
  //--------------------------------
  const { ref,  inView } = useInView()
  //--------------------------------
    const datamemo = useMemo(() => {
      if (data?.pages === undefined) return [];
      //-----------------
      const clone = structuredClone(data.pages);
      const initialdata = structuredClone(initial);
      const returndata = clone?.reduce((acc, el) => {
        const arr = [...acc, ...el];
        return arr;
      }, []);
      //------------------
        const arr = [...initialdata, ...returndata];
        return arr;
    },[data])
  //--------------------------------
  useEffect(() => {
    if ( inView){
      fetchNextPage()
    }
      }, [fetchNextPage, inView]);

  const loading =
    isFetchingNextPage && data !== undefined && data?.pages.length <= 1227;

  const nextdata = data !== undefined && data?.pages.length <= 1227;

  return { status, error, datamemo, loading, nextdata, ref };
};
