"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {currency} from "@/types/types.coin"
const currencyARR: currency[] = ["usd", "sek","gbp","nok","cny","brl","nzd","sgd","aud","eur","jpg","mxn"]

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
    <Select
      value={value}
      defaultValue="usd"
      onValueChange={handelChange}
      name="select"
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>currency</SelectLabel>
          {currencyARR.map((el) => (
            <SelectItem key={el} value={el}>
              {el}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
