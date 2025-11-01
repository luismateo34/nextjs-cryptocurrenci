import type { DerivateCriptointerface } from "./derivate";

export interface findDerivate{
 find_derivate_by_Names(page:number): Promise<DerivateCriptointerface[]>
}

