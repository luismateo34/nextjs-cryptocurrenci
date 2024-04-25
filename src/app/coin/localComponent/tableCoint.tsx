import { data } from "@/app/coin/localComponent/fechTable";
import { ButtonTable } from "@/app/coin/localComponent/buttonTable";

export const TableCoint = async ({ name }: { name: string }) => {
  const coint = await data(name);
  return (
    <table>
      <caption> A list coin names</caption>
      <thead>
        <tr>
          <th>name</th>
          <th>simbol</th>
          <th>go to coint</th>
        </tr>
      </thead>
      <tbody>
        {/* si coint es undefined no se muestra nada  */}
        {/* si id no es error devueve el componente  dato */}
        {coint === undefined ||
          coint.map((el) => el.id)[0] === "error" ||
          coint.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.symbol}</td>
	            	<th> <ButtonTable ids={el.id} name={el.name} className="w-full h-full"  /></th>
              </tr>
            );
          })}
        {/* en caso de id error, devuelve un componente  error */}
        {coint === undefined ||
          (coint.map((el) => el.id)[0] === "error" &&
            coint.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td> error en el servicio</td>
                </tr>
              );
            }))}
      </tbody>
      <footer>list coin for name</footer>
    </table>
  );
};
