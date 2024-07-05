"use client";
import { GraficCircule } from "@/components/graficCircule";
import { Store } from "@/app/derivatives/localcomponets/store/store";
import { active } from "@/app/derivatives/localcomponets/store/active";
import { Selected } from "@/app/derivatives/localcomponets/store/selected";
import { useEffect } from "react";
export const DashBoard = () => {
  const {
    price_percentage_change_24h,
    symbol,
    contract_type,
    market,
    volume_24h,
    price,
    spread,
    resetDate,
  } = Store((state) => state);
  const { noShow, showData } = active((state) => state);
  const { noselect } = Selected((state) => state);
  useEffect(() => {
    () => {};
    return () => {
      noShow();
      noselect();
      resetDate();
    };
  }, []);
  if (symbol === "") return null;
  return (
    <section
      className={`${
        showData ? "fixed" : "hidden"
      }  inset-0 w-full h-full  z-10 backdrop-blur-sm bg-black/10 flex flex-col justify-center items-center`}
    >
      <div
        className={` fixed  z-20 grid  grid-cols-1 w-full md:w-1/2  h-full md:h-2/3 justify-items-center place-items-center  bg-black/25 backdrop-blur-sm  rounded-lg`}
      >
        {/* tarjeta con grafico circular*/}
        <div className="w-full h-full flex flex-col  md:pb-2 justify-around items-center gap-2 col-start-1 col-end-2">
          {/* deselecciona la fila de la tabla*/}
          {/*oculta la tarjeta y resetea los datos del estado*/}
          <button
            className="w-3/5 h-8 rounded-sm my-auto md:m-0 mx-auto text-white bg-pink-800/90 hover:bg-amber-400"
            onClick={() => {
              noShow();
              noselect();
              resetDate();
            }}
          >
            hidden
          </button>

          <GraficCircule
            key={symbol}
            porcentaje={price_percentage_change_24h}
          />
        </div>
        {/* lista de atributos  */}
        <div className="w-full h-full flex flex-col flex-wrap  text-yellow-500  px-2 justify-around items-center gap-2 col-start-1 col-end-2 md:col-start-2 md:col-end-3">
          <span className="w-3/4 md:w-full inline-flex bg-white/40 backdrop-blur-md rounded-md px-2 justify-center h-6">
            {symbol}
          </span>

          <span className="w-3/4 md:w-full inline-flex bg-white/40 backdrop-blur-md rounded-md px-2 justify-center h-6">
            price:{price}
          </span>
          <span className="w-3/4 md:w-full inline-flex bg-white/40 backdrop-blur-md rounded-md px-2 justify-center h-6">
            contract_type:{contract_type}
          </span>
          <span className="w-3/4 md:w-full inline-flex bg-white/40 backdrop-blur-md rounded-md px-2 justify-center h-6">
            market: {market}
          </span>
          <span className="w-3/4 md:w-full inline-flex bg-white/40 backdrop-blur-md rounded-md px-2 justify-center h-6">
            volume_24h: {volume_24h}
          </span>
          <span className="w-3/4 md:w-full inline-flex bg-white/40 backdrop-blur-md rounded-md px-2 justify-center h-6">
            spread:{spread}
          </span>
        </div>
      </div>
    </section>
  );
};
