import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Store pour les données de "dés"
export const useDiceStore = create()(
  devtools(
    persist(
      (set) => ({
        dices: [],
        setDices: (dices: any) => set({ dices }),
      }),
      {
        name: "Dice-storage",
      }
    )
  )
);
