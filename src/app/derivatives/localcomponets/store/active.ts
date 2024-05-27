import { create } from "zustand";

interface showType{
 showData: boolean;
 show: () => void;
 noShow: () => void;
}

export const active = create<showType>((set)=>({
showData: false,
show: () => set({ showData:true }),
noShow: ()=> set({showData:false}),
}))
