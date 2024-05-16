import { create } from "zustand";

interface actionType{
 action:boolean,
 active: () => void,
 disable: () => void
}

export const store = create<actionType>((set) =>({
  action:false,
  active: ()=> set({action:true}),
  disable: () => set({action:false})
}))
