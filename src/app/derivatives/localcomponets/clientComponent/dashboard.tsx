"use client"
import {GraficCircule} from "@/components/graficCircule"
import { Store} from "@/app/derivatives/localcomponets/store/store";


export const DashBoard = ({className}:{className?:string}) => {
  const {price_percentage_change_24h,symbol} = Store(state => state)
  if (symbol === "") return null
  return(
  <div className={`w-52 h-60 flex flex-col  justify-center items-center bg-cyan-600 ${className}`}>
    <GraficCircule key={crypto.randomUUID()} porcentaje={price_percentage_change_24h} title={symbol} />
  </div>
  )
}
