"use client"
import {GraficCircule} from "@/components/graficCircule"
import { Store} from "@/app/derivatives/localcomponets/store/store";


export const DashBoard = () => {
  const {price_percentage_change_24h,symbol} = Store(state => state)
  if (symbol === "") return null
  return(
  <section className="w-52 h-60 flex flex-col sticky top-2.5 right-0.5 justify-center items-center bg-cyan-600 ">
    <GraficCircule key={crypto.randomUUID()} porcentaje={price_percentage_change_24h} title={symbol} />
  </section>
  )
}
