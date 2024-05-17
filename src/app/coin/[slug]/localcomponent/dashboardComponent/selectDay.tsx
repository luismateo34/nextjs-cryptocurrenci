"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const intervalday = [ "7", "14", "21", "30", "60", "90", "180", "365"];

export const SelectDay = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const param = new URLSearchParams(searchParams);
  const value =
    param.get("days") === undefined
      ? "30"
      : (param.get("days") as string);
  const handelChange = (valueDay: string) => {
    if (valueDay) {
      param.set("days", valueDay);
    } else {
      param.delete("days");
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
        {intervalday.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </label>


      );
};
