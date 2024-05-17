"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
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

export const SelectCurrency = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const param = new URLSearchParams(searchParams);
  const value =
    param.get("currency") === undefined
      ? "usd"
      : (param.get("currency") as string);
  const handelChange = (valueDay: string) => {
    if (valueDay) {
      param.set("currency", valueDay);
    } else {
      param.delete("currency");
    }
    replace(`${pathname}?${param.toString()}`);
  };
  return (
    <label>
      select currency
      <select
        value={value}
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
