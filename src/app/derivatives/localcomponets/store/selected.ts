import { create } from "zustand";

interface showType{
 value: string;
 select: ( key:string) => void;
 noselect: () => void;
}

export const Selected = create<showType>((set)=>({
value: "",
select: (key) => set({ value:key }),
noselect: ()=> set({value:""}),
}))
