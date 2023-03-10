import useSocket from ".";
import { User } from "../models/User";

const socket = useSocket();
export const getTripleDiceScore = (currentUser: User, gameId: string) => {
  console.log("GET TRIPLE DICE: " + currentUser.name, gameId);
  if (!currentUser) {
    throw new Error("User name is required");
  }
  socket.emit("GET_TRIPLEDICE", { currentUser, gameId });
};

export const attackPlayer = (playerId: number, value?: number) => {
  socket.emit("ATTACK_PLAYER", { playerId, value });
};

export const healthPlayer = (playerId: number, value?: number) => {
  socket.emit("HEALTH_PLAYER", { playerId, value });
};

export const getCharaters = (currentUser: User) => {
  console.log("getCharaters");
  socket.emit("GET_CHARACTERS", currentUser);
};

export const getGame = (gameId: string) => {
  socket.emit("GET_GAME", gameId);
};
