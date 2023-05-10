import { Schema, model, ObjectId } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { PlayerCharacter } from './characters/PlayerCharacter'
import { NonPlayerCharacter } from './characters/NonPlayerCharacter'
import { EnemyCharacter } from './characters/EnemyCharacter'
import { IUser } from './User'

export interface HistoryEvent {
  id: number
  type: string
  timeStamp: number
}

export interface DiceResult extends HistoryEvent {
  dice1: number
  dice2: number
  userID: string
}

// 1. Create an interface representing a document in MongoDB.
export type IGame = {
  _id: ObjectId
  name: string
  description?: string
  players: IUser[]
  gm: IUser | null
  nonPlayerChatacters: NonPlayerCharacter[]
  enemyCharacters: EnemyCharacter[]
  events: HistoryEvent[]
}

// 2. Create a Schema corresponding to the document interface.
const gameSchema = new Schema<IGame>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    players: [{ type: Object, required: true }],
    gm: { type: Object },
    nonPlayerChatacters: [{ type: Object }],
    enemyCharacters: [{ type: Object }],

    events: [{ type: Object }],
  },
  { collection: 'games' }
)

gameSchema.plugin(uniqueValidator)

// 3. Create a Model.
const Game = model<IGame>('Game', gameSchema)

export default Game
