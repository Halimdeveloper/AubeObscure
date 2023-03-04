import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PlayerCharacter } from "../models/characters/PlayerCharacter";

export const useCharacterStore = create()(
  devtools(
    persist(
      (set) => ({
        characters: [] as PlayerCharacter[],
        setCharacters: (characters: PlayerCharacter[]) => set({ characters }),
      }),
      {
        name: "User-storage",
      }
    )
  )
);
