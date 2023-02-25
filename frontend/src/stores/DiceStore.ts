import { create } from "zustand";

// Store pour les données de "dés"
export const useDiceStore = create((set) => ({
  dices: [],
  setDices: (dices:any) => set({ dices })
}));