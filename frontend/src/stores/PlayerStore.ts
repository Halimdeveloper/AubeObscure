import { create } from "zustand";
import { PlayerCharacter } from "../models/characters/PlayerCharacter";

// Store pour les données de personnages
export const usePlayerStore = create((set) => ({
  playerCharacters: [{
    id: 2,
    firstName: "Miche",
    lastName: "Miche",
    health: 100,
    maxHealth: 100,
    strength: 70,
    level : 2,
    experience: 5,
    class: "warrior",
    stats: {}
  }, {
    id: 1,
    firstName: "Jean",
    lastName: "Jean",
    health: 100,
    maxHealth: 100,
    strength: 50,
    level : 1,
    experience: 4,
    class: "warrior",
    stats: {}
  }],
  setPlayerCharacters: (playerCharacters: PlayerCharacter[]) => set({ playerCharacters })
}));