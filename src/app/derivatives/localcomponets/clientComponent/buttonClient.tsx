"use client";
import { Button } from "@/components/ui/button";
import { Store } from "@/app/derivatives/localcomponets/store/store";
import { Selected } from "@/app/derivatives/localcomponets/store/selected";
import { active } from "@/app/derivatives/localcomponets/store/active";
import { type Date } from "@/types/derivatives.types";
import { FC } from "react";

interface ButtonType extends Date {
  children: string;
  className?: string;
  value: string;
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
  const { show } = active((state) => state);
  const { select } = Selected((state) => state);
  return (
    <>
      <Button
        className={`${className} flex flex-row items-center`}
        onClick={() => {
          show();
          buildStore({
            contract_type,
            market,
            price,
            price_percentage_change_24h,
            spread,
            symbol,
            volume_24h,
          });
          select(symbol);
        }}
      >
        {children}
      </Button>
    </>
  );
};
