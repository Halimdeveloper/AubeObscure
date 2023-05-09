import { DefaultEventsMap } from '@socket.io/component-emitter'
import { io, Socket } from 'socket.io-client'

let socket: Socket

function useSocket() {
  if (!socket) {
    socket = io('http://localhost:3333')
  }
  return socket
}

export default useSocket
