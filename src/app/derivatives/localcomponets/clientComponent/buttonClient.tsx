"use client";
import { Button } from "@/components/ui/button";
import { Store } from "@/app/derivatives/localcomponets/store/store";
import { type Date } from "@/types/derivatives.types"
import { FC } from "react";

interface ButtonType extends Date {
  children: string;
  className?: string;
}

export const ButtonClient: FC<ButtonType> = ({
  contract_type,
  market,
  price,
  price_percentage_change_24h,
  spread,
  symbol,
  volume_24h,
  children,
  className,
}) => {
  const buildStore = Store((state) => state.newDate);
  return (
    <Button
      className={`${className} flex flex-row items-center`}
      onClick={() => {
        buildStore({
          contract_type,
          market,
          price,
          price_percentage_change_24h,
          spread,
          symbol,
          volume_24h,
        });
      }}
    >
      {children}
    </Button>
  );
};
