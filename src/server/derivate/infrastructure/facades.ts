import { findDerivate } from "@/server/derivate/domain/usecase";
import { getDerivate } from "@/server/derivate/appliction/getderivate";
import { dataclassQuery } from "@/server/derivate/infrastructure/model";

const facadeFN = () => {
  const method: findDerivate = {
    find_derivate_by_Names: getDerivate(dataclassQuery).find_derivate_by_Names,
  };
  return method;
};

export const facadeDerivate = facadeFN();
