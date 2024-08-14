import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const useSelectDay = () => {
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const { replace } = useRouter();

  const param = new URLSearchParams(searchParams);

  const value =
    param.get("days") === undefined ? "30" : (param.get("days") as string);

  const handelChange = (valueDay: string) => {
    if (valueDay) {
      param.set("days", valueDay);
    } else {
      param.delete("days");
    }
    replace(`${pathname}?${param.toString()}`);
  };
  return { value, handelChange };
};
