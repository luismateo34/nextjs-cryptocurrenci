import type { findcrypto } from "@/server/coint/domain/usecase"
import { GetByName } from "@/server/coint/appliction/getcoint";
import { dataclassQuery } from "@/server/coint/infrastructure/model";


const cryptoFN = () => {
  const method: findcrypto = {
    find_cryptos_by_Names: GetByName(dataclassQuery).find_cryptos_by_Names,
  };
  return method;
};
export const facadeCrypto = cryptoFN();
