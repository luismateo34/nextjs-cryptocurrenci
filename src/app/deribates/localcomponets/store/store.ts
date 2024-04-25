import { create } from "zustand";

export interface Date {
  symbol: string;
  price_percentage_change_24h: number;
  contract_type: string;
  price: string;
  market: string;
  volume_24h: number;
  spread: undefined | number;
}
interface Action{
  resetDate: () => void;
  newDate: (state: Date) => void;
}

export const Store = create<Date & Action>((set) => ({
  symbol: "",
  price_percentage_change_24h: 0,
  contract_type: "",
  price: "",
  market: "",
  volume_24h: 0,
  spread: undefined,
  resetDate: () =>
    set({
      symbol: "",
      price_percentage_change_24h: 0,
      contract_type: "",
      price: "",
      market: "",
      volume_24h: 0,
      spread: undefined,
    }),
  newDate: (state) => set({
      symbol: state.symbol,
      price_percentage_change_24h: state.price_percentage_change_24h,
      contract_type: state.contract_type,
      price: state.price,
      market: state.market,
      volume_24h: state.volume_24h,
      spread: state.spread,
    }),
}));

