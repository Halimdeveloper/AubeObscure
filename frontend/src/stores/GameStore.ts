import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Game } from "../models/Game";

export const useGameStore = create()(
  devtools(
    persist(
      (set) => ({
        game: {} as Game,
        setGame: (game: Game) => set({ game }),
      }),
      {
        name: "Game-storage",
      }
    )
  )
);
