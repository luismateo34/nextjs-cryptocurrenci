"use client";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { store } from "@/app/coin/localComponent/clientComponent/loader/storeLoader";

export const ButtonTable = ({
  name,
  ids,
  className = "",
}: {
  name: string;
  ids: string;
  className?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const redirect = () => {
    router.push(`${pathname}/${name}?ids=${ids}`);
  };
  const { active } = store((state) => state);
  return (
    <Button
      onClick={() => {
        redirect(), active();
      }}
      className={className}
    >
      {name}
    </Button>
  );
};
