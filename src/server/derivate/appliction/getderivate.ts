import type { ormDerivate } from "@/server/derivate/domain/ormderivate";
import type { findDerivate } from "@/server/derivate/domain/usecase";
//--------------------------------------------------
export const getDerivate = (database: ormDerivate): findDerivate => {
  const obj: findDerivate = {
    find_derivate_by_Names: async (page: number) => {
      const obj = await database.find_array_derivate(page);
      return obj;
    },
  };
  return obj;
};
