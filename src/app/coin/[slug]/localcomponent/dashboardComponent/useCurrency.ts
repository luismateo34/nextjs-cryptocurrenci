import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const useCurrency = () => {
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
  return { handelChange, value };
};
