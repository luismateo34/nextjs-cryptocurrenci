import { create } from "zustand";

interface showType{
 value: string;
 select: ( key:string) => void;
 noselect: () => void;
}
/* selecciona y delesecciona filas de la tabla de derivados*/
export const Selected = create<showType>((set)=>({
value: "",
select: (key) => set({ value:key }),
noselect: ()=> set({value:""}),
}))
