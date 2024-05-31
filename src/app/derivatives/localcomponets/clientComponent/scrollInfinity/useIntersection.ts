import { useState, useEffect, useRef } from "react";
import { Deriv } from "@/types/derivatives.types";
import { fetchDerivate } from "@/app/derivatives/localcomponets/fechDerivate";
const obserOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export const useIntersection = () => {
  const [der, setDer] = useState<Array<Deriv>>([]);
  const [page, setPage] = useState<number>(2);
  const [load, setLoad] = useState<boolean>(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchDerivate(page)
          .then((res) => {
            if (typeof res === "string") throw new Error("error");
            setDer((prevder) => [...prevder, ...res]), setLoad(true);
          })
          .then(() => {
            setPage((prevpage) => prevpage + 1);
          })
          .catch(() => {
            setDer([]);
          })
          .finally(() => {
            setLoad(false);
          });
      }
    }, obserOption);
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {};
  }, [observerTarget, page]);

  return { observerTarget, load, der };
};
