"use client";
import { Button } from "@/components/ui/button";
import { Store, type Date } from "@/app/deribates/localcomponets/store/store";
import { FC } from "react";

interface ButtonType extends Date {
  children: string;
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
}) => {
  const buildStore = Store((state) => state.newDate);
  return (
    <Button
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
