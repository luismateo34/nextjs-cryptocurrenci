"use client";
import { useCurrency } from "./useCurrency";
import { currency } from "@/types/coin.types";
const currencyARR: currency[] = [
  "usd",
  "sek",
  "gbp",
  "nok",
  "cny",
  "brl",
  "nzd",
  "sgd",
  "aud",
  "eur",
  "mxn",
];
/*
 *Element to select the currency
 *
 */
export const SelectCurrency = () => {
  const { handelChange, value } = useCurrency();
  return (
    <label className="text-base font-semibold">
      <span className="pl-2">Select currency</span>
      <select
        value={value}
        onChange={(e) => {
          handelChange(e.target.value);
        }}
        className="pl-2 w-8/12  md:w-44 h-7 block text-black bg-orange-400 rounded-sm"
      >
        <option disabled={true} value="">
          select currency
        </option>
        {currencyARR.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </label>
  );
};
