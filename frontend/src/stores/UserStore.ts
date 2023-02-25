import { create } from "zustand";
import { PlayerCharacter } from "../models/characters/PlayerCharacter";
import { User } from "../models/User";

// Store pour les données de personnages
export const useUserStore = create((set) => ({
  user: {
    name: "Halim",
    role: "Player",
  },
  setUser: (user: User) => set({ user }),
}));
