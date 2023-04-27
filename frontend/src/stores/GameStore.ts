import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Character } from "../models/characters/Character";
import { EnemyCharacter } from "../models/characters/EnemyCharacter";
import { NonPlayerCharacter } from "../models/characters/NonPlayerCharacter";
import { PlayerCharacter } from "../models/characters/PlayerCharacter";
import { Game } from "../models/Game";

interface GameState {
  game: Game;
  setGame: (game: Game) => void;
  updatePlayerCharacter: (character: PlayerCharacter) => void;
  updateNonPlayerCharacter: (character: NonPlayerCharacter) => void;
  updateEnemyCharacter: (character: EnemyCharacter) => void;
}

export const useGameStore = create<GameState>()(
  devtools(
    persist(
      (set, get: any) => ({
        game: {} as Game,
        setGame: (game: Game) => set({ game }),
        updatePlayerCharacter: (character: PlayerCharacter) =>
          set(() =>
            get().game.playerCharacters.map((c: PlayerCharacter) =>
              c.id === character.id ? character : c
            )
          ),
        updateNonPlayerCharacter: (character: NonPlayerCharacter) =>
          set((state: any) =>
            state.game.nonPlayerCharacters.map((c: NonPlayerCharacter) =>
              c.id === character.id ? character : c
            )
          ),
        updateEnemyCharacter: (character: EnemyCharacter) =>
          set((state: any) =>
            state.game.enemyCharacters.map((c: EnemyCharacter) =>
              c.id === character.id ? character : c
            )
          ),
      }),
      {
        name: "Game-storage",
      }
    )
  )
);
