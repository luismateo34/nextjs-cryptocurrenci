"use client";
import { Store } from "@/app/derivatives/localcomponets/store/store";
import { Selected } from "@/app/derivatives/localcomponets/store/selected";
import { active } from "@/app/derivatives/localcomponets/store/active";
import type { DerivateCriptointerface } from "@/server/derivate/domain/derivate";
import { FC } from "react";

interface ButtonType extends DerivateCriptointerface {
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
      <button
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
      </button>
    </>
  );
};
