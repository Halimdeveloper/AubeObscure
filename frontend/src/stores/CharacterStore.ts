import { create } from "zustand";
import { Character } from "../models/characters/Character";

// Store pour les données de personnages
export const useCharacterStore = create((set) => ({
  characters: [],
  setCharacters: (characters: Character[]) => set({ characters }),
}));
