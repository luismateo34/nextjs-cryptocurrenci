import { FC } from "react";
import { ButtonClient } from "./clientComponent/buttonClient";
import  type {Date} from "@/types/derivatives.types"
export const RowTable: FC<Date> = ({
  symbol,
  price,
  spread,
  market,
  volume_24h,
  contract_type,
  price_percentage_change_24h,
}) => {
  return (
    <tr key={symbol} className="w-full h-[10vh] flex flex-row justify-around gap-2">
      <td>{symbol}</td>
      <td>{price}</td>
      <td>
        <ButtonClient
          key={symbol}
          price={price}
          spread={spread}
          market={market}
          volume_24h={volume_24h}
          symbol={symbol}
          contract_type={contract_type}
          price_percentage_change_24h={price_percentage_change_24h}
        >
          {symbol}
        </ButtonClient>
      </td>
    </tr>
  );
};
