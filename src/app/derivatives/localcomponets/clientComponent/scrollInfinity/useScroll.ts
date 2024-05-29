import { useState, useEffect } from "react";
import { Deriv } from "@/types/derivatives.types";
import { useInView } from "react-intersection-observer";
import { fetchDerivate } from "@/app/derivatives/localcomponets/fechDerivate";

export const useScroll = () => {
  const [der, setDer] = useState<Array<Deriv>>([]);
  const [page, setPage] = useState<number>(2);
  const [load, setLoad] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px",
  });
  useEffect(() => {
    if (inView) {
      fetchDerivate(page)
        .then((res) => {
          if (typeof res === "string") throw new Error("error");
          setDer((prevder) => [...prevder, ...res]), setLoad(true),
	  console.log("feche fun")
	  console.log(res)
        })
        .then(() => {
          setPage((prevpage) => prevpage + 1);
        })
        .catch(() => {
          setDer([]), console.log("error");
        })
        .finally(() => {
          setLoad(false);
        });
    }
  }, [inView, page]);
  return { der, load, ref };
};
