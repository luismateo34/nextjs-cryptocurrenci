"use client"
import {GraficCircule} from "@/components/graficCircule"
import { Store} from "@/app/deribates/localcomponets/store/store";


export const DashBoard = () => {
  const date = Store(state => state.price_percentage_change_24h)
  return(
  <section>
    <span>{}</span>
    <GraficCircule key={crypto.randomUUID()} porcentaje={date} />
  </section>
  )
}
