import { fetchDerivate } from "@/app/deribates/localcomponets/fechDerivate";
import { ButtonClient } from "@/app/deribates/localcomponets/clientComponent/buttonClient";

export const TableDerivate = async () => {
  const derivDate = await fetchDerivate();
  return (
    <table>
      <caption>Derivate</caption>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>stadistic</th>
        </tr>
      </thead>
      <tbody>
        {derivDate !== "error" &&
          derivDate.map((el) => {
            return (
              <tr key={el.symbol}>
                <td>{el.symbol}</td>
                <td>{el.price}</td>
                <td>
                  <ButtonClient
                    key={el.symbol}
                    contract_type={el.contract_type}
                    price={el.price}
                    volume_24h={el.volume_24h}
                    price_percentage_change_24h={el.price_percentage_change_24h}
                    symbol={el.symbol}
                    spread={el.spread}
                    market={el.market}
                  >{el.symbol}
                  </ButtonClient>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
