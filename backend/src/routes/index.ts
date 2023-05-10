import { Application } from 'express'
import usersRoutes from './userRoutes'
import authRoutes from './authRoutes'
import gamesRoutes from './gamesRoutes'
import EnemyCharacterRoutes from './enemyCharactersRoutes'

const setupRoutes = (app: Application) => {
  app.use('/users', usersRoutes)
  app.use('/auth', authRoutes)
  app.use('/games', gamesRoutes)
  app.use('/enemyCharacters', EnemyCharacterRoutes)
}

export default setupRoutes
