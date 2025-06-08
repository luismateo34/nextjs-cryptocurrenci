import { HistoryPrice } from "./historyPrice";
import { SelectCurrency } from "./selectCurrency";
import { SelectDay } from "./selectDay";
import { currency } from "@/types/coin.types";

export const CardGrafic = ({
  currencyOpt,
  days,
  className,
}: {
  currencyOpt: currency;
  days: string;
  className: string;
}) => {
  return (
    <div className={` ${className}`} key={crypto.randomUUID()}>
      <div className="flex flex-row justify-around items-center">
        <SelectDay />
        <SelectCurrency />
      </div>
      <HistoryPrice currency={currencyOpt} days={days} />
    </div>
  );
};
