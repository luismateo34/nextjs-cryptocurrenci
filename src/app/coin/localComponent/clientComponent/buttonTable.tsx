"use client";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

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

  return (
    <Button onClick={redirect} className={className}>
      {name}
    </Button>
  );
};
