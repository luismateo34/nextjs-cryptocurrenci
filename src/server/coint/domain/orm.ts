import type { ListnamecriptoInterface } from "./coint";
//-----------------------
export interface ormCrypt{
getCryptos_name(name:string):Promise<ListnamecriptoInterface[]>
}
