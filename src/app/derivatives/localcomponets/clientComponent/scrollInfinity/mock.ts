import { Derivate, Deriv } from "@/types/derivatives.types";
import { vi } from "vitest";

export const obj: Derivate = {
  derivateCripto: [
    {
      basis: 2,
      contract_type: "test",
      funding_rate: 1,
      index_id: "1",
      last_traded_at: 1,
      market: "test",
      price: "1",
      price_percentage_change_24h: 1,
      symbol: "test",
      volume_24h: 1,
    },
  ],
};
export const objDeriv: Deriv = {
  basis: 2,
  contract_type: "test",
  funding_rate: 1,
  index_id: "1",
  last_traded_at: 1,
  market: "test",
  price: "1",
  price_percentage_change_24h: 1,
  symbol: "test",
  volume_24h: 1,
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

