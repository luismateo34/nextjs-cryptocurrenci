import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { fetchDerivate } from "@/app/derivatives/localcomponets/fetchderivate";
import { useInView } from "react-intersection-observer";

export const useList = () => {
  const { data, error, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: ({ pageParam }) => fetchDerivate(pageParam),
      initialPageParam: 2,
      getNextPageParam: (_lastPages, allPages) => allPages.length + 1,
    });
  //--------------------------------
  const { ref, inView } = useInView();
  //--------------------------------
  const datamemo = useMemo(() => {
    if (data?.pages === undefined) return [];
    const returndata = data.pages?.reduce((acc, el) => {
      const arr = [...acc, ...el];
      return arr;
    }, []);
    //------------------
    return returndata;
  }, [data]);
  //--------------------------------
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const loading =
    isFetchingNextPage && data !== undefined && data?.pages.length <= 1227;

  const nextdata = data !== undefined && data?.pages.length <= 1227;

  return { status, error, datamemo, loading, nextdata, ref };
};
