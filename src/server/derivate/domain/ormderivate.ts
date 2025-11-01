import type { DerivateCriptointerface } from "./derivate";

export interface ormDerivate {
  find_array_derivate(page: number): Promise<DerivateCriptointerface[]>;
}
