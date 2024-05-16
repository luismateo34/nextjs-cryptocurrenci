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

const intervalay = [ "7", "14", "21", "30", "60", "90", "180", "365"];

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
    <Select
      value={value}
      defaultValue="30"
      onValueChange={handelChange}
      name="select"
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select  days interval" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>currency</SelectLabel>
          {intervalay.map((el) => (
            <SelectItem key={el} value={el.toString()}>
              {el}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
