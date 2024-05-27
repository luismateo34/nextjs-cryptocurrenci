"use client";
import { GraficCircule } from "@/components/graficCircule";
import { Store } from "@/app/derivatives/localcomponets/store/store";
import { active } from "@/app/derivatives/localcomponets/store/active";
import {Selected} from "@/app/derivatives/localcomponets/store/selected"

export const DashBoard = () => {
  const {
    price_percentage_change_24h,
    symbol,
    contract_type,
    market,
    volume_24h,
    price,
    spread,
  } = Store((state) => state);
  const { noShow, showData } = active((state) => state);
  const {noselect} = Selected(state => state)
  if (symbol === "") return null;
  return (
    <div
      className={` ${
        showData ? "fixed" : "hidden"
      } top-0  md:top-1/4 md:right-5  z-20 grid  grid-cols-1 md:grid-cols-2 w-full md:w-1/2 h-full md:h-2/3 justify-items-center place-items-center md:bg-purple-800/20 bg-black/25 backdrop-blur-sm  rounded-lg`}
    >
      <div className="w-full h-full flex flex-col  md:pb-2 justify-around items-center gap-2 col-start-1 col-end-2">
        <button
          className="w-3/5 h-8 rounded-sm my-auto md:m-0 mx-auto text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:bg-amber-400"
          onClick={() => {
            noShow();
	    noselect()
          }}
        >
          hidden
        </button>

        <GraficCircule
          key={crypto.randomUUID()}
          porcentaje={price_percentage_change_24h}
        />
      </div>
      <div className="w-full h-full flex flex-col text-grtext-yellow-500  justify-around items-center gap-2 col-start-1 col-end-2 md:col-start-2 md:col-end-3">
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
  );
};
