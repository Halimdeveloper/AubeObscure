import { Router } from 'express'
import {
  getEnemyCharacters,
  postEnemyCharacters,
} from '../controllers/EnemyCharacterCtrl'

const EnemyCharacters = Router()

EnemyCharacters.get('/', getEnemyCharacters)
EnemyCharacters.post('/', postEnemyCharacters)

export default EnemyCharacters
