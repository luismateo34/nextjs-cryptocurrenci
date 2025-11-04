import { vi } from "vitest";
import {
  DerivateCriptointerface,
  derivateJson,
} from "@/server/derivate/domain/derivate";

export const obj: derivateJson = {
  derivateCripto: [
    {
      contract_type: "contract_type",
      market: "marquet",
      price: "20000",
      price_percentage_change_24h: 1,
      symbol: "symbol",
      volume_24h: 20000000,
      spread: 1,
    },
  ],
};
export const objDeriv: DerivateCriptointerface = {
  contract_type: "contract_type",
  market: "marquet",
  price: "20000",
  price_percentage_change_24h: 1,
  symbol: "symbol",
  volume_24h: 20000000,
  spread: 1,
};
export const Mockfetchresolve = vi.fn(() =>
  Promise.resolve({
    ok: true,
    status: 400,
    json: () => Promise.resolve(obj),
  }),
);
export const Mockfetchreject = vi.fn(() =>
  Promise.reject({
    ok: false,
    status: 500,
    json: () => {
      throw new Error();
    },
  }),
);
