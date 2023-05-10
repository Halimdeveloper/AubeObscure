import express from 'express'
import setupRoutes from './routes'
import cors from 'cors'
import mongoose from 'mongoose'
import http from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import Logger from './lib/winston'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './lib/swagger'
import setupSocketIO from './socketIo'
dotenv.config()

//db INIT
const MongoDB_URI: string = process.env.MONGODB_URI!
mongoose
  .set('debug', (collectionName, method, query, doc) => {
    // debug mangoose
    Logger.info(`${collectionName}.${method}`, JSON.stringify(query), doc)
  })
  .connect(MongoDB_URI)
  .then(() => Logger.info('Connexion à MongoDB réussie !'))
  .catch((e: any) => Logger.error('Connexion à MongoDB échouée : ' + e))

//Express INIT
const app = express()
app.use(cors())
app.use(express.json())
const server = http.createServer(app)
const PORT = process.env.PORT || 3333
setupRoutes(app)

server.listen(PORT, () => {
  Logger.info(`Listening on port ${PORT}`)
})

//Socket INIT
const io = new Server(server, { cors: { origin: '*' } })
setupSocketIO(io)

// Expose Swagger documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
