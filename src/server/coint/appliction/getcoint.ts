import type { findcrypto } from "@/server/coint/domain/usecase";
import type { ormCrypt } from "@/server/coint/domain/orm";
//---------------------
export const GetByName = (database: ormCrypt): findcrypto => {
  const method: findcrypto = {
    find_cryptos_by_Names: async (name: string) => {
      try{
      const obj = await database.getCryptos_name(name);
      return obj;
      }catch{
	console.log("cryptos not found");
	return []
      }
    },
  };
  return method
};
