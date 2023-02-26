import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Character } from "../models/characters/Character";

export const useCharacterStore = create()(
  devtools(
    persist(
      (set) => ({
        characters: [],
        setCharacters: (characters: Character[]) => set({ characters }),
      }),
      {
        name: "User-storage",
      }
    )
  )
);
