import { EnemyCharacter } from './characters/EnemyCharacter'
import { NonPlayerCharacter } from './characters/NonPlayerCharacter'
import { User } from './User'

export type Game = {
  _id: string
  name: string
  description?: string
  players?: User[]
  gm?: User
  nonPlayerChatacters: NonPlayerCharacter[]
  enemyCharacters: EnemyCharacter[]
}
