import { Character } from './Character'

export interface EnemyCharacter extends Character {
  _id: number
  type: string
  difficulty: number
  url: string
}
