/* eslint-disable no-unused-vars */
import { Schema, model } from 'mongoose'
import { EnemyCharacter } from './characters/EnemyCharacter'
import uniqueValidator from 'mongoose-unique-validator'

// 1. Create an interface representing a document in MongoDB.

//2. Create a Schema corresponding to the document interface.
const enemyCharactereSchema = new Schema<EnemyCharacter>({
  id: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  health: { type: Number, required: false },
  maxHealth: { type: Number, required: true },
  type: { type: String, required: true },
  difficulty: { type: Number, required: true },
  url: { type: String, required: true },
})

enemyCharactereSchema.plugin(uniqueValidator)

// 3. Create a Model.
const EnemyCharacter = model<EnemyCharacter>(
  'EnemyCharacter',
  enemyCharactereSchema
)

export default EnemyCharacter
