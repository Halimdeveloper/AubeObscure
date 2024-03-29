import useSocket from '.'
import { Character } from '../models/characters/Character'
import { Game } from '../models/Game'
import { DiceResult } from '../models/history/Dice'
import { User, RoleEnum } from '../models/User'

const socket = useSocket()
export const socketEvents = (
  navigate: (arg0: string) => void,
  dices: any,
  setDices: (arg0: any) => void,
  users: User[],
  setUsers: (arg0: any) => void,
  currentUser: User,
  setCurrentUser: (arg0: any) => void,
  game: Game,
  setGame: (arg0: any) => void
) => {
  socket.on('connect', () => {
    console.log('Socket is connected: ' + socket.connected)
  })

  socket.on('disconnect', () => {
    console.log('Socket is disconnected: ' + !socket.connected)
  })

  socket.on('TRIPLEDICE', (resultDice: DiceResult[]) => {
    setDices(resultDice)
  })

  socket.on('GAME', (game) => {
    // set game
    setGame(game)
    //init list of game history events
    //TODO
  })
}
