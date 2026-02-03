import { ListnamecriptoInterface } from "@/server/coint/domain/coint";
import { ButtonTable } from "@/app/coin/localComponent/clientComponent/buttonTable";

export const CointList = ({
  Listcript,
}: {
  Listcript: ListnamecriptoInterface[];
}) => {
  return (
    <>
      {Listcript.map((el) => {
        return (
          <div
            key={el.id_coint}
            className="w-full h-8 mr-2  grid grid-cols-3 hover:bg-white/30 rounded-md gap-3"
          >
            <div className="col-start-1 col-end-2 h-8 mr-2 flex justify-center place-self-center overflow-hidden w-full backdrop-blur-sm bg-black/30 rounded-md ">
              {el.name.length > 12
                ? el.name.split(" ").slice(0, 2).join(" ")
                : el.name}
            </div>
            <div className="col-start-2 col-end-3 h-8 mr-2 flex justify-center place-self-center overflow-hidden w-full backdrop-blur-sm bg-black/30 rounded-md">
              {el.symbol}
            </div>
            <div className="cols-start-3 col-end-4">
              <ButtonTable
                ids={el.id_coint}
                name={
                  el.name.length > 12
                    ? el.name.split(" ").slice(0, 2).join(" ")
                    : el.name
                }
                className="w-full  h-8 mr-2 bg-indigo-800/90  hover:bg-orange-600 active:bg-amber-500  rounded-md"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
