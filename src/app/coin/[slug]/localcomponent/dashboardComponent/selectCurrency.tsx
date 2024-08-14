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
    <label>
      select currency
      <select
        value={value !== null ? value : "usd"}
        onChange={(e) => {
          handelChange(e.target.value);
        }}
        className="w-44 h-5 block text-black bg-orange-400 rounded-sm"
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
