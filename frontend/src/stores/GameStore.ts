import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { EnemyCharacter } from '../models/characters/EnemyCharacter'
import { NonPlayerCharacter } from '../models/characters/NonPlayerCharacter'
import { Game } from '../models/Game'

interface GameState {
  game: Game
  setGame: (game: Game) => void
  updateNonPlayerCharacter: (character: NonPlayerCharacter) => void
  updateEnemyCharacter: (character: EnemyCharacter) => void
}

export const useGameStore = create<GameState>()(
  devtools(
    persist(
      (set, get: any) => ({
        game: {} as Game,
        setGame: (game: Game) => set({ game }),
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
        name: 'Game-storage',
      }
    )
  )
)
