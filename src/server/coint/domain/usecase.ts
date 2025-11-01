import type { ListnamecriptoInterface } from "./coint";

export interface findcrypto{
find_cryptos_by_Names(name: string): Promise<ListnamecriptoInterface[]>
}

