import { data } from "@/app/coin/localComponent/functions/fechTable";
import { ButtonTable } from "@/app/coin/localComponent/clientComponent/buttonTable";

export const Coints = async ({ name }: { name: string }) => {
  const coint = await data(name);
  return (
    <>
      {coint === undefined ||
        coint.map((el) => el.id)[0] === "error" ||
        coint.map((el) => {
          return (
            <tr key={el.id} className="w-full h-7 grid grid-cols-3">
              <td className="col-start-1 col-end-2 place-self-center">
                {el.name}
              </td>
              <td className="col-start-2 col-end-3 place-self-center">
                {el.symbol}
              </td>
              <td className="cols-start-3 col-end-4">
                <ButtonTable
                  ids={el.id}
                  name={el.name}
                  className="w-full h-8 mr-2 hover:bg-orange-600 active:bg-amber-500 "
                />
              </td>
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
    </>
  );
};
